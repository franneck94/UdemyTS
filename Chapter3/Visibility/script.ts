class Point2D {
    // private _xPos: number;
    // private _yPos: number;
    protected _xPos: number;
    protected _yPos: number;

    constructor(xPos = 0, yPos = 0) {
        this._xPos = xPos;
        this._yPos = yPos;
    }

    public get xPos(): number {
        return this._xPos;
    }

    public set xPos(xPos: number) {
        this._xPos = xPos;
    }

    public get yPos(): number {
        return this._yPos;
    }

    public set yPos(yPos: number) {
        this._yPos = yPos;
    }

    public print() {
        console.log(this._xPos);
        console.log(this._yPos);
    }
}

class Point3D extends Point2D {
    private _zPos: number;

    constructor(xPos = 0, yPos = 0, zPos = 0) {
        super(xPos, yPos);
        this._zPos = zPos;
    }

    public get zPos(): number {
        return this._zPos;
    }

    public set zPos(zPos: number) {
        this._zPos = zPos;
    }

    public print() {
        console.log(this.xPos); // Errors in _xPos private
        console.log(this.yPos);
        console.log(this.zPos);
    }
}

const p = new Point3D(1, 2, 3);
