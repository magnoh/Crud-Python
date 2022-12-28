from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from app.forms import CursosForm
from app.models import Cursos
from django.http import HttpResponse

# Create your views here.


def home(request):

    return render(request, 'home.html')


# Formulario de Cadastro de Usuario
def create(request):
    return render(request, 'create.html')


# Inserção dos dados do usuario no banco
def store(request):
    data = {}
    if (request.POST['password'] != request.POST['password-conf']):
        data['msg'] = 'As senhas não coincidem!'
        data['class'] = 'alert-danger'
    else:
        user = User.objects.create_user(
            request.POST['name'], request.POST['email'], request.POST['password'])
        user.first_name = request.POST['name']
        user.save()
        data['msg'] = 'Usuario cadastrado com sucesso!'
        data['class'] = 'alert-success'
    return render(request, 'create.html', data)


# Formulario do painel de login
def form(request):
    data = {}
    data['form'] = CursosForm()
    return render(request, 'form.html', data)

# Adiciona os dados na tabela


def sava(request):
    form = CursosForm(request.POST or None)
    print(form.is_valid())
    if form.is_valid():
        form.save()
        return redirect('/dashboard/')
    else:
        return HttpResponse(form.errors)

# Campo de edição dos cursos


def edit(request, pk):
    data = {}
    data['db'] = Cursos.objects.get(pk=pk)
    data['form'] = CursosForm(instance=data['db'])
    return render(request, 'form.html', data)

# Salvar os cursos editados


def update(request, pk):
    data = {}
    data['db'] = Cursos.objects.get(pk=pk)
    form = CursosForm(request.POST or None, instance=data['db'])
    if form.is_valid():
        form.save()
        return redirect('/dashboard/')

def delete(request, pk):
    db = Cursos.objects.get(pk=pk)
    db.delete()
    return redirect('/dashboard/')

# Processa o Login


def dolog(request):
    data = {}
    user = authenticate(
        username=request.POST['user'], password=request.POST['password'])
    if user is not None:
        login(request, user)
        return redirect('/dashboard/')
    else:
        data['msg'] = 'Usuário ou Senha inválidos!'
        data['class'] = 'alert-danger'
        return render(request, 'home.html', data)

# Página inicial do dashboard


def dashboard(request):
    data = {}
    data['db'] = Cursos.objects.all()
    return render(request, 'dashboard/home.html', data)


# Logout do sistema
def logouts(request):
    logout(request)
    return redirect('/')

# Alterar a senha


def changePassword(request):
    user = User.objects.get(email=request.user.email)
    user.set_password(request.POST['new password'])
    user.save()
    logout(request)
    return redirect('/form/')
