const controlador ={ //IMPORTANTE
    login:(req, res)=>{
        return res.render('./users/login');
    },
    register:(req, res)=>{
        return res.render('./users/register');
    },
}

        //exportamos el objeto literal con sus metodos
        module.exports = controlador;
