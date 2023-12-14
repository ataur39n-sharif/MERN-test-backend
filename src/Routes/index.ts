import {Router} from "express";
import DrawingRoutes from "@/App/modules/Drawing/drawing.routes";

const rootRouter = Router()

rootRouter
    .use('/draw', DrawingRoutes)


export default rootRouter