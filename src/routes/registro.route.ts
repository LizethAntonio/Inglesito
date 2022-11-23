import {Router} from "express";
import {vistaResponse , createUser } from "../controllers/registro.controller";


const registerRouter: Router = Router();
registerRouter.get("/viewform-register", vistaResponse);
registerRouter.post("/user/create", createUser);

export default registerRouter;