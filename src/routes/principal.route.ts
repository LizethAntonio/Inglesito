import {Router} from "express";
import {vistaResponse} from "../controllers/principal.controller";


const principalRouter: Router = Router();

principalRouter.get("/viewform-principal", vistaResponse);

export default principalRouter;