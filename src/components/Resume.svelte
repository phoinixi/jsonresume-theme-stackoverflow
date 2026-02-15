<script>
  import Basics from './Basics.svelte';
  import Skills from './Skills.svelte';
  import Work from './Work.svelte';
  import Projects from './Projects.svelte';
  import Volunteer from './Volunteer.svelte';
  import Education from './Education.svelte';
  import Awards from './Awards.svelte';
  import Certificates from './Certificates.svelte';
  import Publications from './Publications.svelte';
  import Languages from './Languages.svelte';
  import Interests from './Interests.svelte';
  import References from './References.svelte';

  let { resume, language = 'en-gb' } = $props();
</script>

<a class="skip-to-content" href="#resume">Skip to content</a>
<main id="resume">
  <Basics basics={resume.basics} />
  <Skills skills={resume.skills} />
  <Work work={resume.work} {language} />
  <Projects projects={resume.projects} {language} />
  <Volunteer volunteer={resume.volunteer} {language} />
  <Education education={resume.education} {language} />
  <Awards awards={resume.awards} {language} />
  <Certificates certificates={resume.certificates} {language} />
  <Publications publications={resume.publications} {language} />
  <Languages languages={resume.languages} />
  <Interests interests={resume.interests} />
  <References references={resume.references} />
</main>

<style>
  /* Main container */
  #resume {
    padding: 1.5rem;
  }

  /* Every section wrapper */
  :global(.section) {
    margin-bottom: 1rem;
  }

  :global(section .location) {
    margin-right: 0.5em;
    color: var(--color-text-secondary);
    font-weight: 700;
  }

  :global(.section.summary header) {
    margin-top: 1rem;
  }

  :global(.main-summary) {
    background: var(--color-background-alt);
    padding: 1.2em 1em;
  }

  :global(.main-summary p) {
    margin: 0;
  }

  :global(.section-title) {
    display: inline-block;
    background: var(--color-section-title-bg);
    padding: 0 1em 0.3em 0;
    color: var(--color-accent);
    text-transform: uppercase;
    font-weight: 600;
    border: none;
    font-size: 0.9rem;
  }

  :global(.section > header) {
    position: relative;
  }

  :global(.section > header::after) {
    position: absolute;
    left: 0;
    top: 0.7em;
    height: 1px;
    background: var(--color-border);
    content: "";
    width: 100%;
    z-index: -100;
    display: block;
  }

  :global(.section.main-summary > section) {
    margin: 0;
  }

  :global(.section > section > header) {
    font-size: 1.38rem;
    position: relative;
    margin-top: 0.7em;
  }

  :global(.section > section > header:first-of-type) {
    margin: 0;
  }

  :global(.section > section > header .space-left) {
    position: absolute;
    left: -1.56rem;
    top: 5px;
    color: #aaa;
    line-height: 1;
    opacity: 0;
  }

  :global(.section > section > section) {
    margin-bottom: 1rem;
  }

  :global(.item) {
    overflow: hidden;
  }

  :global(.keywords),
  :global(.courses) {
    margin: 0.5em 0;
  }

  :global(.keywords li),
  :global(.courses li) {
    display: inline-block;
    margin: 2px 2px 2px 0;
    padding: 4px 5px 5px;
    font-size: 0.9rem;
    line-height: 1;
    color: var(--color-keyword-text);
    background-color: var(--color-keyword-bg);
    border: 0 solid var(--color-keyword-border);
    white-space: nowrap;
  }

  :global(.keywords li:hover),
  :global(.courses li:hover) {
    background: var(--color-keyword-bg);
  }

  :global(.highlights > li > p) {
    margin-bottom: 0.5em;
  }

  :global(.clear::after) {
    content: "";
    display: table;
    clear: both;
  }

  :global(.display) {
    display: block;
    opacity: 1 !important;
  }

  /* Timeline shared styles */
  :global(.position),
  :global(.company),
  :global(.organization),
  :global(.institution),
  :global(.date),
  :global(.area),
  :global(.studyType),
  :global(.title),
  :global(.awarder) {
    display: inline;
  }

  :global(.position),
  :global(.studyType),
  :global(.area),
  :global(.title),
  :global(.language),
  :global(.name) {
    font-weight: 600;
  }

  :global(.company::before),
  :global(.institution::before),
  :global(.organization::before),
  :global(.awarder::before) {
    content: "at ";
  }

  :global(.company),
  :global(.institution),
  :global(.organization),
  :global(.awarder) {
    color: var(--color-text-secondary);
    font-weight: 400;
  }

  :global(.section header .date) {
    display: block;
    font-size: 1rem;
    padding: 0.1em 0;
    color: var(--color-text-secondary);
    font-weight: 400;
  }

  :global(.gpa) {
    clear: both;
    padding-bottom: 0.5em;
  }
</style>
