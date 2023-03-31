const botonMenu = document.querySelector("#lista-hamburguesa");
const menu = document.querySelector("#content-navBar");


document.getElementById("content-navBar").classList.add('content-navBar');
botonMenu.addEventListener("click", function() {

    if(menu.classList == "content-navBar"){
        document.getElementById("content-navBar").classList.remove('content-navBar');
        document.getElementById("content-navBar").classList.add('content-navBar-ver');
    }else if(menu.classList == "content-navBar-ver"){
        document.getElementById("content-navBar").classList.remove('content-navBar-ver');
        document.getElementById("content-navBar").classList.add('content-navBar');
    }
    
});