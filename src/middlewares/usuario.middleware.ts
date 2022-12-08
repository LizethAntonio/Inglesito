import { Request, Response,NextFunction } from "express";
import {generatePassword, hashPassword} from "../libraries/bycript.library";


export async function createContraseniaUsuarioMiddleware(req: Request, res: Response, next: NextFunction) {

  next();
}

export async function cifrarContraseniaUsuarioMiddleware(req: Request, res: Response, next: NextFunction) {
  const { body } = req;
  body["pwd"] = hashPassword(body["pwd"]);
  next();
}
