import {Router} from "express";
import {vistaResponse} from "../controllers/principiante3.controller";


const principiante3Router: Router = Router();

principiante3Router.get("/viewform-principiante3", vistaResponse);

export default principiante3Router;