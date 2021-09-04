type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(arg: Fish | Bird) {
    if ('swim' in arg) {
        arg.swim();
    } else if ('fly' in arg) {
        arg.fly();
    }
}

class Point2D {
    public xPos: number;
    public yPos: number;

    constructor(xPosInput: number, yPosInput: number) {
        this.xPos = xPosInput;
        this.yPos = yPosInput;
    }
}

function printCoordinates(point: Point2D): void;
function printCoordinates(x: number, y: number): void;

function printCoordinates(arg1: unknown, arg2?: unknown) {
    if (arg1 instanceof Point2D) {
        console.log(arg1.xPos);
        console.log(arg1.yPos);
    } else {
        console.log(arg1);
        console.log(arg2);
    }
}

const p = new Point2D(2, 2);

printCoordinates(p);
printCoordinates(1, 1);
