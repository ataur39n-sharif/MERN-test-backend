import {z} from "zod";

const drawingShapeZodSchema = z.object({
    offsetX: z.number(),
    offsetY: z.number(),
    stroke: z.string(),
    type: z.enum(["line", "pencil", "rectangle"]),
    path: z.optional(z.array(z.tuple([z.number(), z.number()]))),
    height: z.optional(z.number()),
    width: z.optional(z.number()),
});


const drawingZodSchema = z.object({
    name: z.string(),
    shape: z.array(drawingShapeZodSchema).min(1),
});


export const DrawingValidation={
    drawingZodSchema
}