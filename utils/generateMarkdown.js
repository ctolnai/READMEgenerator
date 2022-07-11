const initialize = require('../index.js')

function renderLicenseBadge(license) {
  return `![License: ${license}](https://img.shields.io/badge/License-${license}-blueviolet.svg)`;
}

function renderLicenseSection(license) {
  return `This application is licensed under ${license}`
}

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
  ## Contribution
  ${response.contribution}
  ## Tests
  ${response.test}`; 

}

module.exports = generateMarkdown;
