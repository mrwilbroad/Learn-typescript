
type ShapeType = "Circle" | "Rectangle";


interface Shape {
  readonly kind: ShapeType;
}

class Circle implements Shape {
  kind: "Circle";
  radius: number;
}

interface Area {
  
}


class Rectangle implements Shape {
  kind: "Rectangle";
  base: number;
  length: number;
}


const AA : Circle = {
  radius: 90,
  kind: "Circle"
}



console.log(AA)


