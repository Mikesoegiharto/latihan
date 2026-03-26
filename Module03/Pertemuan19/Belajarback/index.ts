import http from 'http';

const PORT = 8000;
const server = http.createServer(async (req, res) => {
    if(req.url === '/api' && req.method === 'GET'){
        //response headers
        res.writeHead(200, {'Content-Type': 'application/json'});
        //set the response
        res.write('Hi there, this is a vanilla Node.js API');
        //end the response
        res.end()
    }
});

server.listen(PORT, () =>  {
    console.log('application run on port', PORT)
});