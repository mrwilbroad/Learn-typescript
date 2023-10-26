// Structural Type System
interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`Point (x: ${p.x},y: ${p.y})`);
}

const point  = {x:34, y: 910, z: 34};
logPoint(point);