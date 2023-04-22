


const cors = require('cors')

//para qe la api se consumida por las web que decidamos. Sacado de https://www.npmjs.com/package/cors
/** Seguridad de quien puede usar esta api. No publica */

let whitelist = ['http://localhost:3000']
let corsOptions = {
    origin: function (origin, callback) {
        //console.log(origin + "ESTRE")
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

const corsValidation = cors(corsOptions)

module.exports = corsValidation;