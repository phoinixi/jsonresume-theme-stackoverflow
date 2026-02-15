<script>
  import { paragraphSplit, t } from '../utils/helpers.ts';
  import DateRange from './DateRange.svelte';

  let { work = [], language = 'en-gb' } = $props();
</script>

{#if work?.length}
  <section class="section">
    <header>
      <h2 class="section-title">{t('resume.workExperience')} <span class="item-count">({work.length})</span></h2>
    </header>
    <section id="work">
      {#each work as job, index}
        <section class="work-item">
          {#if job.summary}
            <label for="work-item-{index}"></label>
          {/if}
          <header class="clear">
            <DateRange startDate={job.startDate} endDate={job.endDate} {language} />
            {#if job.position}
              <div class="position">{job.position}</div>
            {/if}
            {#if job.url}
              <span class="company">
                <a target="_blank" href={job.url}>{job.name}</a>
              </span>
            {:else if job.website}
              <span class="company">
                <a target="_blank" href={job.website}>{job.name}</a>
              </span>
            {:else}
              <div class="company">{job.name}</div>
            {/if}
          </header>
          {#if job.location}
            <span class="location">
              <span class="fa-solid fa-location-dot"></span>
              {job.location}
            </span>
          {/if}
          {#if job.keywords?.length}
            <ul class="keywords">
              {#each job.keywords as keyword}
                <li>{keyword}</li>
              {/each}
            </ul>
          {/if}
          <div class="item" id="work-item">
            {#if job.summary}
              <div class="summary">{@html paragraphSplit(job.summary)}</div>
            {/if}
            {#if job.highlights?.length}
              <ul class="highlights">
                {#each job.highlights as highlight}
                  <li>{@html paragraphSplit(highlight)}</li>
                {/each}
              </ul>
            {/if}
          </div>
        </section>
      {/each}
    </section>
  </section>
{/if}
