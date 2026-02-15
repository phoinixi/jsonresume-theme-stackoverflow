<script>
  import { t } from '../utils/helpers.ts';
  import { getDateHelpers } from '../utils/date-helpers.ts';
  import SectionHeader from './SectionHeader.svelte';
  import TimelineItem from './TimelineItem.svelte';

  let { awards = [], language = 'en-gb' } = $props();

  const { MY } = getDateHelpers(language);
</script>

{#if awards?.length}
  <SectionHeader title={t('resume.awards')} count={awards.length}>
    <section id="awards">
      {#each awards as award}
        <TimelineItem
          title={award.title}
          subtitle={award.awarder}
          subtitleClass="awarder"
          singleDate={award.date ? MY(award.date) : undefined}
          {language}
          summary={award.summary}
        />
      {/each}
    </section>
  </SectionHeader>
{/if}
