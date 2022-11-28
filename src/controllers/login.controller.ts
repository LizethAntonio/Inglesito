import { Request, Response } from "express";
import { isValidPassword } from "../libraries/bycript.library";
import { InfanteModel } from "../models/infante.model";

//Vista
export function viewLogin(req: Request, res: Response) {
  const {error} = req.query;
  const data = { title: "Programacion web" };
  return res.render("infante/login-view", {error});
}

export async function logginUsuario(req: Request, res: Response) {
  try {
    const { body } = req;
    const { correo, contrasenia } = body;
    const usuarioResponse = await InfanteModel.findOne({
      attributes: ["idInfante", "nombreUsuario", "correo", "contrasenia"],
      where: { correo }
    });
    if (usuarioResponse !== null) {
      const contraseniaUsuario = usuarioResponse.getDataValue(contrasenia);
      if (isValidPassword(contrasenia, contraseniaUsuario)) {
        const user = usuarioResponse.toJSON();
        delete user.contrasenia;
        req.session.user = user;
        //return res.status(StatusCodes.OK).json(user);
        return res.redirect("/");
      }
    }

    res.redirect("/api/v1/loggin/signin?error=1");
  } catch (error) {
    res.send("error");
  }
}


export async function readUsuario(req: Request, res: Response) {
  const {query:where} = req
  const infantes = await InfanteModel.findAll({
    attributes: ["idInfante", "nombre", "apellidoP", "apellidoP", "nacimiento", "nombreUsuario", "correo", "contrasenia"],
    raw: true,
    where
  });
  res.status(200).json(infantes);
}

/*export async function createProducto(req: Request, res: Response) {
  try {
    const { body, file } = req;
    body["url_imagen"] = file?.path;
    const productResponse = await ProductoModel.create(body, { raw: true });
    res.status(201).json(productResponse);
  } catch (error) {
    console.log(error);
  }
}*/

export async function updateInfante(req: Request, res: Response) {
  const {idInfante} = req.params;
  const {body} = req;
  const entity = await InfanteModel.findByPk(idInfante);
  await entity?.update(body);
  res.status(201).json(entity?.toJSON());
}

export async function deleteProducto(req: Request, res: Response) {
  const {idInfante} = req.params;
  const entity = await InfanteModel.findByPk(idInfante);
  await entity?.destroy();
  res.status(204).json({ok:""});
}