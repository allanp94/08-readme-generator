// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //   ${
  //     projectsArr
  //   .filter(({ feature }) => feature)
  //   .map(({ name, description, languages, link }) => {
  //     return `
  //     <div class="col-12 mb-2 bg-dark text-light p-3">
  //       <h3 class="portfolio-item-title text-light">${name}</h3>
  //       <h5 class="portfolio-languages">
  //         Built With:
  //         ${languages.join(", ")}
  //       </h5>
  //       <p>${description}</p>
  //       <a href="${link}" class="btn"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
  //     </div>
  //   `;
  //   })
  //   .join("")
  // }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let contributing = data.contributing;
  contributing = contributing.split(" ");

  return `
  # ${data.name}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License]](#license)
  * [Questions](#questions)

  ## Installation

  ${data.instalation}

  ## Usage

  ${data.usage}

  ## License

  ${renderLicenseSection}

  ## Contributing

    * ${contributing}

  ## Tests

  ${data.tests}

  ## Questions

  Github Name: ${data.github}
  (https://www.github.com/${data.github})

  Email: ${data.email}

`;
}

module.exports = generateMarkdown;
