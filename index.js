'use strict' //es una directiva que activa la ejecución de código en el modo estricto

const mongoose = require('mongoose')
const app = require('./app')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/VentaOnline',{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log('Se encuentra conectado a la base de datos');
    
    app.listen(3000, function(){
        console.log('El servidor esta arrancando en el puerto: 3000')
    })

}).catch(err => console.log(err))