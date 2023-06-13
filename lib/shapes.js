class Shape {
  constructor() {
    this.color = "";
  }
}

// circle class inherits properties from shape class
class Circle extends Shape {
  render() {
    //setup x,y cordinates as well as radius of shape
    return `<circle cx='150' cy'100' r='80' fill='${this.color}'/>`;
  }
}

// square class, inherits properties from shape class
class Square extends Shape {
  render() {
    //setup x,y cordinates as well as width and height of shape
    return `<rect x='90' y='40' width='120' height ='120' fill='${this.color}'/>`;
  }
}

// triangle class, inherits properties from shape class
class Triangle extends Shape {
  render() {
    //setup x,y cordinates on all 3 points of triangle
    return `<polygon points='150, 18 244, 182 56, 182' fillfill='${this.color}'/>`;
  }
}
//exports classes to index
module.exports = { Circle, Square, Triangle };
