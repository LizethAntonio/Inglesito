import { Request, Response } from "express";

//Vista
export function viewLogin(req: Request, res: Response) {
  const data = { title: "Programacion web" };
  return res.render("infante/login-view");
}

//Insertar
