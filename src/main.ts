import express from "express";
import { viaCepRouter } from "./viaCep/viaCep.routes";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
const port = process.env.PORT || 8080;

app.use("/viaCep", viaCepRouter);

app.listen(port, () => {
    console.clear();
    console.log(`[SERVER_RUNNING] ${port}`);
});
