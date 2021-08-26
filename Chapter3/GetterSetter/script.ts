class Point2D {
    _xPos: number;
    _yPos: number;

    constructor(xPos = 0, yPos = 0) {
        this._xPos = xPos;
        this._yPos = yPos;
    }

    get xPos(): number {
        return this._xPos;
    }

    set xPos(xPos: number) {
        this._xPos = xPos;
    }

    get yPos(): number {
        return this._yPos;
    }

    set yPos(yPos: number) {
        this._yPos = yPos;
    }
}

class Point3D extends Point2D {
    _zPos: number;

    constructor(xPos = 0, yPos = 0, zPos = 0) {
        super(xPos, yPos);
        this._zPos = zPos;
    }

    get zPos(): number {
        return this._zPos;
    }

    set zPos(zPos: number) {
        this._zPos = zPos;
    }
}

const p = new Point3D(1, 2, 3);
