const http = require("node:http");
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Home Page");
    } else if (req.url === "/c") {
        res.writeHead(200, { "Content-Type": "text/plain" })
        res.end("Routing OK");
    }
});
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => { console.log("server listening on port : 3000") });
