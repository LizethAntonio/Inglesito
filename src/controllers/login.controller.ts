import { Request, Response } from "express";
import { isValidPassword } from "../libraries/bycript.library";
import { InfanteModel } from "../models/infante.model";

//Vista
export function viewLogin(req: Request, res: Response) {
  const {error} = req.query;
  return res.render("infante/login-view", {error});
}

export async function loginInfante(req: Request, res: Response) {
  try {
    const { body } = req;
    const { correo, contrasenia } = req.body;
    const infanteResponse = await InfanteModel.findOne({
      attributes: ["idInfante","nombre","apellidoP","apellidoM","nacimiento", "nombreUsuario","correo", "contrasenia","idNivel"],
      where: { correo }
    });
    if (infanteResponse !== null) {
      const contraseniaUsuario = infanteResponse.getDataValue(contrasenia);
      if (isValidPassword(contrasenia, contraseniaUsuario)) {
        const user = infanteResponse.toJSON();
        req.session.user = user;
        console.log("YA ENTRÉ A LA SESIÓN");
       
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


export async function updateInfante(req: Request, res: Response) {
  const {correo} = req.params;
  const {body} = req;
  const entity = await InfanteModel.findByPk(correo);
  await entity?.update(body);
  res.status(201).json(entity?.toJSON());
}
