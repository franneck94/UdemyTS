class Point2D {
    xPos: number;
    yPos: number;

    constructor(xPosInput: number, yPosInput: number) {
        this.xPos = xPosInput;
        this.yPos = yPosInput;
    }
}

class Point3D extends Point2D {
    zPos: number;

    constructor(xPosInput: number, yPosInput: number, zPosInput: number) {
        super(xPosInput, yPosInput);
        this.zPos = zPosInput;
    }
}

const p1 = new Point2D(0, 0);
console.log(p1);

const p2 = new Point3D(0, 0, 0);
console.log(p2);
