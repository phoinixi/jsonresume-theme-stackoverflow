<script>
  import { t } from '../utils/helpers.ts';
  import SectionHeader from './SectionHeader.svelte';
  import TimelineItem from './TimelineItem.svelte';

  let { work = [], language = 'en-gb' } = $props();
</script>

{#if work?.length}
  <SectionHeader title={t('resume.workExperience')} count={work.length}>
    <section id="work">
      {#each work as job}
        <TimelineItem
          title={job.position}
          subtitle={job.name}
          subtitleClass="company"
          url={job.url || job.website}
          startDate={job.startDate}
          endDate={job.endDate}
          {language}
          summary={job.summary}
          highlights={job.highlights}
          keywords={job.keywords}
          location={job.location}
        />
      {/each}
    </section>
  </SectionHeader>
{/if}
