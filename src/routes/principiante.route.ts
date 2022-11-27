import {Router} from "express";
import {vistaResponse} from "../controllers/principiante.controller";


const principianteRouter: Router = Router();

principianteRouter.get("/viewform-principiante", vistaResponse);

export default principianteRouter;