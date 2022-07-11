const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
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
        message: 'Enter test instructions:',
        name: 'test',
    },
    {
        type: 'input',
        message: 'Enter contribution instructions:',
        name: 'contribution',
    },
    {
        type: 'list',
        message: 'Which license do you want to use?',
        name: 'license',
        choices: ['MIT', 'GNU', 'Apache' ]
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
    },];

function initialize () {inquirer
    .prompt(questions)
    .then((response) => 
         fs.writeFile('./dist/README.MD', generateMarkdown(response), (err) =>
         err ? console.log(err) : console.log('success')
         ) 
)};

initialize()

module.exports = initialize;
