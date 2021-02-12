const fs = require("fs");
const http = require("http");

const server = http.createServer();
server.on("request", (request, response) => {
	fs.readFile("./big_file.txt", {encoding: "utf8"}, (error, data) => {
		if (error) throw error;
		response.end(data.toString());
		console.log("done");
	});
});

server.listen(8888);
