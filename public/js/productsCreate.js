const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones ={//las expresiones son formulas que busca coincidencias para luego poder validar
    //usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	precio: /^\d{6,20}$/, // 7 a 14 numeros.
    anio: /^([0][1-9]|[12][0-9]|3[01])(\/|-)([0][1-9]|[1][0-2])\2(\d{4})/g
}

const validarFormulario = (e) =>{
    //console.log('Se ejecuto')

    switch (e.target.name){
        case "name":
            validarCampo(expresiones.nombre, e.target, 'nombre');
        break;
        case "price":
            validarCampo(expresiones.precio, e.target, 'precio');
        break;
        case "anio":
            validarCampo(expresiones.anio, e.target, 'anio');
        break;
        case "description":
        
        break;
        case "color":
        
        break;
        case "model":
        
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
        
    }else{
        document.getElementById(`div-content__${campo}`).classList.add('error');
        document.getElementById(`input__${campo}`).classList.add('error-input');
        document.getElementById(`cartel-error__${campo}`).classList.add('alertError');
        document.getElementById(`cartel-error__${campo}2`).classList.add('alertError');
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup',validarFormulario)//cuando suelte una tecla en el input va a ejecutar ejecuta la función 
    input.addEventListener('blur',validarFormulario)//cuando suelte una tecla en el input va a ejecutar ejecuta la función 
});//blur: cuando hacemos un click fuera del input
//validar todos los campos cuando se presiona el boton enviar}
formulario.addEventListener('submit',(e)=>{
    e.preventDefault();//deterner la ejecucion para no mandar los datos al backend
})