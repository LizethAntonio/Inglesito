import { Request, Response } from "express";

//Vista
export function vistaResponse(req: Request, res: Response) {
  const data = { title: "Programacion web" };
  return res.render("princi/principal-view");

}

export function modificarResponse(req: Request, res: Response) {
  const data2 = { title: "Programacion web" };
  return res.render("infante/modificarRegistro-view");
  
}