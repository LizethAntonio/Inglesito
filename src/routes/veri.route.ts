import {Router} from "express";
import {vistaResponse} from "../controllers/verificacion.controller";


const verificacionRouter: Router = Router();

verificacionRouter.get("/verificacion", vistaResponse);
verificacionRouter.post("/verificacion", vistaResponse);

export default verificacionRouter;