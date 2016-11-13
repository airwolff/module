var http = require('http');
var print = require('./print');

http.createServer(function (req, res) {
		res.writeHead(200);
    res.write(print.balance() + print.money());
		res.end();
	})
	.listen(3000);

 
console.log('listening on Port 3000'); 
