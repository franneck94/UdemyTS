class Point2D {
    protected _xPos: number;
    protected _yPos: number;

    constructor(xPosInput: number, yPosInput: number) {
        this._xPos = xPosInput;
        this._yPos = yPosInput;
    }

    public get xPos(): number {
        return this._xPos;
    }

    public set xPos(xPosNew: number) {
        this._xPos = xPosNew;
    }

    public get yPos(): number {
        return this._yPos;
    }

    public set yPos(yPosNew: number) {
        this._yPos = yPosNew;
    }
}

class Point3D extends Point2D {
    protected _zPos: number;

    constructor(xPosInput: number, yPosInput: number, zPosInput: number) {
        super(xPosInput, yPosInput);
        this._zPos = zPosInput;
    }

    public get zPos(): number {
        return this._zPos;
    }

    public set zPos(zPosNew: number) {
        this._zPos = zPosNew;
    }
}

const p1 = new Point2D(0, 0);
console.log(p1);

p1.xPos = 2;

const p2 = new Point3D(0, 0, 0);
console.log(p2);

p2.zPos = 3;
