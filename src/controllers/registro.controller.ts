import { Request, Response } from "express";
import { InfanteModel } from "../models/infante.model";

export function vistaResponse(req: Request, res: Response) {
  const data = { title: "Programacion web" };
  return res.render("infante/registro-view");
}


export async function createUser(req: Request, res: Response) {
    const {nombre, paterno, materno, date, user, email, pwd} = req.body;
    await InfanteModel.create({nombre:nombre, apellidoP:paterno, apellidoM:materno, nacimiento: date, correo:email, contrasenia:pwd, idNivel:1});
    //gurdar daots, usuarios en l bd
    const records= await InfanteModel.findAll({raw:true});
    req.session.user = user;
    //hipo: agregue la redireccion al home
    return res.redirect('/viewform-principal')
    
}

  //post body
 
