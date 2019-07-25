var socket = io();
      
     socket.on('connect',function(){
         console.log('Conetado al servidor');
     });

     // perder conecion con el servidor
      // escuchar
     socket.on('disconnect',function(){
      
        console.log('perdimos conexion con el servidor');
     });
       
     //enviar informacion
      socket.emit('enviarMensaje',{
          usuario: 'Dionis',
          mensaje: 'Hola Mundo'
      }, function(resp){
          console.log(resp);
      });
      
      // Escuchar Informacion

        socket.on('enviarMensaje',function(mensaje){
         
            console.log('servidor', mensaje);
        });

    