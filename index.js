// Import required modules
const { writeFile } = require("fs").promises;
const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require('./lib/shapes');

// Prompt the user for input
inquirer.prompt([
    {
        type: 'input',
        message: 'What message do you want inside the shape?',
        name: 'text',
    },
    {
        type: 'input',
        message: 'What color do you want for the text?',
        name: 'colorText'
    },
    {
        type: 'list',
        message: 'Select a shape',
        name: 'shape',
        choices: ['Triangle', 'Circle', 'Square']
    },
    {
        type: 'input',
        message: 'What color do you want for the shape?',
        name: 'colorShape'
    }, 
])
.then(function(response) {
    let shape;

    // Create the selected shape based on user input
    switch(response.shape) {
        case 'Triangle':
            shape = new Triangle(response.text, response.colorShape, response.colorText);
            break;
        case 'Circle':
            shape = new Circle(response.text, response.colorShape, response.colorText);
            break;
        case 'Square':
            shape = new Square(response.text, response.colorShape, response.colorText);
            break;
    }

    // Generate and save the SVG
    writeFile('shape.svg', shape.render());
})
.catch(function(error) {
    console.error('An error occurred:', error);
});
