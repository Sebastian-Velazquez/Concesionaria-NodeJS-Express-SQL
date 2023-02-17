//es un middleware de aplicaion o global. Se colocan en app.js// estos siempre estan ejecuandose, o cada vista y elementos.

//para mostrar cuando esta logeado uno y mostra algunas caracteristicas


const User = require("../../models/userModels")

function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false;//res.locals en es variable local.. se puede compartir en todas las vistas

    /***********COOKIE */
    //Para loguear automaticamente a un usuario si esta en cookie -- se usasa cookie-parser
    let emailInCookie = req.cookies.userEmail;  //para guardar el usario de la cookie si esta
    let userFromCookie = User.findByField('email', emailInCookie);
    //console.log(userFromCookie);
    if (userFromCookie){//si hay usuario - guarda es session para cuando session pregunte si hay alguien.. ya cookie guardo uno
        req.session.userLogged = userFromCookie;
    }  
/***********COOKIE */

    //para trabajar en las vistas que el con los datos para rederizar las vistas como por ejemplo, no mostrar una parte si el usuario esta logueado
    if(req.session && req.session.userLogged){
    res.locals.isLogged = true;
    //pasa las variables que tiene en session a locals
    res.locals.userLogged = req.session.userLogged;//para poder usar variables locales que puedan ser usadas en distitas vistas.
    }
    

    next(); 
}
module.exports = userLoggedMiddleware;