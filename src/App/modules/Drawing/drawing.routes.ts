import {Router} from "express";
import {DrawingController} from "@/App/modules/Drawing/drawing.controller";

const DrawingRoutes = Router()

DrawingRoutes
    .get('/list',DrawingController.getAll)
    .get('/:id',DrawingController.getSpecficOne)
    .post('/new',DrawingController.create)
    .delete('/:id',DrawingController.deleteOne)

export default DrawingRoutes