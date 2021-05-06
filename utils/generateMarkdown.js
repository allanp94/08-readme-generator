// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    license = license
      .map(
        (lic) =>
          `![GitHub](https://img.shields.io/github/license/allanp94/08-readme-generator?color=green&label=${lic})`
      )
      .join(" ");

    return license;
  }
}

// ![GitHub](https://img.shields.io/github/license/allanp94/08-readme-generator?color=green&label=Apache&logo=Apache&logoColor=blue)

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    // IF THE USER SELECTED A LICENSE THEN THAT FILE IS SELECTED TO BE DISPLAYED TO THE USER

    license = license.map((lic) => {
      // choices: ["GNUGPLv3", "Apache-2.0", "MIT"],
      let lic1;
      switch (lic) {
        case "GNUGPLv3":
          lic1 = "gpl-3.0";
          break;
        case "MIT":
          lic1 = "mit";
          break;
        case "Apache-2.0":
          lic1 = "apache-2.0";
          break;
        default:
          break;
      }
      return `\n* [${lic}](https://choosealicense.com/licenses/${lic1}/)`;
    });

    return license;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // let contributing = data.contributing;
  // contributing = contributing.join(", ");

  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ---

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Questions](#questions)
  
  ---

  ## Installation

  ${data.instalation}

  ---

  ## Usage

  ${data.usage}

  ---

  ## License

  ${renderLicenseSection(data.license)}

--- 

## Contributing

  * ${data.contributing}

---

## Tests

${data.tests}

---

## Questions

Github Name: ${data.github}
(https://www.github.com/${data.github})

Please contact me with any questions/opportunities at my email listed below. 
Email: ${data.email}

`;
}

module.exports = generateMarkdown;
