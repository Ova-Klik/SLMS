import express from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.get("/api/v1/health",(_req,res)=>{
    res.json({status:"ok"});

});
app.get("/", (_req, res) => {
res.json({ name: "SLMS API", version: "v1" });

});

export default app;
