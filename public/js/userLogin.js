//console.log("Estamos en Script")
const formulario = document.getElementById('formulario');
//console.log(formulario)
const inputs = document.querySelectorAll('#formulario input');
//console.log(inputs)

//Expresiones Regulares
const expresiones ={//las expresiones regulares son formulas que busca coincidencias para luego poder validar
    //usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	precio: /^\d{6,20}$/, // 7 a 14 numeros.
    anio: /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/
}

let campos = {
    email: false,
    password: false,
}
const validarFormulario = (e) =>{
    //console.log('Se ejecuto')

    switch (e.target.name){
        case "email":
            validarCampo(expresiones.correo, e.target, 'email');
        break;
        case "password":
            validarCampo(expresiones.password, e.target, 'password');
        break;
    }
}
const validarCampo=(expresiones, input,campo)=>{
    if(expresiones.test(input.value)){
        document.getElementById(`div-content__${campo}`).classList.remove('error');
        document.getElementById(`input__${campo}`).classList.remove('error-input');
        document.getElementById(`div-content__${campo}`).classList.add('correcto');
        document.getElementById(`input__${campo}`).classList.add('correcto-input');
        document.getElementById(`cartel-error__${campo}`).classList.remove('alertError');
        document.getElementById(`cartel-error__${campo}2`).classList.remove('alertError'); 
        campos[campo] = true
        console.log(campos)
    }else{
        document.getElementById(`div-content__${campo}`).classList.add('error');
        document.getElementById(`input__${campo}`).classList.add('error-input');
        document.getElementById(`cartel-error__${campo}`).classList.add('alertError');
        document.getElementById(`cartel-error__${campo}2`).classList.add('alertError');
        campos[campo] = false
        console.log(campos)
    }
}
inputs.forEach((input) => {
    input.addEventListener('keyup',validarFormulario)//cuando suelte una tecla en el input va a ejecutar ejecuta la función 
    input.addEventListener('blur',validarFormulario)//blur: cuando hacemos un click fuera del input
});

formulario.addEventListener('submit',(e)=>{
    //e.preventDefault();
    if (input__email.value == "") {
        document.getElementById(`cartel-error__email`).classList.add('alertError');
    }else{
    document.getElementById(`cartel-error__email`).classList.remove('alertError')
    }  
        /* password */
    if (input__password == "" || input__password.value < 3) {
        document.getElementById(`cartel-error__password`).classList.add('alertError');
    }else{
    document.getElementById(`cartel-error__password`).classList.remove('alertError')
    } 
    if (campos.password == false  ||  campos.passwordValidate == false ){
        e.preventDefault();
        console.log('asd')
    }
    
})


