import { Request, Response } from "express";
import { PreguntaModel } from "../models/pregunta.model";

//Vista
export function vistaResponse(req: Request, res: Response) {
  const data = { title: "Programacion web" };
  return res.render("actividades/principiante-view");
}

/*export async function createActivity(req: Request, res: Response) {
  try {
    const { body, file } = req;
    body["urlArchivo"] = file?.path;
    const productResponse = await PreguntaModel.create(body, { raw: true });
    res.status(201).json(productResponse);
  } catch (error) {
    console.log(error);
  }
}*/

export async function updateActivity(req: Request, res: Response) {
  const {idProducto} = req.params;
  const {body} = req;
  const entity = await PreguntaModel.findByPk(idProducto);
  await entity?.update(body);
  res.status(201).json(entity?.toJSON());
}

export async function deleteProducto(req: Request, res: Response) {
  const {idProducto} = req.params;
  const entity = await PreguntaModel.findByPk(idProducto);
  await entity?.destroy();
  res.status(204).json({ok:""});
}
