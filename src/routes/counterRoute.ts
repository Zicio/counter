import { Router } from "express";
import incrCounter from "../controllers/incrCounter";
import getCounter from "../controllers/getCounter";

const counterRoute = Router();

counterRoute.post("/:bookId/incr", incrCounter);
counterRoute.get("/:bookId", getCounter);

export default counterRoute;
