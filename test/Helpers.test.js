const { paragraphSplit } = require('../theme/hbs-helpers/paragraph-split.js');
const { isHTMLValid } = require("./TestHelpers/HTMLValidate");
const { getDateHelpers } = require("../theme/hbs-helpers/date-helpers");
const { birthDate } = require("../theme/hbs-helpers/birth-date");


describe("Test Helpers in theme/hbs-helpers", () => {

  describe('Test date-helpers.js', () => {

    const date = "2013-12-01";

    test("English date helpers", () => {
      const dateHelpers = getDateHelpers("en-gb");
      const birth = {
        "place": "New York",
        "state": "USA",
        "date": "1988"
      };


      expect(dateHelpers.MY(date)).toBe("Dec 2013");
      expect(dateHelpers.Y(date)).toBe("2013");
      expect(dateHelpers.DMY(date)).toBe("1 Dec 2013");

      expect(birthDate(birth).toString()).toBe("<div> Born in New York, USA in 1/1/1988</div>");
    });

    test("German date helpers", () => {
      const dateHelpers = getDateHelpers("de");
      expect(dateHelpers.MY(date)).toBe("Dez. 2013");
      expect(dateHelpers.Y(date)).toBe("2013");
      expect(dateHelpers.DMY(date)).toBe("1. Dez. 2013");
    });
  });
});
