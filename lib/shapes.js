// Exports `Triangle`, `Circle`, and `Square` classes
class Circle {
  constructor(text, shapeColor, textColor) {
    this.text = text;
    this.shapeColor = shapeColor;
    this.textColor = textColor;
  }
  render() {
    return `<svg width="500" height="400" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="250" cy="200" r="150" stroke="red" fill="${this.shapeColor}" stroke-width="5"/><text font-size="30px" x="250" y="200" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
  }
}
class Triangle {
  constructor(text, shapeColor, textColor) {
    this.text = text;
    this.shapeColor = shapeColor;
    this.textColor = textColor;
  }
  render() {
    return `<svg width="500" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="250,60 100,400 400,400" class="triangle" fill="${this.shapeColor}"/><text font-size="30px" x="220" y="220" fill="${this.textColor}">${this.text}</text></svg>`;
  }
}
class Square {
  constructor(text, shapeColor, textColor) {
    this.text = text;
    this.shapeColor = shapeColor;
    this.textColor = textColor;
  }
  render() {
    return `<svg width="500" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="300" x="50" y="50" fill="${this.shapeColor}" /><text font-size="30px" x="200" y="190" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
  }
}

module.exports = { Square, Triangle, Circle };
