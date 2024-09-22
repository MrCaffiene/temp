const http = require("http");
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Deployment is successful");
});
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => { console.log("server listening on port : 3000") });
