// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [];

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter the title of your application:',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Enter a description of your application:',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Enter installation instructions:',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Enter usage information:',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Enter contribution guidelines:',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'Enter test instructions:',
            name: 'test',
        },
        {
            type: 'list',
            message: 'Which license do you want to use?',
            name: 'license',
            choices: ['MIT', 'GNU v3.0', 'Apache 2.0' ]
        },
        {
            type: 'input',
            message: 'Enter your GitHub username:',
            name: 'gitHub',
        },
        {
            type: 'input',
            message: 'Enter your email:',
            name: 'email',
        },
    ])
    .then((response) => {let log = `${response.title.toLowerCase().split(' ').join('')}.md`;
        
         fs.writeFile(log, JSON.stringify(response, null, '\t'), (err) =>
         err ? console.log(err) : console.log('success')
         );
        
});

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
