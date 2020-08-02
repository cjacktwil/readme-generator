
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

//function to generate badge
const generateBadge = (data) => {
  if (!data.license) {
    return '';
  } else if (data.license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (data.license === 'Creative Commons') {
    return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`
  } else if (data.license === 'GNU GPLv2') {
    return `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  } else if (data.license === 'Apache License 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (data.license === 'ISC License') {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  }
};

// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
${generateBadge(data)}

## Description
${data.description}
  
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution Guidelines](#contributing)
* [Tests](#tests)
* [Questions](#questions)
 
## Installation
${data.installation}

## Usage
${data.usage}

${generateScreenshot(data)}

## License
This project is licensed under a ${data.license} license. 

## Contributing
${data.contribute}

## Tests
${data.test}

## Questions
Have additional questions? Contact [${data.github}](http://github.com.${data.github}) or email ${data.email}.
`;
}

module.exports = generateMarkdown;