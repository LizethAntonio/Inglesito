import {Router} from "express";
import {viewLogin,auth,logout} from "../controllers/login.controller";


const loginRouter: Router = Router();


loginRouter.get("/", viewLogin);
//hipo: agregue ruta para autenficar al usuario
loginRouter.post("/auth",auth);
//hipo: agregue ruta para cerrar session

loginRouter.get("/logout",logout);


export default loginRouter;