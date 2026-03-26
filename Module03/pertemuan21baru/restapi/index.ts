import express from 'express';
import type {Application, Request, Response} from 'express';
import pool from './config/db.ts';

const PORT: number = 8000;
const app: Application = express();

//middleware untuk parsing
app.use(express.json());

app.get("/", (req: Request, res: Response): void => {
    res.status(200).send("Hello from API");
});

pool.connect((err: Error | undefined, client: any, release: () => void): void =>{
    if(err){
        console.error("Error requiring client", err.stack);
        return;
    }
    console.log("success connected");
    release();
});

app.get("/products", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM product;")
    const products = result.rows;
    res.status(200).send(products)
  } catch (err) {
    res.status(500).send(err)
  }
})

app.listen(PORT, (): void => {
    console.log(`APP running on port ${PORT}`);
});


