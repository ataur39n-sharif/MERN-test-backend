import catchAsync from "@/Utils/helper/catchAsync";
import {NextFunction, Request, Response} from "express";
import {DrawingValidation} from "@/App/modules/Drawing/drawing.validation";
import {DrawingModel} from "@/App/modules/Drawing/drawing.model";
import {sendResponse} from "@/Utils/helper/sendResponse";
import {z} from "zod";
import {Types} from "mongoose";

// const create = async ()=>{
//    const payload:IDrawingShape[] =  [
//         {
//             "type": "pencil",
//             "offsetX": 99,
//             "offsetY": 37,
//             "path": [
//                 [
//                     99,
//                     37
//                 ],
//                 [
//                     100,
//                     38
//                 ],
//                 [
//                     100,
//                     46
//                 ],
//                 [
//                     100,
//                     59
//                 ],
//                 [
//                     104,
//                     77
//                 ],
//                 [
//                     106,
//                     97
//                 ],
//                 [
//                     109,
//                     103
//                 ],
//                 [
//                     110,
//                     105
//                 ],
//                 [
//                     111,
//                     107
//                 ]
//             ],
//             "stroke": "black"
//         },
//         {
//             "type": "line",
//             "offsetX": 157,
//             "offsetY": 37,
//             "stroke": "black",
//             "width": 363,
//             "height": 120
//         },
//         {
//             "type": "rectangle",
//             "offsetX": 555,
//             "offsetY": 37,
//             "stroke": "black",
//             "width": 140,
//             "height": 56
//         }
//     ]
//     const modifiedPayload :IDrawing={
//        name:'One',
//         shape:payload
//     }
//
//     const a = await DrawingModel.create(modifiedPayload)
//     console.log({a})
// }

const getAll = catchAsync(async (req:Request,res:Response,next:NextFunction) => {
    const data = await DrawingModel.find().lean()

    sendResponse.success(res,{
        statusCode:200,
        message:"Drawing fetched successfully",
        data
    })
})

const getSpecficOne = catchAsync(async (req:Request,res:Response,next:NextFunction) => {
    const _id = z.instanceof(Types.ObjectId).parse(new Types.ObjectId(req.params.id))
    const data = await DrawingModel.findOne({
        _id
    }).lean()

    sendResponse.success(res,{
        statusCode:200,
        message:"Drawing deleted successfully",
        data
    })
})

const create = catchAsync(async (req:Request,res:Response,next:NextFunction) => {
    const payload = DrawingValidation.drawingZodSchema.parse(req.body)
    const data = await DrawingModel.create(payload)

    sendResponse.success(res,{
        statusCode:201,
        message:"Drawing created successfully",
        data
    })
})

const deleteOne = catchAsync(async (req:Request,res:Response,next:NextFunction) => {
    const _id = z.instanceof(Types.ObjectId).parse(new Types.ObjectId(req.params.id))
    const data = await DrawingModel.deleteOne({
        _id
    })

    data.deletedCount

    sendResponse.success(res,{
        statusCode:200,
        message:data.deletedCount>0?"Drawing deleted successfully":"Already deleted",
        data
    })
})
export const DrawingController={
    create,
    getAll,
    getSpecficOne,
    deleteOne
}