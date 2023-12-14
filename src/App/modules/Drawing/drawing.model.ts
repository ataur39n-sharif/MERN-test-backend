/*
*
0 :
offsetX: 99
offsetY: 37
path: Array(9) [ (2) […], (2) […], (2) […], … ]
stroke: "black"
type: "pencil"
<prototype>: Object { … }
*
1:
height: 120
offsetX: 157
offsetY: 37
stroke: "black"
type: "line"
width: 363
<prototype>: Object { … }
*
2:
height: 56
offsetX: 555
offsetY: 37
stroke: "black"
type: "rectangle"
width: 140
*
* */

/*
*
* offsetX,offsetY,stroke,type,path,height,width
* */

import {model, Schema} from "mongoose";
import {IDrawing, IDrawingShape} from "@/App/modules/Drawing/drawing.types";

const shapeSchema = new Schema<IDrawingShape>({
    offsetX: {
        type: Number,
        required: true,
    },
    offsetY: {
        type: Number,
        required: true,
    },
    stroke: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['line', 'pencil', 'rectangle'],
        required: true,
    },
    path: {
        type: [[Number]],
        required: true,
    },
    height: {
        type: Number,
        default: null,
    },
    width: {
        type: Number,
        default: null,
    }
},{
    versionKey:false
})

const dataSchema = new Schema<IDrawing>({
    name:{
        type: String,
        required: true
    },
    shape:{
        type: [shapeSchema],
        required: true
    }
},{
    timestamps:true,
    versionKey:false
})

export  const DrawingModel = model('drawing',dataSchema)