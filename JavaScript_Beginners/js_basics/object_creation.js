//Factory function
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("Drawing radius");
    }
  };
}

const circleFactory = createCircle(10);
console.log(circleFactory);

//Constructor function
function Circle(radius) {
  this.radius = radius;

  this.draw = function() {
    console.log("Deawing radius");
  };
}

const circleConstructor = new Circle(10);
console.log(circleConstructor);
