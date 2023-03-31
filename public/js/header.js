const botonMenu = document.querySelector("#lista-hamburguesa");
const menu = document.querySelector("#content-navBar");

/* const botonMenu = document.getElementById('lista-hamburguesa');
const listaDesplegada = document.getElementById('content-navBar'); */
/* console.log(hamburguesa)
console.log(listaDesplegada) */

botonMenu.addEventListener("click", function() {
    console.log(botonMenu)
    console.log(menu)
    if (menu.style.display == "none") {
        console.log('entro al if')
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
    });