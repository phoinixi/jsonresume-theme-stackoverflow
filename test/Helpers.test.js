const { isHTMLValid } = require("./TestHelpers/HTMLValidate");

// We test the date helpers through the main module's internal date formatting
// Since the Svelte migration inlined date helpers, we test the output via rendering

describe("Test Helpers", () => {

  describe('Test date formatting', () => {

    test("English date rendering", () => {
      const renderer = require("../dist/index");
      renderer.changeLanguage("en-gb");
      const resume = {
        basics: { name: "Test" },
        work: [{
          name: "Company",
          position: "Dev",
          startDate: "2013-12-01",
          endDate: "2014-06-01",
        }],
      };
      const html = renderer.render(resume);
      expect(html).toContain("Dec 2013");
      expect(html).toContain("Jun 2014");
    });

    test("German date rendering", () => {
      const renderer = require("../dist/index");
      renderer.changeLanguage("de");
      const resume = {
        basics: { name: "Test" },
        work: [{
          name: "Firma",
          position: "Entwickler",
          startDate: "2013-12-01",
          endDate: "2014-06-01",
        }],
      };
      const html = renderer.render(resume);
      expect(html).toContain("Dez. 2013");
      expect(html).toContain("Juni 2014");
      // Reset to english
      renderer.changeLanguage("en-gb");
    });
  });
});
