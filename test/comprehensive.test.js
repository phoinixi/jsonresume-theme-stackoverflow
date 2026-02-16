const renderer = require("../dist/index");
const sampleResume = require("@jsonresume/schema/sample.resume.json");

// Helper to render with fresh state
function render(resume, lang = "en-gb") {
  renderer.changeLanguage(lang);
  return renderer.render(resume);
}

describe("Section rendering", () => {
  test("work section renders job positions", () => {
    const html = render({
      basics: { name: "Test" },
      work: [{ name: "Acme", position: "Engineer", startDate: "2020-01-01" }],
    });
    expect(html).toContain("Engineer");
    expect(html).toContain("Acme");
    expect(html).toContain("Work Experience");
  });

  test("education section renders", () => {
    const html = render({
      basics: { name: "Test" },
      education: [{ institution: "MIT", area: "CS", studyType: "BS", startDate: "2015-09-01" }],
    });
    expect(html).toContain("MIT");
    expect(html).toContain("CS");
    expect(html).toContain("Education");
  });

  test("skills section renders", () => {
    const html = render({
      basics: { name: "Test" },
      skills: [{ name: "JavaScript", level: "Advanced", keywords: ["Node.js", "React"] }],
    });
    expect(html).toContain("JavaScript");
    expect(html).toContain("Node.js");
    expect(html).toContain("React");
    expect(html).toContain("Skills");
  });

  test("languages section renders", () => {
    const html = render({
      basics: { name: "Test" },
      languages: [{ language: "English", fluency: "Native" }],
    });
    expect(html).toContain("English");
    expect(html).toContain("Native");
    expect(html).toContain("Languages");
  });

  test("interests section renders", () => {
    const html = render({
      basics: { name: "Test" },
      interests: [{ name: "Music", keywords: ["Guitar"] }],
    });
    expect(html).toContain("Music");
    expect(html).toContain("Guitar");
    expect(html).toContain("Interests");
  });

  test("references section renders", () => {
    const html = render({
      basics: { name: "Test" },
      references: [{ name: "Jane Doe", reference: "Great colleague" }],
    });
    expect(html).toContain("Jane Doe");
    expect(html).toContain("Great colleague");
    expect(html).toContain("References");
  });

  test("projects section renders", () => {
    const html = render({
      basics: { name: "Test" },
      projects: [{ name: "Cool Project", description: "A cool thing", startDate: "2021-01-01" }],
    });
    expect(html).toContain("Cool Project");
    expect(html).toContain("A cool thing");
    expect(html).toContain("Projects");
  });

  test("volunteer section renders", () => {
    const html = render({
      basics: { name: "Test" },
      volunteer: [{ organization: "Red Cross", position: "Helper", startDate: "2019-01-01" }],
    });
    expect(html).toContain("Red Cross");
    expect(html).toContain("Helper");
    expect(html).toContain("Volunteer");
  });

  test("awards section renders", () => {
    const html = render({
      basics: { name: "Test" },
      awards: [{ title: "Best Dev", awarder: "Tech Corp", date: "2022-05-01" }],
    });
    expect(html).toContain("Best Dev");
    expect(html).toContain("Tech Corp");
    expect(html).toContain("Awards");
  });

  test("certificates section renders", () => {
    const html = render({
      basics: { name: "Test" },
      certificates: [{ name: "AWS Cert", issuer: "Amazon", date: "2023-01-01" }],
    });
    expect(html).toContain("AWS Cert");
    expect(html).toContain("Amazon");
    expect(html).toContain("Certificates");
  });

  test("publications section renders", () => {
    const html = render({
      basics: { name: "Test" },
      publications: [{ name: "My Paper", publisher: "IEEE", releaseDate: "2021-06-01", summary: "Research stuff" }],
    });
    expect(html).toContain("My Paper");
    expect(html).toContain("IEEE");
    expect(html).toContain("Publications");
  });
});

describe("Empty/missing sections don't crash", () => {
  test("minimal resume with only name", () => {
    const html = render({ basics: { name: "Test" } });
    expect(html).toContain("Test");
    expect(html).toBeDefined();
  });

  test("empty arrays don't crash", () => {
    const html = render({
      basics: { name: "Test" },
      work: [],
      education: [],
      skills: [],
      languages: [],
      interests: [],
      references: [],
      projects: [],
      volunteer: [],
      awards: [],
      certificates: [],
      publications: [],
    });
    expect(html).toContain("Test");
    // Empty sections should not render headers
    expect(html).not.toContain("Work Experience");
    expect(html).not.toContain("Education");
  });

  test("undefined sections don't crash", () => {
    const html = render({ basics: { name: "Test" } });
    expect(html).toBeDefined();
    expect(html).toContain("Test");
  });

  test("null basics doesn't crash", () => {
    expect(() => render({})).not.toThrow();
  });
});

describe("Dark mode CSS vars", () => {
  test("dark mode variables present in output", () => {
    const html = render({ basics: { name: "Test" } });
    expect(html).toContain("prefers-color-scheme: dark");
    expect(html).toContain("--color-text:");
    expect(html).toContain("--color-background:");
    expect(html).toContain("--color-accent:");
  });
});

describe("i18n translations", () => {
  test("German translations", () => {
    const html = render({
      basics: { name: "Test" },
      skills: [{ name: "JS" }],
      work: [{ name: "Co", position: "Dev", startDate: "2020-01-01" }],
    }, "de");
    expect(html).toContain("Kenntnisse");
    expect(html).toContain("Berufserfahrung");
  });

  test("French translations", () => {
    const html = render({
      basics: { name: "Test" },
      skills: [{ name: "JS" }],
    }, "fr");
    expect(html).toContain("Compétences");
  });

  test("Spanish translations", () => {
    const html = render({
      basics: { name: "Test" },
      education: [{ institution: "Uni", startDate: "2020-01-01" }],
    }, "es");
    expect(html).toContain("Educación");
  });

  test("Italian translations", () => {
    const html = render({
      basics: { name: "Test" },
      languages: [{ language: "Italiano", fluency: "Native" }],
    }, "it");
    expect(html).toContain("Lingue");
  });

  test("Japanese translations", () => {
    const html = render({
      basics: { name: "Test" },
      skills: [{ name: "JS" }],
    }, "ja");
    expect(html).toContain("スキル");
  });
});

describe("Markdown formatting", () => {
  test("bold text rendered", () => {
    const html = render({
      basics: { name: "Test", summary: "I am **very good** at things" },
    });
    expect(html).toContain("<strong>very good</strong>");
  });

  test("italic text rendered", () => {
    const html = render({
      basics: { name: "Test", summary: "I am *somewhat* skilled" },
    });
    expect(html).toContain("<em>somewhat</em>");
  });

  test("links rendered", () => {
    const html = render({
      basics: { name: "Test", summary: "Check [my site](https://example.com) out" },
    });
    expect(html).toContain('href="https://example.com"');
    expect(html).toContain("my site");
  });

  test("HTML is escaped", () => {
    const html = render({
      basics: { name: "Test", summary: "<script>alert('xss')</script>" },
    });
    expect(html).not.toContain("<script>alert");
    expect(html).toContain("&lt;script&gt;");
  });
});

describe("Level normalization", () => {
  test("synonyms map correctly", () => {
    const html = render({
      basics: { name: "Test" },
      skills: [
        { name: "JS", level: "Expert" },
        { name: "CSS", level: "Beginner" },
        { name: "HTML", level: "Intermediate" },
      ],
    });
    expect(html).toContain("master");
    expect(html).toContain("beginner");
    expect(html).toContain("intermediate");
  });

  test("fluency levels in languages", () => {
    const html = render({
      basics: { name: "Test" },
      languages: [
        { language: "English", fluency: "Native speaker" },
        { language: "French", fluency: "Fluent" },
      ],
    });
    expect(html).toContain("master");
    expect(html).toContain("advanced");
  });
});

describe("Theme customization via meta.theme", () => {
  test("custom colors generate CSS overrides", () => {
    const html = render({
      basics: { name: "Test" },
      meta: {
        theme: {
          primaryColor: "#2563eb",
          textColor: "#1e293b",
          backgroundColor: "#ffffff",
        },
      },
    });
    expect(html).toContain("--color-accent: #2563eb");
    expect(html).toContain("--color-text: #1e293b");
    expect(html).toContain("--color-background: #ffffff");
  });

  test("custom font family", () => {
    const html = render({
      basics: { name: "Test" },
      meta: {
        theme: {
          fontFamily: '"Inter", sans-serif',
        },
      },
    });
    expect(html).toContain('--font-family: "Inter", sans-serif');
  });

  test("no overrides when meta.theme is empty", () => {
    const html = render({
      basics: { name: "Test" },
      meta: { theme: {} },
    });
    // Should not have an extra style block for overrides
    const styleCount = (html.match(/<style>/g) || []).length;
    // Exactly one style block (the main CSS)
    expect(styleCount).toBe(1);
  });

  test("no overrides when meta is absent", () => {
    const html = render({ basics: { name: "Test" } });
    const styleCount = (html.match(/<style>/g) || []).length;
    expect(styleCount).toBe(1);
  });
});

describe("Section ordering", () => {
  test("custom section order changes rendering order", () => {
    const html = render({
      basics: { name: "Test" },
      skills: [{ name: "JS" }],
      work: [{ name: "Co", position: "Dev", startDate: "2020-01-01" }],
      education: [{ institution: "MIT", startDate: "2015-01-01" }],
      meta: {
        theme: {
          sectionOrder: ["basics", "education", "work", "skills"],
        },
      },
    });
    // Search only in the body portion
    const body = html.split('<body>')[1];
    const eduIdx = body.indexOf("Education");
    const workIdx = body.indexOf("Work Experience");
    const skillsIdx = body.indexOf(">Skills<");
    expect(eduIdx).toBeLessThan(workIdx);
    expect(workIdx).toBeLessThan(skillsIdx);
  });

  test("default order when sectionOrder not specified", () => {
    const html = render({
      basics: { name: "Test" },
      skills: [{ name: "JS" }],
      work: [{ name: "Co", position: "Dev", startDate: "2020-01-01" }],
    });
    const body = html.split('<body>')[1];
    const skillsIdx = body.indexOf(">Skills<");
    const workIdx = body.indexOf("Work Experience");
    // Default: skills before work
    expect(skillsIdx).toBeLessThan(workIdx);
  });

  test("invalid section names are filtered out", () => {
    const html = render({
      basics: { name: "Test" },
      skills: [{ name: "JS" }],
      meta: {
        theme: {
          sectionOrder: ["basics", "invalid", "skills"],
        },
      },
    });
    expect(html).toContain("Skills");
    expect(html).toContain("Test");
  });
});

describe("Basics section details", () => {
  test("profile links render", () => {
    const html = render({
      basics: {
        name: "Test",
        profiles: [{ network: "GitHub", username: "testuser", url: "https://github.com/testuser" }],
      },
    });
    expect(html).toContain("github.com/testuser");
    expect(html).toContain("fa-github");
  });

  test("contact info renders", () => {
    const html = render({
      basics: {
        name: "Test",
        email: "test@example.com",
        phone: "555-1234",
        website: "https://example.com",
      },
    });
    expect(html).toContain("test@example.com");
    expect(html).toContain("555-1234");
    expect(html).toContain("https://example.com");
  });

  test("location renders", () => {
    const html = render({
      basics: {
        name: "Test",
        location: { city: "Rome", countryCode: "IT" },
      },
    });
    expect(html).toContain("Rome");
    expect(html).toContain("IT");
  });

  test("summary renders with markdown", () => {
    const html = render({
      basics: { name: "Test", summary: "I am **great**" },
    });
    expect(html).toContain("<strong>great</strong>");
    expect(html).toContain("Summary");
  });
});

describe("Full sample resume", () => {
  test("renders without errors", () => {
    const html = render(sampleResume);
    expect(html).toBeDefined();
    expect(html.length).toBeGreaterThan(1000);
  });
});

describe("Work section details", () => {
  test("highlights render in work", () => {
    const html = render({
      basics: { name: "Test" },
      work: [{
        name: "Acme",
        position: "Dev",
        startDate: "2020-01-01",
        endDate: "2021-01-01",
        summary: "Did stuff",
        highlights: ["Built things", "Fixed bugs"],
        url: "https://acme.com",
        location: "Remote",
      }],
    });
    expect(html).toContain("Built things");
    expect(html).toContain("Fixed bugs");
    expect(html).toContain("Did stuff");
    expect(html).toContain("acme.com");
    expect(html).toContain("Remote");
  });

  test("work with location object", () => {
    const html = render({
      basics: { name: "Test" },
      work: [{
        name: "Co",
        position: "Dev",
        startDate: "2020-01-01",
        location: { city: "Berlin", countryCode: "DE", region: "Brandenburg" },
      }],
    });
    expect(html).toContain("Berlin");
    expect(html).toContain("DE");
  });
});

describe("Education details", () => {
  test("courses render", () => {
    const html = render({
      basics: { name: "Test" },
      education: [{
        institution: "MIT",
        area: "CS",
        studyType: "BS",
        startDate: "2015-01-01",
        endDate: "2019-01-01",
        courses: ["Algorithms", "Data Structures"],
        gpa: "3.9",
      }],
    });
    expect(html).toContain("Algorithms");
    expect(html).toContain("Data Structures");
    expect(html).toContain("3.9");
  });
});

describe("Project details", () => {
  test("project with URL and keywords", () => {
    const html = render({
      basics: { name: "Test" },
      projects: [{
        name: "Widget",
        description: "A widget",
        url: "https://widget.io",
        keywords: ["TypeScript", "Svelte"],
        startDate: "2021-01-01",
        highlights: ["Featured on HN"],
      }],
    });
    expect(html).toContain("widget.io");
    expect(html).toContain("TypeScript");
    expect(html).toContain("Featured on HN");
  });
});

describe("Certificate details", () => {
  test("certificate with URL", () => {
    const html = render({
      basics: { name: "Test" },
      certificates: [{
        name: "AWS SA",
        issuer: "Amazon",
        date: "2023-01-01",
        url: "https://cert.aws/123",
      }],
    });
    expect(html).toContain("cert.aws/123");
  });
});

describe("Volunteer details", () => {
  test("volunteer with highlights", () => {
    const html = render({
      basics: { name: "Test" },
      volunteer: [{
        organization: "NGO",
        position: "Lead",
        startDate: "2019-01-01",
        url: "https://ngo.org",
        summary: "Led team",
        highlights: ["Raised funds"],
      }],
    });
    expect(html).toContain("Raised funds");
    expect(html).toContain("Led team");
  });
});

describe("Basics with image", () => {
  test("image renders", () => {
    const html = render({
      basics: {
        name: "Test",
        label: "Developer",
        image: "https://example.com/photo.jpg",
      },
    });
    expect(html).toContain('src="https://example.com/photo.jpg"');
    expect(html).toContain("Developer");
  });
});

describe("Language output", () => {
  test("lang attribute in HTML", () => {
    const html = render({ basics: { name: "Test" } }, "de");
    expect(html).toContain('lang="de"');
  });

  test("lang attribute for en-gb", () => {
    const html = render({ basics: { name: "Test" } }, "en-gb");
    expect(html).toContain('lang="en-gb"');
  });
});

describe("All i18n languages render", () => {
  const langs = ["en-gb", "de", "fr", "es", "it", "pt", "zh", "ja", "ko", "nl", "pl", "ru"];
  for (const lang of langs) {
    test(`${lang} renders without crash`, () => {
      const html = render({
        basics: { name: "Test" },
        skills: [{ name: "JS" }],
        work: [{ name: "Co", position: "Dev", startDate: "2020-01-01" }],
        education: [{ institution: "Uni", startDate: "2015-01-01" }],
        languages: [{ language: "English", fluency: "Native" }],
        interests: [{ name: "Music" }],
        references: [{ name: "Jane", reference: "Good" }],
        awards: [{ title: "Best", date: "2020-01-01" }],
        certificates: [{ name: "Cert", date: "2020-01-01" }],
        publications: [{ name: "Paper", releaseDate: "2020-01-01" }],
        projects: [{ name: "Proj", startDate: "2020-01-01" }],
        volunteer: [{ organization: "Org", position: "Vol", startDate: "2020-01-01" }],
      }, lang);
      expect(html).toBeDefined();
      expect(html.length).toBeGreaterThan(500);
    });
  }
});
