import {Router} from "express";
import {vistaResponse, updateActivity} from "../controllers/principiante.controller";
import storageMulter from "../middlewares/multer.middleware";

const principianteRouter: Router = Router();

principianteRouter.get("/viewform-principiante", vistaResponse);
principianteRouter.post("/update/:idProducto",storageMulter.single("imagen"), updateActivity);

export default principianteRouter;