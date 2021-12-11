import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as logger from "morgan";
import swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

import { connectServerBD } from "./config/db";
import { taskRouter } from "./routes/task";

export const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logger("dev"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

connectServerBD();

app.use("/tasks", taskRouter);
