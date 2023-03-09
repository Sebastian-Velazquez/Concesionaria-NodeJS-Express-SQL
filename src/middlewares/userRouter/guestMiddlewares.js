//Es para un middlewares de ruta para que un usuario depende si esta o no esta logueado, pude entrar o no a determinadas vistas.
//Este Middlewares la fucnion es que si esta logueado no tiene la posibilidad de ir a la vista de register.
//se coloca o insterta en user router
function guestMiddlewares(req, res, next) {
    if (req.session.userLogged) {//si tengo alguein es session
        return res.redirect('/users/userProfile');
    }
    next();
}
module.exports = guestMiddlewares;