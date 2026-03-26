import express, {Request, Response} from "express";

const PORT: number = 8000;
const app = express();

app.use(express.json())

const tshirts : Record<string, string> = {};

app.get("/tshirt", (req: Request, res: Response) => {
    res.status(200).send({
        tshirt: "🚶🏽",
        size: "large"
    });
});
app.get("/tshirt/:id", (req: Request, res: Response) => {
    const {id} = req.params
    const logo = tshirts[id]

    res.status(200).send({
        tshirt: `🚶🏽 with your ${logo} and ID of ${id}`,
        size: "large",
        id: id
    });
});

app.post("/tshirt/:id", (req: Request, res: Response) => {
    const {id} = req.params;
    const {logo} = req.body;

    if(!logo){
        res.status(400).send({message: "we need a logo!"});
        return;
    }

    tshirts[id] = logo

    res.send({
        tshirt: `🚶🏽 with your ${logo} and ID of ${id}`,
    })

    
});

app.put("/tshirt/:id", (req: Request, res: Response) => {
    const {id} = req.params
    const {logo} = req.body

    if(!tshirts[id]){
        res.status(400).send({message : "tshirt not found"});
        return;
    }

    if(!logo){
        res.status(400).send({message: "logo not found"});
        return;
    }

    tshirts[id] = logo;

    res.status(200).send({
        message: "Tshirt updated",
        tshirt: `🚶🏽 with your ${logo} and ID of ${id}`
    })
});

app.delete("/tshirt/:id", (req: Request, res: Response) => {
    const {id} = req.params

    if(!tshirts[id]){
        res.status(400).send({message : "tshirt not found"});
        return;
    }

    delete tshirts[id];

    res.status(200).send({
        message: `Tshirt with ${id} deleted`,
    })

});

app.listen(PORT, ()=> {
    console.log(`Application running on port ${PORT}`);
});