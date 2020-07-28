// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  // ## Table of Contents - optional - ask question about if user wants to include, then create functions to add, if true

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  // include option to add screenshots

  ## Credits
  ${data.credits}

  ## License
  ${data.license}

  //## Badges - optional

  //## Contributing - optional

  //## Tests - optional

`;
}

module.exports = generateMarkdown;
