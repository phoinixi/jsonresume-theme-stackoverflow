<script>
  import { t } from '../utils/helpers.ts';
  import { getDateHelpers } from '../utils/date-helpers.ts';
  import SectionHeader from './SectionHeader.svelte';
  import TimelineItem from './TimelineItem.svelte';
  import KeywordList from './KeywordList.svelte';

  let { publications = [], language = 'en-gb' } = $props();

  const { MY } = getDateHelpers(language);
</script>

{#if publications?.length}
  <SectionHeader title={t('resume.publications')} count={publications.length}>
    <section id="publications">
      {#each publications as pub}
        <TimelineItem
          title={pub.name}
          subtitle={pub.publisher ? 'in ' + pub.publisher : ''}
          subtitleClass="publisher"
          url={pub.website}
          singleDate={pub.releaseDate ? MY(pub.releaseDate) : undefined}
          {language}
          summary={pub.summary}
          keywords={pub.keywords}
        />
      {/each}
    </section>
  </SectionHeader>
{/if}
