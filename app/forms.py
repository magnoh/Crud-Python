from django.forms import ModelForm
from app.models import Cursos
  
# declare a new model with a name "GeeksModel"
class CursosForm(ModelForm):
    class Meta:
        model = Cursos 
        fields = ['cursos', 'horas']