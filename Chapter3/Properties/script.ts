interface Point2D {
    xPos: number;
    yPos: number;
    readonly name?: string; // Readonly and Optional Property
}

function printPoint(point: Point2D) {
    console.log(point.xPos);
    console.log(point.yPos);
    if (point.name) {
        console.log(point.name);
    } else {
        point.name = 'emptyName';
    }
}

let p: Point2D = { xPos: 0, yPos: 0, name: 'centerPoint' };

printPoint(p);

const p2: Point2D = { xPos: 0, yPos: 0 };
p2.name = 'emptyName';
