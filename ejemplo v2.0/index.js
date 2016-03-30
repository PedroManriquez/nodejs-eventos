var server = require("./server.js");
var router = require("./router.js");
var requestHandlers = require("./requestHandlers.js");

var handler={}

handler["/"] = requestHandlers.escribealgo;
handler["/quesucede"]= requestHandlers.quesucede;
handler["disimula"]= requestHandlers.disimula;

server.start(router.route, handler);