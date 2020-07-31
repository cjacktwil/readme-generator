
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
  
  ## Table of Contents
  *[Installation](#installation)
  *[Usage](#usage)
  *[License](#license)
  *[Contribution Guidelines](#contributing)
  *[Tests](#tests)
  *[Questions](#questions)
 
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  ${generateScreenshot(data)}

  ## License
 

  ## Contributing
  ${data.contribute}

  ## Tests
  ${data.test}

  ## Questions
  Have additional questions? Contact [${data.github}](http://github.com.${data.github}) or email ${data.email}.
`;
}

module.exports = generateMarkdown;