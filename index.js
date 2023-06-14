//required packages and files
const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shapes.js");
const SVG = require("./lib/svg.js");

// design questions for logo
function questions() {
  inquirer
    .prompt([
      {
        type: "input",
        message:
          "What text do you want on your logo? (maximum of three characters)",
        name: "text",
      },
      {
        type: "input",
        message:
          "What color do you want the text to be? (Enter color or a hexadecimal color number)",
        name: "textColor",
      },
      {
        type: "list",
        message: "What shape do you want your logo to be?",
        choices: ["Circle", "Square", "Triangle"],
        name: "shape",
      },
      {
        type: "input",
        message:
          "What color do you want your shape to be? (Enter color or a hexadecimal color number)",
        choices: ["circle", "square", "triangle"],
        name: "shapeColor",
      },
    ])
    .then((answers) => {
      if (answers.text.length > 3) {
        // check text length <=3, prompt if greater than 3, otherwise write to file
        console.log("Please enter no more than 3 characters");
      } else {
        writeToFile("logo.svg", answers);
      }
    });
}

function writeToFile(fileName, answers) {
  const svg = new SVG();
  svg.setText(answers.text, answers.textColor);
  let shape;
  if (answers.shape == "Circle") {
    shape = new Circle();
  } else if (answers.shape == "Square") {
    shape = new Square();
  } else if (answers.shape == "Triangle") {
    shape = new Triangle();
  }
  shape.setColor(answers.shapeColor);
  svg.setShape(shape);
  const svgString = svg.render();

  fs.writeFile(fileName, svgString, (err) => {
    // writting file as well as logging error
    err ? console.log(err) : console.log("Generated logo.svg");
  });
}

questions(); // questions (inquirer) starts on load
