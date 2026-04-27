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

<style>
  .website {
    display: block;
    margin-top: var(--sp-2);
    font-size: var(--fs-meta);
    line-height: var(--lh-snug);
  }

  .website :global(.fa-up-right-from-square) {
    margin-right: 0.4em;
    color: var(--color-text-secondary);
  }
</style>
