<script>
  import { t } from '../utils/helpers.ts';
  import SectionHeader from './SectionHeader.svelte';
  import TimelineItem from './TimelineItem.svelte';
  import KeywordList from './KeywordList.svelte';

  let { education = [], language = 'en-gb' } = $props();
</script>

{#if education?.length}
  <SectionHeader title={t('resume.education')} count={education.length}>
    <section id="education">
      {#each education as edu}
        <TimelineItem
          title={[edu.studyType, edu.area].filter(Boolean).join(' ')}
          subtitle={edu.institution}
          subtitleClass="institution"
          url={edu.url}
          startDate={edu.startDate}
          endDate={edu.endDate}
          {language}
          summary={edu.summary}
          location={edu.location}
        >
          {#if edu.courses?.length}
            <KeywordList keywords={edu.courses} cssClass="courses" />
          {/if}
          {#if edu.gpa}
            <div class="gpa">
              <strong> Grade:</strong> <span>{edu.gpa}</span>
            </div>
          {/if}
        </TimelineItem>
      {/each}
    </section>
  </SectionHeader>
{/if}

<style>
  .gpa {
    clear: both;
    padding-bottom: 0.5em;
  }
</style>
