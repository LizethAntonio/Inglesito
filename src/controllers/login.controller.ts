import { Request, Response } from "express";
import { InfanteModel } from "../models/infante.model";

//Vista
export function viewLogin(req: Request, res: Response) {
  const data = { title: "Programacion web" };
  return res.render("infante/login-view");
}

//Insertar

