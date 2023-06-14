class SVG {
  constructor() {
    this.answers = {};
  }
  setText(text, textColor) {
    this.answers.text = text;
    this.answers.textColor = textColor;
    if (this.answers.text.length > 3) {
      throw new Error("Text must not exceed 3 characters.");
    }
  }
  setShape(shape) {
    this.answers.shape = shape;
  }
  render() {
    let svgString = ""; //sets sting to null

    svgString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
    //   <g>${this.answers.shape}
    let shapeChoice; // checking inputed shape and running conditional tests
    if (this.answers.shape) {
      svgString += this.answers.shape.render();
    }
    if (this.answers.text) {
      svgString += `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.answers.textColor}">${this.answers.text}</text>`;
    }
    svgString += "</svg>";
    return svgString;
  }
}

module.exports = SVG;
