import { Router } from "express";
import incrCounter from "../controllers/incrCounter";
import getCounter from "../controllers/getCounter";

const counterRoute = Router();

counterRoute.post("/counter/:bookId/incr", incrCounter);
counterRoute.get("/counter/:bookId", getCounter);

export default counterRoute;
