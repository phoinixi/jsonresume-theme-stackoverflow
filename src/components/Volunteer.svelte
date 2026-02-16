<script>
  import { t } from '../utils/helpers.ts';
  import SectionHeader from './SectionHeader.svelte';
  import TimelineItem from './TimelineItem.svelte';

  let { volunteer = [], language = 'en-gb' } = $props();
</script>

{#if volunteer?.length}
  <SectionHeader title={t('resume.volunteer')} count={volunteer.length}>
    <section id="volunteer">
      {#each volunteer as vol}
        <TimelineItem
          title={vol.position}
          subtitle={vol.organization}
          subtitleClass="organization"
          url={vol.url || vol.website}
          startDate={vol.startDate}
          endDate={vol.endDate}
          {language}
          summary={vol.summary}
          highlights={vol.highlights}
          keywords={vol.keywords}
          location={vol.location}
        />
      {/each}
    </section>
  </SectionHeader>
{/if}
