// se crea un servidor http automaticamente
var io = require('socket.io')(process.env.PORT);

// recibe un objeto socket cada que un cliente se conectta
io.on('connection', function (objSocket) {
	
	console.log('nuevo usuario conectado');
	
	// se recibe un evento newFrame conteniendo una imagen
	objSocket.on('newFrame', function ( img ) {
		io.emit("setFrame", img);
	});

});
