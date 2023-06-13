//establishing required packages
const inquirer = require('inquirer');
const fs = require('fs');

//importing shapes
const {Circle, Square, Triangle} = require('./lib/shapes.js');


function writeToFile(fileName, answers) {
    
    let svgString = ''; //sets sting to null
    
    svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">' //sets width and height of container
    
    svgString += '<g>'; // <g> element is used to group svg layers into one layer, being added to the svgString

    svgString += '${answers.shape}'; //user input, checking for shape below as well as being added to the svgString

    let shapeChoice; // checking inputed shape and running conditional tests
    if (answers.shape === 'Circle') {
       shapeChoice = new Circle(); 
       svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeColor}"/>`;
    } else if (answers.shape === 'Square') {
        shapeChoice = new Square();
        svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeColor}"/>`;      
    }else{
        shapeChoice = new Triangle();
        svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}"/>`;
    }
        // setting text allignment and font size as well as terminating </g> and </svg>
    svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
    svgString += '</g>'; 
    svgString += '</svg>';

    fs.writeFile(fileName, svgString, (err) => { // writting file as well as running error check
        err ? console.log(err) : console.log('Generated logo.svg');
      });
}

function userQuestions () { // begin user questions for logo
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What text do you want on the logo? (Enter no more than three characters)',
                name: 'text',
            },
            {
                type: 'input',
                message: 'What color do you want the text to be? (Enter color or a hexadecimal color number)',
                name: 'textColor',
            },
            {
                type: 'list',
                message: 'What shape do you want the logo to be?',
                choices: ['Circle', 'Square', 'Triangle'],
                name: 'shape',
            },
            {
                type: 'input',
                message: 'What color do you want the shape to be? (Enter color or a hexadecimal color number)',
                choices: ['circle', 'square', 'triangle'],
                name: 'shapeColor',
            }
        ])
        .then((answers) => {
            if (answers.text.length > 3) { // check text length <=3, prompt if greater than 3, otherwise write to file
              console.log('Must enter a value of no more than 3 characters');
            } else {
              writeToFile('logo.svg', answers);
            }
        });
}

userQuestions(); // user questions (inquirer) starts on load