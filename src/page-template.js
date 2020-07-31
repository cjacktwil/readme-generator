  const generateScreenshots = screenshotAdd => {
    if (!screenshot) {
      return '';
    } else {
    const generateShots = altText => (!alt ? '' : `![${altText}]`);
    const generateLink = linkText => (!link ? '' : `(${linkText})`);
    generateShots(data)
    generateLink(data)
    }
  };
  
  const 
  
    // include option to add screenshots
  
  generatePage = () => {

    module.exports = data => {
        
    return `# ${data.title}
  
    ## Description
    ${data.description}
  
    // ## Table of Contents - optional - ask question about if user wants to include, then create functions to add, if true
  
    ## Installation
    ${data.installation}
  
    ## Usage
    ${data.usage}
  
    ${generateScreenshots(screenshot)}
  
    ## Credits
    ${data.credits}
  
    ## License
    ${data.license}
  
    //## Badges - optional
  
    //## Contributing - optional
  
    //## Tests - optional
  
  `;
  }
};

module.exports = generatePage;