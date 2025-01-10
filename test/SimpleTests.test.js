const renderer = require("../index")
const exampleCVJSON = require("@jsonresume/schema/sample.resume.json")
const fs = require('node:fs');
const {isHTMLValid} = require("./TestHelpers/HTMLValidate");


const testOutPutPath = `${__dirname}/TestOutput`;


describe("SimpleTests", () => {

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
