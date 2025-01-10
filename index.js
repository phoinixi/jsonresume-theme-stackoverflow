const Handlebars = require('handlebars');
const i18next = require("i18next");
const registerI18nHelper = require('handlebars-i18next').default;

const {readFileSync, readdirSync} = require('fs');
const {join} = require('path');

const HELPERS = join(__dirname, 'theme/hbs-helpers');

const { birthDate } = require(join(HELPERS, 'birth-date.js'));
const { dateHelpers } = require(join(HELPERS, 'date-helpers.js'));
const { paragraphSplit } = require(join(HELPERS, 'paragraph-split.js'));
const { toLowerCase } = require(join(HELPERS, 'to-lower-case.js'));
const { spaceToDash } = require(join(HELPERS, 'space-to-dash.js'));

const { MY, Y, DMY } = dateHelpers;

i18next.init({
  lng: 'en', // if you're using a language detector, do not define the lng option
  debug: true,
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
        resume: {
          skills: "Skills",
          workExperience: "Work Experience",
          projects: "Projects",
          volunteer: "Volunteer",
          education: "Education",
          languages: "Languages",
          awards: "Awards",
          certificates: "Certificates",
          publications: "Publications",
          interests: "Interests",
          references: "References",
        }
      }
    },

    de: {
      translation: {
        resume: {
          skills: "Kenntnisse",
          workExperience: "Berufserfahrung",
          projects: "Projekte",
          volunteer: "Ehrenamtliche Tätigkeiten",
          education: "Bildung",
          languages: "Sprachkenntnisse",
          awards: "Auszeichnungen",
          certificates: "Zertifikate",
          publications: "Veröffentlichungen",
          interests: "Interessen",
          references: "Empfehlungen",
        }
      }
    }
  }
});

registerI18nHelper(Handlebars, i18next);

Handlebars.registerHelper('birthDate', birthDate);
Handlebars.registerHelper('MY', MY);  // Date: Month year eg. "Jul 2020"
Handlebars.registerHelper('Y', Y);  // Date: Year eg. "2020"
Handlebars.registerHelper('DMY', DMY);
Handlebars.registerHelper('paragraphSplit', paragraphSplit);
Handlebars.registerHelper('toLowerCase', toLowerCase);
Handlebars.registerHelper('spaceToDash', spaceToDash);

/**
 * Calls this before the render to adjust the language.
 * @param language supported values are "en" for english (default) and "de" for german
 */
function changeLanguage(language) {
  i18next.changeLanguage(language);
}

function render(resume) {
  const css = readFileSync(`${__dirname}/style.css`, 'utf-8');
  const template = readFileSync(`${__dirname}/resume.hbs`, 'utf-8');
  const partialsDir = join(__dirname, 'theme/partials');
  const filenamePartial = readdirSync(partialsDir);

  filenamePartial.forEach((filenamePartial) => {
    const matches = /^([^.]+).hbs$/.exec(filenamePartial);
    if (!matches) return;
    const name = matches[1];
    const filepath = join(partialsDir, filenamePartial);
    const template = readFileSync(filepath, 'utf8');
    Handlebars.registerPartial(name, template);
  });

  return Handlebars.compile(template)({
    css,
    resume,
  });
}

const marginValue = '0.8 cm';
const pdfRenderOptions = {
  margin: {
    top: marginValue,
    bottom: marginValue,
    left: marginValue,
    right: marginValue,
  }
}

module.exports = {render, pdfRenderOptions, changeLanguage};
