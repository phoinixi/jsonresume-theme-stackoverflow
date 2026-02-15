const HtmlValidate = require("html-validate");

const isHTMLValid = async (html, logResults = true) => {
  const htmlvalidate = new HtmlValidate.HtmlValidate({
    extends: ["html-validate:recommended"],
    rules: {
      "doctype-style": "off",
      "attr-quotes": "off",
      "no-trailing-whitespace": "off",
      "void-style": "warn",
    },
  });

  // See https://html-validate.org/guide/api/getting-started.html
  const validationReport = await htmlvalidate.validateString(html);

  if (logResults) {
    validationReport.results.forEach(console.log);
  }

  return validationReport.valid;
}

module.exports = { isHTMLValid };
