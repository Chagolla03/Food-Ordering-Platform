import express, {Request, Response} from 'express';
import cors from "cors";
import "dotenv/config";

const app = express(); //esto creará un nuevo servidor de express y lo asigna a la variable app
app.use(express.json());
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
  res.json({message: "Hello!"});
});

app.listen(7000, ()=> {
  console.log("Server started on localhost:7000");
});