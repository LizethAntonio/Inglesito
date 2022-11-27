import {Router} from "express";
import {vistaResponse} from "../controllers/principiante2.controller";


const principiante2Router: Router = Router();

principiante2Router.get("/viewform-principiante2", vistaResponse);

export default principiante2Router;