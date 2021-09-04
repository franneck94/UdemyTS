class Point2D {
    public xPos: number;
    public yPos: number;

    constructor(xPosInput: number, yPosInput: number) {
        this.xPos = xPosInput;
        this.yPos = yPosInput;
    }
}

// function printCoordinatesFromPoint2D(point: Point2D) {
//     console.log(point.xPos, point.yPos);
// }

// function printCoordinatesFromNumber(x: number, y: number) {
//     console.log(x, y);
// }

function printCoordinates(point: Point2D): void;
function printCoordinates(x: number, y: number): void;
function printCoordinates(x: number, y: number, z: number): void;

function printCoordinates(arg1: unknown, arg2?: unknown, arg3?: unknown) {
    if (typeof arg1 === 'object') {
        console.log((arg1 as Point2D).xPos);
        console.log((arg1 as Point2D).yPos);
    } else if (typeof arg3 === 'number') {
        console.log(arg1);
        console.log(arg2);
        console.log(arg3);
    } else {
        console.log(arg1);
        console.log(arg2);
    }
}

const p = new Point2D(2, 2);
printCoordinates(p);

printCoordinates(1, 1);

printCoordinates(1, 1, 1);
