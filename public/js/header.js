const botonMenu = document.querySelector("#lista-hamburguesa");
const menu = document.querySelector("#content-navBar");

/* const botonMenu = document.getElementById('lista-hamburguesa');
const listaDesplegada = document.getElementById('content-navBar'); */
/* console.log(hamburguesa)
console.log(listaDesplegada) */

botonMenu.addEventListener("click", function() {

    if (listaDesplegada.style.display == "none") {
        console.log('entro al if')
        listaDesplegada.style.display = "block";
    } else {
        listaDesplegada.style.display = "none";
    }
     });