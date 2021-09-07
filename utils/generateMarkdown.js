const initialize = require('../index.js')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![License: ${license}](https://img.shields.io/badge/License-${license}-blueviolet.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // switch case
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This application is licensed under ${license}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {

  return `# ${response.title}
  ${renderLicenseBadge(response.license)}
  ## Description
  ${response.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Questions](#questions)
  - [License](#license)
  - [Contribution](#contribution)
  - [Tests](#tests)
  ## Installation
  ${response.installation}
  ## Usage
  ${response.usage}
  ## Questions
  https://github.com/${response.gitHub}

  Please email me at ${response.email} for any questions.
  ## License
  ${renderLicenseSection(response.license)}
  ## How to Contribute
  ${response.contribution}
  ## Tests
  ${response.test}`; 

}

module.exports = generateMarkdown;
