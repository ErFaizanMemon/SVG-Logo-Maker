// Import the Shape Classes
const { Triangle, Circle, Square } = require("./shapes");

describe("Triangle Shape", () => {
  it("Should render a triangle with the specified background color", () => {
    const shapeColor = "red";
    const text = "Sample Text";
    const textColor = "black";
    const triangleShape = new Triangle(text, shapeColor, textColor);
    const expectedSVG = `<svg width="500" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <polygon points="250,60 100,400 400,400" class="triangle" fill="${shapeColor}"/>
      <text font-size="30px" x="220" y="220" fill="${textColor}">${text}</text>
    </svg>`;
    expect(triangleShape.render()).toBe(expectedSVG);
  });
});

describe("Circle Shape", () => {
  it("Should render a circle with the specified background color", () => {
    const shapeColor = "blue";
    const text = "Sample Text";
    const textColor = "white";
    const circleShape = new Circle(text, shapeColor, textColor);
    const expectedSVG = `<svg width="500" height="400" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle cx="250" cy="200" r="150" stroke="red" fill="${shapeColor}" stroke-width="5"/>
      <text font-size="30px" x="250" y="200" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`;
    expect(circleShape.render()).toBe(expectedSVG);
  });
});

describe("Square Shape", () => {
  it("Should render a square with the specified background color", () => {
    const shapeColor = "green";
    const text = "Sample Text";
    const textColor = "white";
    const squareShape = new Square(text, shapeColor, textColor);
    const expectedSVG = `<svg width="500" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="300" x="50" y="50" fill="${shapeColor}" />
      <text font-size="30px" x="200" y="190" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`;
    expect(squareShape.render()).toBe(expectedSVG);
  });
});
