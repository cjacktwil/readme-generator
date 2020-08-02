//importing requirements
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the name of your project.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username.',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username.')
                return false;
            }
        }
    },
    {
        type: 'editor',
        name: 'description',
        message: 'Please describe your project:',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please describe your project.')
            }
        }
    },
    {
        type: 'editor',
        name: 'installation',
        message: 'How does one install your project?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please answer the question.')
                return false;
            }
        }
    },
    {
        type: 'editor',
        name: 'usage',
        message: 'How is this application used?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please answer the question.')
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'screenshotConfirm',
        message: 'Would you like to include screenshot(s)?',
        default: false
    },
    {
        type: 'input',
        name: 'screenshotLink',
        message: 'Enter the link to your screenshot.',
        when: ({ screenshotConfirm }) => screenshotConfirm
    },
    {
        type: 'input',
        name: 'alt',
        message: 'Enter the alternate text for our screenshot link.',
        when: ({ screenshotConfirm }) => screenshotConfirm
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does this project hold?',
        choices: ['Apache License 2.0', 'Creative Commons', 'GNU GPLv2', 'ISC License', 'MIT'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Please select a license type.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How can others contribute to this project?',
        validate: contributeInput => {
            if (contributeInput) {
                return true;
            } else {
                console.log('Please answer the question')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide test examples for this project.',
    }

];

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function (data) {
        // function to write README file
        fs.writeFile('./dist/README.md', generateMarkdown(data), err => {
            if (err) throw err;
            console.log("File has been generated.");
        });
    })
};

// function call to initialize program
init();

