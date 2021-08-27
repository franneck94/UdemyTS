interface Point2D {
    xPos: number;
    yPos: number;
    readonly name?: string;
}

const p1: Point2D = { xPos: 0, yPos: 0, name: 'centerPoint' };

p1.name = 'point1';

const p2: Point2D = { xPos: 1, yPos: 1 };

p2.name = 'point2';
