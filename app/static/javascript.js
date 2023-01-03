(function (win, doc) {
    "use strict";
    // Verifica se o usuário realmente quer deletar o dado
    if (doc.querySelector('.btnDel')) {
        let btnDel = doc.querySelectorAll('.btnDel');
        for (let i = 0; i < btnDel.length; i++) {
            btnDel[i].addEventListener('click', function (event) {
                if (confirm('Deseja mesmo apagar este dado?')) {
                    return true;
                } else {
                    event.preventDefault();
                }
            });
        }
    }

    //Ajax do form
    if (doc.querySelector('#form')) {
        let form = doc.querySelector('#form');
        function sendForm(event) {
            event.preventDefault();
            let data = new FormData(form);
            let ajax = new XMLHttpRequest();
            let token = doc.querySelectorAll('input')[0].value;
            ajax.open('POST', form.action);
            ajax.setRequestHeader('X-CSRF-TOKEN', token);
            ajax.onreadystatechange = function () {
                if (ajax.status === 200 && ajax.readyState === 4) {
                    let result = doc.querySelector('#result');
                    result.innerHTML = 'Operação realizada com sucesso!';
                    result.classList.add('alert');
                    result.classList.add('alert-success');
                }
            }
            ajax.send(data);
            // form.reset();
        }
        form.addEventListener('submit', sendForm, false);
    }
})(window, document);

(function (win, doc) {
    "use strict";
    // Verifica se o usuário realmente quer editar o dado
    if (doc.querySelector('.btnEdit')) {
        let btnDel = doc.querySelectorAll('.btnEdit');
        for (let i = 0; i < btnDel.length; i++) {
            btnDel[i].addEventListener('click', function (event) {
                if (confirm('Deseja mesmo editar este dado?')) {
                    return true;
                } else {
                    event.preventDefault();
                }
            });
        }
    }

    //Ajax do form
    if (doc.querySelector('#form')) {
        let form = doc.querySelector('#form');
        function sendForm(event) {
            event.preventDefault();
            let data = new FormData(form);
            let ajax = new XMLHttpRequest();
            let token = doc.querySelectorAll('input')[0].value; // seta o token no valor 0
            ajax.open('POST', form.action);
            ajax.setRequestHeader('X-CSRF-TOKEN', token);
            ajax.onreadystatechange = function () { //recebe uma fuction
                if (ajax.status === 200 && ajax.readyState === 4) {
                    let result = doc.querySelector('#result');
                    result.innerHTML = 'Operação realizada com sucesso!';
                    result.classList.add('alert');
                    result.classList.add('alert-success');
                }
            }
            ajax.send(data);
            form.reset();
        }
        form.addEventListener('submit', sendForm, false);
    }
})
    (window, document);

// (function (win, doc) {
//     "use strict";
//     const submit = document.getElementById("submit");

//     submit.addEventListener("click", validate);

//     function validate(e) {
//         e.preventDefault();

//         const firstNameField = document.getElementById("name", "user", "password", "password-conf", "email");
//         let valid = true;
        

//         if (!firstNameField.value) {
//             const nameError = document.getElementById("user");
//             nameError.classList.add("visible");
//             firstNameField.classList.add("invalid");
//             nameError.setAttribute("aria-hidden", false);
//             nameError.setAttribute("aria-invalid", true);
//         }
//         return valid;
//     }
// })(window, document);

function isValidEmail(input) {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return input.match(validRegex) !== null;
  
  }
  
  function validateEmail(el) {
      (isValidEmail(el.value))
      ? console.log('E-mail valido')
      : console.log('E-mail invalido');
  }
// (function (win, doc) {
//     "use strict";
//     if (doc.querySelector('#formUsers')) {
//         let formUsers = doc.querySelector('#formUsers');
//         formUsers.addEventListener('submit', function (event) {
//             event.preventDefault()
//             const data = new FormData(event.target)
//             let formulario_valido = true
//             let form_campos = []
//             let form_campos_preenchidos = []

//             data.forEach(function(value, key){
//                 if (value == ''){
//                     form_campos[key] = value
//                     formulario_valido = false
//                 }else{
//                     form_campos_preenchidos[key] = value
//                 }
//             })

//             console.log(form_campos_preenchidos['name'])

//             if (formulario_valido){
//                 alert('Formulário enviado')
//             }

//         })
//     }
//     ;
// })(window, document);