const renderer = require("../index")
const exampleCVJSON = require("@jsonresume/schema/sample.resume.json")
const fs = require('node:fs');
const HtmlValidate = require("html-validate");


const testOutPutPath = `${__dirname}/TestOutput`;

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

describe("SimpleTests",  () => {

  var result;

  beforeEach(() => {
    result = renderer.render(exampleCVJSON);
    fs.writeFileSync(`${testOutPutPath}/SimpleTests->RenderFunction.html`, result);
  });

  test("Does the render function work for example CV.json?", async () => {
    expect(result).toBeDefined();
    expect(result.length).toBeGreaterThan(0);
  });

  test("Is the rendered HTML valid?", async () => {
    expect(await isHTMLValid(result)).toBe(true);
  });

  /**
   * This test will fail as soon as you changed the HTML-Output of the render function.
   * If this change was intentional, you need to update the snapshot by typing the "jest --updateSnapshot" command
   * in the terminal or using "npm run updateTestSnapshots" script, see package.json. */
  test("If current rendered HTML has changed from previous taken snapshot", () => {
      expect(result).toMatchSnapshot();
  });
});
