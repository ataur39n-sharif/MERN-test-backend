export interface IDrawing{
name: string;
shape:IDrawingShape[]
}

export interface IDrawingShape{
    offsetX:number,
    offsetY:number,
    stroke:string,
    type:string,
    path?:[number, number][],
    height?:number,
    width?:number
}