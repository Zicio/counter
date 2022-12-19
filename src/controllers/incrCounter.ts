import { Request, Response } from "express";
import { client } from "../index";

const incrCounter = async (req: Request, res: Response) => {
  const { bookId } = req.params;
  try {
    const cnt = await client.incr(bookId);
    res.json({ message: "Счетчик успешно инкрементирован" });
  } catch (e) {
    res.json({ errcode: 500, message: "Redis error" });
  }
};

export default incrCounter;
