//required packages and files
const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shapes.js");

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
  let svgString = ""; //sets sting to null

  svgString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><g>${answers.shape}`;
  let shapeChoice; // checking inputed shape and running conditional tests
  if (answers.shape === "Circle") {
    shapeChoice = new Circle();
    svgString += `<circle cx="150" cy="100" r="80" fill="${answers.shapeColor}"/><text x="150" y="125" text-anchor="middle" font-size="60" fill="${answers.textColor}">${answers.text}</text></g></svg>`;
  } else if (answers.shape === "Square") {
    shapeChoice = new Square();
    svgString += `<rect x="90" y="40" width="120" height="120" fill="${answers.shapeColor}"/><text x="150" y="125" text-anchor="middle" font-size="60" fill="${answers.textColor}">${answers.text}</text></g></svg>`;
  } else {
    shapeChoice = new Triangle();
    svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}"/><text x="150" y="150" text-anchor="middle" font-size="60" fill="${answers.textColor}">${answers.text}</text></g></svg>`;
  }

  fs.writeFile(fileName, svgString, (err) => {
    // writting file as well as logging error
    err ? console.log(err) : console.log("Generated logo.svg");
  });
}

questions(); // questions (inquirer) starts on load
