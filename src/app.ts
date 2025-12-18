import cors from "cors";
import express, { Request, Response } from "express";
import { errorHandler } from "./middlewares/errorHandler";
const app = express();

// Parser
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World!");
});

console.log("object");

// Error handler
app.use(errorHandler);

export default app;
