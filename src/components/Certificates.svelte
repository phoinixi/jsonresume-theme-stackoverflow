<script>
  import { t } from '../utils/helpers.ts';
  import { formatDate } from '../utils/date-helpers.ts';
  import SectionHeader from './SectionHeader.svelte';
  import TimelineItem from './TimelineItem.svelte';

  let { certificates = [], language = 'en-gb' } = $props();
</script>

{#if certificates?.length}
  <SectionHeader title={t('resume.certificates')} count={certificates.length}>
    <section id="certificates">
      {#each certificates as cert}
        <TimelineItem
          title={cert.name}
          subtitle={cert.issuer}
          subtitleClass="issuer"
          singleDate={cert.date ? formatDate(cert.date, language) : undefined}
          {language}
        >
          {#if cert.url}
            <span class="url">
              <span class="fa-solid fa-up-right-from-square"></span>
              <a target="_blank" href={cert.url}>{cert.url}</a>
            </span>
          {/if}
        </TimelineItem>
      {/each}
    </section>
  </SectionHeader>
{/if}
