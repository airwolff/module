var http = require('http');
var print = require('./print');

http.createServer(function (req, res) {
		res.writeHead(200);
		res.write(print.balance());
		res.write(print.money());
		res.end();
	})
	.listen(3000);

 
console.log('boo'); 
