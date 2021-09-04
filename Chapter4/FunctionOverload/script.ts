class Point2D {
    public xPos: number;
    public yPos: number;

    constructor(xPosInput: number, yPosInput: number) {
        this.xPos = xPosInput;
        this.yPos = yPosInput;
    }
}

function printCoordinates(point: Point2D): void;
function printCoordinates(xPos: number, yPos: number): void;

function printCoordinates(arg1: unknown, arg2?: unknown) {
    if (typeof arg1 === 'object') {
        console.log(`x: ${(arg1 as Point2D).xPos}`);
        console.log(`x: ${(arg1 as Point2D).yPos}`);
    } else {
        console.log(`x: ${arg1}`);
        console.log(`x: ${arg2}`);
    }
}
