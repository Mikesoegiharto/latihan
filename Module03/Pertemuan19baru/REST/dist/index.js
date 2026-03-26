"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const PORT = 8000;
const server = http_1.default.createServer(async (req, res) => {
    if (req.url === "/api" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write("Hi there, This is a Vanilla Node.JS API");
        res.end;
    }
});
server.listen(PORT, () => {
    console.log("application run on port ", PORT);
});
//# sourceMappingURL=index.js.map