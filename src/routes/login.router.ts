import {Router} from "express";
import {viewLogin} from "../controllers/login.controller";
import {InfanteModel} from "../models/infante.model";

const loginRouter: Router = Router();

loginRouter.get("/", viewLogin);

export default loginRouter;
