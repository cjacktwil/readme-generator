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
            type: 'confirm',
            name: 'table',
            message: 'Would you like to add a table of contents?',
            default: false
        },
        {
            type: 'input',
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
            type: 'input',
            name: 'installation',
            message: 'How does one install your project?'
        },
    {
        type: 'input',
        name: 'usage',
        message: 'How is this application used?'
    },
    {
        type: 'confirm',
        name: 'screenshotConfirm',
        message: 'Would you like to include screenshot(s)?',
        default: false
    },
    {
        type: 'link',
        name: 'screenshot',
        message: 'Enter the link to your screenshot.',
        when: ({screenshotConfirm}) => screenshotConfirm
    },
    {
        type: 'confirm',
        name: 'screenshotConfirmTwo',
        message: 'Would you like to include another screenshot?',
        default: false,
        when: ({screenshotConfirm}) => screenshotConfirm
    },
    {
    type: 'input',
    name: 'credits',
    message: 'Who worked on this project and needs to be listed in the credit section?'
    },
    {
        type: 'link',
        name: 'creditLink',
        message: 'Please enter the GitHub link for your collaborator.'
    },
    {
        type: 'input',
        name: 'license',
        message: 'What license does this project hold?'
    },
    {
        type: 'confirm',
        name: 'badgesConfirm',
        message: 'Would you like to list any badges?',
        default: false
    },
    {
        type: 'input',
        name: 'badges',
        message: 'What badges would you like to add?',
        when: ({badgesConfirm}) => badgesConfirm
    },
    {
        type: 'confirm',
        name:'contributingConfirm',
        message: 'Would you like others to contribute to this project?',
        default: false
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How can others contribute to this project?',
        when: ({contributingConfirm}) => contributingConfirm
    },
    {
        type: 'confirm',
        name: 'testConfirm',
        message: 'Would you like to provide any test examples for your project?',
        default: false
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide test examples for this project.',
        when: ({testConfirm}) => testConfirm
    }

];



// function to initialize program
function init() {
    inquirer.prompt(questions).then(function(data) {
// function to write README file
fs.writeFile('README.md', generateMarkdown(data), err => {
    if (err) throw err;
    console.log("File has been generated.");
    });
    
    })

};






// function call to initialize program
init();
