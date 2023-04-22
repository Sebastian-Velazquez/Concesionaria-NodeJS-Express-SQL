const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const select = document.querySelectorAll('#formulario select')
//console.log(select)
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
    nombre: false,
    precio: false,
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
        /* case "anio":
            validarCampo(expresiones.anio, e.target, 'anio');
        break; */
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
        //console.log(campos)
    }else{
        document.getElementById(`div-content__${campo}`).classList.add('error');
        document.getElementById(`input__${campo}`).classList.add('error-input');
        document.getElementById(`cartel-error__${campo}`).classList.add('alertError');
        document.getElementById(`cartel-error__${campo}2`).classList.add('alertError');
        campos[campo] = false
       // console.log(campos)
    }
}
/* const validarSelect=(tipo)=>{
    console.log(tipo.value + ' asd')
    if (tipo.value == 0) {
        document.getElementById(`cartel-error__${tipo}`).classList.add('alertError');
        console.log('select')
    }else{
    document.getElementById(`cartel-error__${tipo}`).classList.remove('alertError')
    } 
} */

inputs.forEach((input) => {
    input.addEventListener('keyup',validarFormulario)//cuando suelte una tecla en el input va a ejecutar ejecuta la función 
    input.addEventListener('blur',validarFormulario)//blur: cuando hacemos un click fuera del input
});
formulario.addEventListener('submit',(e)=>{
    //validarSelect(color);
            /* nombre */
        if (input__nombre.value == ""  || formulario.name.value.length < 3) {
            document.getElementById(`cartel-error__nombre`).classList.add('alertError');
        }else{
        document.getElementById(`cartel-error__nombre`).classList.remove('alertError')
        }  
            /* precio */
        if (input__precio.value == "" || formulario.price.value.length < 6) {
            document.getElementById(`cartel-error__precio`).classList.add('alertError');
        }else{
        document.getElementById(`cartel-error__precio`).classList.remove('alertError')
        } 
        /* fecha */
        let fecha = new Date(input__anio.value);
        let milisegundos = Date.now() - fecha.getTime();
        let anos = milisegundos / 1000 / 60 / 60 / 24 / 365.25;
        //console.log(anos)
        if (input__anio.value == "" || anos < 0) {
            document.getElementById(`cartel-error__anio`).classList.add('alertError');
        }else{
        document.getElementById(`cartel-error__anio`).classList.remove('alertError')
        } 
             /* color */
        if (color.value == 0) {
            document.getElementById(`cartel-error__color`).classList.add('alertError');
        }else{
        document.getElementById(`cartel-error__color`).classList.remove('alertError')
        }  
            /* modelo */
        if (modelo.value == 0) {
            document.getElementById(`cartel-error__modelo`).classList.add('alertError');
        }else{
        document.getElementById(`cartel-error__modelo`).classList.remove('alertError')
        }  

        if (campos.nombre == false  ||  campos.precio==false || 
            input__anio.value=="" || anos < 0 || 
            color.value==0 || modelo.value==0){
            //console.log(campos.nombre + ' - '+ campos.precio + ' - '+ campos.anio + ' - '+ color.value +' - '+ modelo.value)
            e.preventDefault();//deterner la ejecucion para no mandar los datos al backend
            //console.log('ejecutando')
            }/* else{
                console.log('se fue a formulario')
                //e.preventDefault();
            } */
    })
//validar todos los campos cuando se presiona el boton enviar}





