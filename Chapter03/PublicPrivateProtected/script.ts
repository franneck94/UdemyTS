class Point2D {
    public xPos: number;
    public yPos: number;

    constructor(xPosInput: number, yPosInput: number) {
        this.xPos = xPosInput;
        this.yPos = yPosInput;
    }
}

class Point3D extends Point2D {
    protected zPos: number;

    constructor(xPosInput: number, yPosInput: number, zPosInput: number) {
        super(xPosInput, yPosInput);
        this.zPos = zPosInput;

        this.xPos = 2;
    }
}

const p1 = new Point2D(0, 0);
console.log(p1);

const p2 = new Point3D(0, 0, 0);
console.log(p2);
