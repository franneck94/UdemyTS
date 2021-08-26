class Point2D {
    xPos: number;
    yPos: number;

    constructor(xPos = 0, yPos = 0) {
        this.xPos = xPos;
        this.yPos = yPos;
    }
}

class Point3D extends Point2D {
    zPos: number;

    constructor(xPos = 0, yPos = 0, zPos = 0) {
        super(xPos, yPos);
        this.zPos = zPos;
    }
}

const p = new Point3D(1, 2, 3);
