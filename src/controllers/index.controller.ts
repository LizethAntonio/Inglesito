import { Request, Response } from "express";

export function indexResponse(req: Request, res: Response) {
  const data = { title: "Programacion web" };
  return res.render("login/login-view");
}


export function principalResponse(req: Request, res: Response) {
  const data = { title: "Programacion web" };
  return res.send("Entre a la otra vista");
}