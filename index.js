const fs = require('fs');
const inquirer = require('inquirer');

const licenses = [
    { name: 'MIT License', value: 'MIT', url: 'https://opensource.org/licenses/MIT', badge: 'MIT'},
    { name: 'BSD 2-Clause "Simplified" License', value: 'BSD-2-Clause', url: 'https://opensource.org/licenses/BSD-2-Clause', badge: 'BSD--2--Clause'},
    { name: 'BSD 3-Clause "New" or "Revised" License', value: 'BSD-3-Clause', url: 'https://opensource.org/licenses/BSD-3-Clause', badge: 'BSD--3--Clause'},
    { name: 'GNU GPLv3', value: 'GPL-3.0', url: 'https://www.gnu.org/licenses/gpl-3.0.en.html', badge: 'GPL--3.0'},
    { name: 'Mozilla Public License 2.0', value: 'MPL-2.0', url: 'https://opensource.org/licenses/MPL-2.0', badge: 'MPL--2.0'},
    { name: 'The Unlicense', value: 'unlicense', url: 'http://unlicense.org/', badge: 'unlicense'},
    { name: 'Apache License 2.0', value: 'Apache-2.0', url: 'https://opensource.org/licenses/Apache-2.0', badge:'Apache--2.0'},
];


const init = () => {
  inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: "Write a description of your project?",
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide installation instructions, if none, type N/A.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please describe the steps to use your project:',
        },
        {
              type: 'input',
              name: 'contributor',
              message: 'Please list any contributors for your project:',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your project:',
            choices: licenses,
        },
    ])
    .then((answers) => {
      const selectedLicense = licenses.find((license) => license.value === answers.license);
      let readmeContent = `# ${answers.title}

    ![License: ${selectedLicense.name}](https://img.shields.io/badge/License-${selectedLicense.badge}-yellow.svg)(${selectedLicense.url})

    ## Description

    ${answers.description}

    ## Installation

    ${answers.installation}

    ## Usage

    ${answers.usage}

    ## Contributors

    ${answers.contributor}

    ## License

    This project is licensed under the [${selectedLicense.name}](${selectedLicense.url})

    ${answers.test}`;

    });
};

init();