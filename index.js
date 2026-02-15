const Handlebars = require('handlebars');
const i18next = require("i18next");
const registerI18nHelper = require('handlebars-i18next').default;

const {readFileSync, readdirSync} = require('fs');
const {join} = require('path');

const HELPERS = join(__dirname, 'theme/hbs-helpers');

const { birthDate } = require(join(HELPERS, 'birth-date.js'));
const { dateHelpers, setLanguage } = require(join(HELPERS, 'date-helpers.js'));
const { paragraphSplit } = require(join(HELPERS, 'paragraph-split.js'));
const { toLowerCase } = require(join(HELPERS, 'to-lower-case.js'));
const { spaceToDash } = require(join(HELPERS, 'space-to-dash.js'));
const {getDateHelpers} = require("./theme/hbs-helpers/date-helpers");



var language = "en-gb";

i18next.init({
  lng: 'en', // if you're using a language detector, do not define the lng option
  debug: true,
  fallbackLng: 'en',
  resources: {
    en: {   // Should be british english
      translation: {
        resume: {
          summary: "Summary",
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
          summary: "Übersicht",
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


/**
 * Calls this before the render to adjust the language.
 * @param languageTemporaryVar supported values are "en-gb" for english (default) and "de" for german
 */
function changeLanguage(languageTemporaryVar) {
  let i18NextLanguage = languageTemporaryVar;
  switch (languageTemporaryVar) {
    case "en-gb":
      i18NextLanguage = "en";
      break;
  }
  i18next.changeLanguage(i18NextLanguage);
  language = languageTemporaryVar;
}

function registerDateHelpers(language) {
  const { MY, Y, DMY } = getDateHelpers(language);
  Handlebars.registerHelper('MY', MY);
  Handlebars.registerHelper('Y', Y);
  Handlebars.registerHelper('DMY', DMY);
}


Handlebars.registerHelper('birthDate', birthDate);
Handlebars.registerHelper('paragraphSplit', paragraphSplit);
Handlebars.registerHelper('toLowerCase', toLowerCase);
Handlebars.registerHelper('spaceToDash', spaceToDash);


function render(resume) {
  registerDateHelpers(language);
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
