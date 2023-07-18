//Create web server 
Path: server.js
import { createServer } from "http";
import { readFile } from "fs";
import { parse } from "url";
createServer(function (request, response) {
    var pathname = parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    readFile(pathname.substr(1), function (err, data) {
        if (err) {
            console.log(err);
            response.writeHead(404, { 'Content-Type': 'text/html' });
        } else {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(data.toString());
        }
        response.end();
    });
}).listen(8081);