//Classes are a “blueprint” of functionality:
// In other words this acts like a blueprint to create other objects

class Triangle {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  //getArea is a built in method
  getArea() {
    return (this.a * this.b) / 2;
  }
  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }
}

// This can be tested by creating a new class

let myTri = new Triangle(); // "instantiation" of triangle class
myTri.a = 3;
myTri.b = 4;
myTri.getArea(); // 6
myTri.getHypotenuse(); // 5

// With a constructor you can create a new object immediately
// The method with the special name constructor is called when you make a new instance.

let myTri2 = new Triangle(3, 4);
myTri2.getArea(); // 6
