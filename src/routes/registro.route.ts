import {Router} from "express";
import {vistaResponse , createUser } from "../controllers/registro.controller";
import {
    cifrarContraseniaUsuarioMiddleware,
    createContraseniaUsuarioMiddleware,
  } from "../middlewares/usuario.middleware";
  


const registerRouter: Router = Router();
registerRouter.get("/viewform-register", vistaResponse);
registerRouter.post("/user/create", createContraseniaUsuarioMiddleware, cifrarContraseniaUsuarioMiddleware, createUser);

export default registerRouter;