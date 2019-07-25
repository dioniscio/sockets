const {io} = require('../server');

io.on('connection',(client)=>{
    
    console.log('Usuario Conectado');

    client.emit('enviarMensaje',{
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta apliacion'
       });


    client.on('disconnect',()=>{

        console.log('Usuario desconectado');

    })

    //Escuchar el cliente

    client.on('enviarMensaje',(data,callback)=>{
       
    console.log(data);
     // esto es para emitir a todo los cliente un mensaje
    client.broadcast.emit('enviarMensaje',data);
     
    /*if(mensaje.usuario){
        callback({
            resp:'TODO SALIO BIEN!'
        });
    }else{
        callback({
            resp:'TODO SALIO MAL!!!!!!'
        });
    }*/


     
    });

})