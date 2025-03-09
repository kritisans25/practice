// hello.js
import http from 'http';
import { prime } from './myfirst.js';  // Import the 'prime' function from myfirst.js

http.createServer(function(_req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The number is prime or not: " + prime(3));  // Use the prime function
    res.end();
}).listen(2000);

console.log("SUCCESSFUL!!!");
