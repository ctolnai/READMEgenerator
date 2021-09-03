const initialize = require('../index.js')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)]`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // switch case
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return ` this is my ${license}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {

  return `# ${response.title}
  ${renderLicenseBadge(response.license)}
  ## Description
  ${response.description}
  ## Installation
  ${response.installation}
  ## Usage
  ${response.usage}
  ## Credits
  ${response.github} \n ${response.email}
  ## License
  The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
  ---
  ## How to Contribute
  ${response.contribution}
  ## Tests
  ${response.test}`; 

}

module.exports = generateMarkdown;
