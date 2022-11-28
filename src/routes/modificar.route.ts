import {Router} from "express";
import { readUsuario } from "../controllers/login.controller";
import {modificarResponse} from "../controllers/principal.controller";


const modifiRouter: Router = Router();

modifiRouter.get("/modificarRegistro-view", modificarResponse);
modifiRouter.get("/", readUsuario);

export default modifiRouter;