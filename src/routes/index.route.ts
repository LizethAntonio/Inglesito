import {Router} from "express";
import {viewLogin  } from "../controllers/login.controller";


const loginRouter: Router = Router();

loginRouter.get("/", viewLogin);

export default loginRouter;
