import http from "http";

const PORT = 8000;
const server = http.createServer(async (req, res) => {
    if(req.url === "/api" && req.method === "GET"){
        res.writeHead(200, { "Content-Type": "application/json"});
        res.write("Hi there, This is a Vanilla Node.JS API");
        res.end
    }
});

server.listen(PORT, ()=>{
    console.log("application run on port ", PORT)
})