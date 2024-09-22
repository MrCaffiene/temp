const http = require("node:http");
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
});
server.listen(process.env.PORT || 3000, () => { console.log("server listening on port : 3000") });