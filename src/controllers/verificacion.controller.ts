import { Request, Response } from "express";

export function vistaResponse(req: Request, res: Response) {
  const data = { title: "Programacion web" };
  return res.render("include/sesion-conec");
}


  //post body
  //get params