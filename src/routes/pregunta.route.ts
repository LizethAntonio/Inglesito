import {Router} from "express";
//import { createPregunta } from "../controllers/actividad.controller";
import storageMulter from "../middlewares/multer.middleware";

const preguntaRouter: Router = Router();

//preguntaRouter.post("/",storageMulter.single("imagen"), createPregunta);
//productoRouter.post("/update/:idProducto",storageMulter.single("imagen"), updateProducto);
//productoRouter.delete("/:idProducto",deleteProducto);



export default preguntaRouter;
