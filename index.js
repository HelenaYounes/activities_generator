import express from "express";
import cors from "cors";

import morgan from "morgan";
import bodyParser from "body-parser";
import routes from "./routes/index.js";

const app = express();
app.use(cors())
app.use(morgan("dev"));
app.use(bodyParser.json())
app.use(express.urlencoded({extended: true }));

app.use(routes);

app.use((req, res) => {
  res.status(404).sendStatus("Not Found");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(err.message);
});

app.listen(3000, () => {
  console.log("listening port 3000");
});
