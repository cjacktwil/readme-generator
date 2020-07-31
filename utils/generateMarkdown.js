// const generateTable =


const generateScreenshot = (data) => {
  if (!data.screenshotConfirm) {
    return '';
  } else {
    console.log("print screenshot");
    if (!data.screenshotLink) {
      return '';
    }
    screenshotUrl = data.screenshotLink;
    // console.log(screenshotUrl);
    if (!data.alt) {
      return '';
    } screenshotAlt = data.alt;
    // console.log(screenshotAlt);
  };
  return `![${screenshotAlt}](${screenshotUrl})`;
};

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
  ${generateScreenshot(data)}

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