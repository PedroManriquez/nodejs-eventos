var http = require("http");
var url =require("url");
function serverStart(route, handler){
	http.createServer(function(request, response){


		var pathname= url.parse(request.url).pathname;


		route(handler, pathname, response);
	}).listen(4444);
console.log("Servidor encendido...");
}
exports.start= serverStart;