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
<main id="resume" class="resume">
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
  .resume {
    padding: 1.5rem;
  }

  @media print {
    .resume {
      margin: 0.1em;
      padding: 0.1em;
      -ms-word-wrap: break-word;
      word-wrap: break-word;
      line-height: 1.25;
    }
  }

  @media screen and (max-width: 601px) {
    .resume { width: 100%; padding: 1rem; box-sizing: border-box; }
  }

  @media screen and (min-width: 602px) {
    .resume { width: 80%; margin: 0 auto; }
  }

  @media screen and (min-width: 1025px) {
    .resume { width: 820px; margin: 2rem auto; }
  }
</style>
