import express, {
  Request,
  Response,
  ErrorRequestHandler,
  NextFunction,
} from "express";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // to support URL-encoded bodies

app.get("/", async (req: Request, res: Response) => {
  res.json("this response from micro service 3");
});

app.use(
  async (
    err: ErrorRequestHandler,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    console.log(err);

    res.json({ error: err });
  }
);

export default app;
