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

  const defaultOrder = [
    'basics', 'skills', 'work', 'projects', 'volunteer',
    'education', 'awards', 'certificates', 'publications',
    'languages', 'interests', 'references'
  ];

  const customOrder = resume.meta?.theme?.sectionOrder;
  const sectionOrder = Array.isArray(customOrder) && customOrder.length > 0
    ? customOrder.filter(s => defaultOrder.includes(s))
    : defaultOrder;
</script>

<a class="skip-to-content" href="#resume">Skip to content</a>
<main id="resume" class="resume">
  {#each sectionOrder as section}
    {#if section === 'basics'}
      <Basics basics={resume.basics} />
    {:else if section === 'skills'}
      <Skills skills={resume.skills} />
    {:else if section === 'work'}
      <Work work={resume.work} {language} />
    {:else if section === 'projects'}
      <Projects projects={resume.projects} {language} />
    {:else if section === 'volunteer'}
      <Volunteer volunteer={resume.volunteer} {language} />
    {:else if section === 'education'}
      <Education education={resume.education} {language} />
    {:else if section === 'awards'}
      <Awards awards={resume.awards} {language} />
    {:else if section === 'certificates'}
      <Certificates certificates={resume.certificates} {language} />
    {:else if section === 'publications'}
      <Publications publications={resume.publications} {language} />
    {:else if section === 'languages'}
      <Languages languages={resume.languages} />
    {:else if section === 'interests'}
      <Interests interests={resume.interests} />
    {:else if section === 'references'}
      <References references={resume.references} />
    {/if}
  {/each}
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
