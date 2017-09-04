[![Build Status](https://travis-ci.org/Humakt83/portfolier.svg?branch=master)](https://travis-ci.org/Humakt83/portfolier)

# Portfolier

Web template for dynamically creating your own Curriculum Vitae and/or portfolio page simply by editing some json-files.

Example: http://humakt83.github.io/portfolier/example/#/home

### Usage

If the default styles are satisfactory for you, you can basically just take the example folder and replace json and image files therein and then place them in your server. Removing portfolio.json or any cv-related json files (skills.json, education.json, experience.json) will also remove them from menu options (application checks whether they exist in order to show menu items).

* skills.json contains your Curriculum Vitae skills
* education.json contains your schools, courses and certification data for Curriculum Vitae
* experience.json contains your work experience for Curriculu Vitae
* portfolio.json contains information about the projects you have done
* home.json contains information shown on homepage, this file should not be removed even though most of the data is not mandatory

### Running

To install the application execute `npm install`

To run the application execute `npm start`

To make a production build of application to dist folder execute `npm run prodbuild`
