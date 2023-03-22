const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones ={//las expresiones son formulas que busca coincidencias para luego poder validar
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const validarFormulario = (e) =>{
    //console.log('Se ejecuto')
    switch (e.target.name){
        case "name":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById('grupo__nombre').classList.remove('error');
                document.getElementById('name').classList.remove('error-input');
                document.getElementById('grupo__nombre').classList.remove('correcto');
                document.getElementById('name').classList.remove('correcto-input');
                document.getElementById('cartel-error-name').classList.remove('alertError');
                document.getElementById('cartel-error-name2').classList.remove('alertError');

            }else{
                document.getElementById('grupo__nombre').classList.add('error');
                document.getElementById('name').classList.add('error-input');
                document.getElementById('cartel-error-name2').classList.add('alertError');
                document.getElementById('cartel-error-name').classList.add('alertError');
            }
        break;
        case "price":
        
        break;
        case "anio":
        
        break;
        case "description":
        
        break;
        case "color":
        
        break;
        case "model":
        
        break;
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