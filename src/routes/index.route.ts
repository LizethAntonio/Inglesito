import {Router} from "express";
import {loginResponse , principalResponse } from "../controllers/login.controller";


const loginRouter: Router = Router();

loginRouter.get("/", loginResponse);
loginRouter.get("/perfil", principalResponse);

export default loginRouter;
