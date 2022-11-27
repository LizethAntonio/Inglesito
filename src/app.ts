import express, { Application } from "express";
import morgan from "morgan";
import path from "path"
import dotenv from "dotenv";
dotenv.config();

import expressSession from "./middlewares/express-session.middleware";

import loginRouter from "./routes/login.router";
import registerRouter from "./routes/registro.route";
import principalRouter from "./routes/principal.route";
import verificacionRouter from "./routes/veri.route";
import principianteRouter from "./routes/principiante.route";
import principiante2Router from "./routes/principiante2.route";
import principiante3Router from "./routes/principiante3.route";

//import exampleRouter from "./routes/example.route";
//import exampleV2Router from "./routes/example.v2.route";
//import logginRouter from "./routes/loggin.router";

const app: Application = express();


//settings
app.set("port", process.env.PORT || 4000);
app.set("view engine","ejs");
app.set('views', path.join(__dirname, './views'));
app.set("conector", "php");
app.set('conec', path.join(__dirname, './include'));




//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'./public')))
app.use(expressSession);

//routes
app.use("/", loginRouter);
app.use("/", registerRouter);
app.use("/", principalRouter);
app.use("/", verificacionRouter);
app.use("/", principianteRouter);
app.use("/", principiante2Router);
app.use("/", principiante3Router);

/*app.use("/api/v1/example",exampleRouter);
app.use("/api/v2/example",exampleV2Router);
app.use("/view/loggin",logginRouter);
*/
export default app;
