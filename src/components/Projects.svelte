<script>
  import { t } from '../utils/helpers.ts';
  import SectionHeader from './SectionHeader.svelte';
  import TimelineItem from './TimelineItem.svelte';

  let { projects = [], language = 'en-gb' } = $props();
</script>

{#if projects?.length}
  <SectionHeader title={t('resume.projects')} count={projects.length}>
    <section id="projects">
      {#each projects as project}
        <TimelineItem
          title={project.name}
          startDate={project.startDate}
          endDate={project.endDate}
          {language}
          summary={project.description}
          highlights={project.highlights}
          keywords={project.keywords}
          location={project.location}
        >
          {#if project.url}
            <span class="website">
              <span class="fa-solid fa-up-right-from-square"></span>
              <a target="_blank" href={project.url}>{project.url}</a>
            </span>
          {/if}
        </TimelineItem>
      {/each}
    </section>
  </SectionHeader>
{/if}
