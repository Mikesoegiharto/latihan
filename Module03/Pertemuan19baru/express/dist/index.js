"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const PORT = 8000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
const tshirts = {};
app.get("/tshirt", (req, res) => {
    res.status(200).send({
        tshirt: "🚶🏽",
        size: "large"
    });
});
app.get("/tshirt/:id", (req, res) => {
    const { id } = req.params;
    const logo = tshirts[id];
    res.status(200).send({
        tshirt: `🚶🏽 with your ${logo} and ID of ${id}`,
        size: "large",
        id: id
    });
});
app.post("/tshirt/:id", (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;
    if (!logo) {
        res.status(400).send({ message: "we need a logo!" });
        return;
    }
    tshirts[id] = logo;
    res.send({
        tshirt: `🚶🏽 with your ${logo} and ID of ${id}`,
    });
});
app.put("/tshirt/:id", (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;
    if (!tshirts[id]) {
        res.status(400).send({ message: "tshirt not found" });
        return;
    }
    if (!logo) {
        res.status(400).send({ message: "logo not found" });
        return;
    }
    tshirts[id] = logo;
    res.status(200).send({
        message: "Tshirt updated",
        tshirt: `🚶🏽 with your ${logo} and ID of ${id}`
    });
});
app.delete("/tshirt/:id", (req, res) => {
    const { id } = req.params;
    if (!tshirts[id]) {
        res.status(400).send({ message: "tshirt not found" });
        return;
    }
    delete tshirts[id];
    res.status(200).send({
        message: `Tshirt with ${id} deleted`,
    });
});
app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map