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

<div id="resume">
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
</div>
