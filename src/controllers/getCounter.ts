import { Request, Response } from "express";
import { client } from "../index";

const getCounter = async (req: Request, res: Response) => {
  const { bookId } = req.params;
  try {
    const bookCounter = await client.get(bookId);
    res.json({
      counter: bookCounter,
      message: "Счетчик успешно изъят из Redis",
    });
  } catch (e) {
    res.json({ errcode: 500, message: "Redis error" });
  }
};

export default getCounter;
