const renderer = require("../index")
const exampleCVJSON = require("@jsonresume/schema/sample.resume.json")
const fs = require('node:fs');
const {isHTMLValid} = require("./TestHelpers/HTMLValidate");


function writeToTestOutput(result, filename) {
  const testOutPutPath = `${__dirname}/TestOutput`;
  fs.writeFileSync(`${testOutPutPath}/${filename}`, result);
}

describe("SimpleTests", () => {

  var result;

  beforeEach(() => {
    result = renderer.render(exampleCVJSON);
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
  test("Snapshot-test english translation", () => {
    const testName = expect.getState().currentTestName;
    renderer.changeLanguage("en-gb");
    result = renderer.render(exampleCVJSON);
    writeToTestOutput(result, `${testName.replaceAll(" ", "_")}.html`);
      expect(result).toMatchSnapshot();
  });

  test("Snapshot-test german translation", () => {
    const testName = expect.getState().currentTestName;
    renderer.changeLanguage("de");
    result = renderer.render(exampleCVJSON);
    writeToTestOutput(result, `${testName.replaceAll(" ", "_")}.html`);
    expect(result).toMatchSnapshot();
  });
});
