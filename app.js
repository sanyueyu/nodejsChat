var fs = require("fs"),
	http = require("http"),
	socket_io = require("socket.io");
	
function onResponse(req, res) {
	res.writeHead(200, {"content-type" : "text/html"});
	res.end(fs.readFileSync("d://web/node/chat/index.html"));
}
var server = http.createServer(onResponse).listen(8000);

socket_io.listen(server).on("connection", function(socket) {
		/*onmessage = function(e) {
				console.log("ssssssssssssssssss");
				socket.broadcast.emit("message", e.data);
			};*/
		socket.on("message",function(msg) {
				socket.broadcast.emit("message", msg);
			});
	});