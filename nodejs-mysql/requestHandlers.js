function escribealgo(response){
	console.log("Handler for request 'escribe algo lonhi ql' dispatched");
	response.writeHead(200,{"Content-Type":"text/html"});
	response.write("escribe algo cochino ql");
	response.end();
}

function quesucede(response){
	console.log("Handler for request 'escribe algo lonhi ql' dispatched");
	response.writeHead(200,{"Content-Type":"text/html"});
	response.write("nah sucede!! k pah cochino ql");
	response.end();
}

function disimula(response){
	console.log("Handler for request 'escribe algo lonhi ql' dispatched");
	response.writeHead(200,{"Content-Type":"text/html"});
	response.write("y la mula dijo que te pasa conchetumare");
	response.end();
}
exports.escribealgo=escribealgo;
exports.quesucede=quesucede;
exports.disimula=disimula;
