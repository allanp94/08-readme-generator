// TODO: Create an array of questions for user input
const questions = [
  "What is the title of the project (Required)?: ",
  "Enter a description for the project: ",
  "Enter instalation instructions for the project: ",
  "Enter usage information for the project: ",
  "Enter contributing guidelines for the project: ",
  "Enter test instructions for the project: ",
  "Enter your GitHub username: ",
  "Enter your email address: ",
  "Choose a license for your project",
];

inquirerUserPrompt = [
  {
    type: "input",
    name: "title",
    message: questions[0],
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter the title of your Project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: questions[1],
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Please enter a description for the project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "instalation",
    message: questions[2],
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Please enter instalation instructions for the project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: questions[3],
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Please enter usage information for the project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "contributing",
    message: questions[4],
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Please enter contributing guidelines for the project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "tests",
    message: questions[5],
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Please enter test instructions for the project!");
        return false;
      }
    },
  },
  {
    type: "checkbox",
    name: "license",
    message: questions[8],
    choices: ["GNUGPLv3", "Apache-2.0", "MIT"],
  },
  {
    type: "input",
    name: "gitHub",
    message: questions[6],
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Please enter your GitHub username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: questions[7],
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Please enter your email address!");
        return false;
      }
    },
  },
];

module.exports = inquirerUserPrompt;
