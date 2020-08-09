import express from "express";
import bodyParser from "body-parser";
import { chatbot } from "./controller/chatbot.controller";
const port = 3000;
const router = express.Router();
const app = express();
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./resources/swagger.json";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

router.post("/chatbot", (req, res) => {
  res.send(
    new chatbot().requestToDialogflow({
      sessionId: "",
      query_input: "",
    })
  );
});

app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
});
