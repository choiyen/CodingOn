class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

let rec1 = new Shape(3, 4);
console.log(rec1.getArea());

class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  getDiagonal() {
    return Math.sqrt(this.width ** 2 + this.height ** 2);
  }
}

const rect2 = new Rectangle(3, 4);
console.log(rect2.getDiagonal());

class Triangle extends Shape {
  constructor(row, col) {
    super(row, col);
  }
  getArea() {
    return (Number(row) * Number(col)) / 2;
  }
}

class circle extends Shape {
  constructor(row, col, radius) {
    super(row, col);
    this.radius = radius;
  }

  getArea() {
    return this.radius ** 2 * Math.PI;
  }
}
