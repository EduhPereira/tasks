import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as logger from "morgan";

import { connectServerBD } from "./config/db";
import { taskRouter } from "./routes/task";

export const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logger("dev"));

connectServerBD();

app.use("/task", taskRouter);
app.use("/", (request, response) => response.send("API do app Mobicare"));
