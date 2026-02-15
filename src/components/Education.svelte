<script>
  import { paragraphSplit, t } from '../utils/helpers.ts';
  import DateRange from './DateRange.svelte';

  let { education = [], language = 'en-gb' } = $props();
</script>

{#if education?.length}
  <section class="section">
    <header>
      <h2 class="section-title">{t('resume.education')} <span class="item-count">({education.length})</span></h2>
    </header>
    <section id="education">
      {#each education as edu, index}
        <section class="education-item">
          {#if edu.summary}
            <label for="education-item-{index}"></label>
          {/if}
          <header class="clear">
            <DateRange startDate={edu.startDate} endDate={edu.endDate} {language} />
            <div class="header-left">
              {#if edu.studyType}
                <div class="studyType">{edu.studyType}</div>
              {/if}
              {#if edu.area}
                <div class="area">{edu.area}</div>
              {/if}
              {#if edu.institution}
                <div class="institution">
                  {#if edu.url}
                    <a target="_blank" href={edu.url}>{edu.institution}</a>
                  {:else}
                    {edu.institution}
                  {/if}
                </div>
              {/if}
            </div>
          </header>

          {#if edu.location}
            <span class="location">
              <span class="fa-solid fa-location-dot"></span>
              {#if edu.location.city}
                <span class="city">{edu.location.city}</span>
              {/if}
              {#if edu.location.countryCode}
                <span class="countryCode">({edu.location.countryCode})</span>
              {/if}
              {#if edu.location.region}
                <span class="region">{edu.location.region}</span>
              {/if}
            </span>
          {/if}

          {#if edu.courses?.length}
            <ul class="courses">
              {#each edu.courses as course}
                <li>{course}</li>
              {/each}
            </ul>
          {/if}

          <div class="item">
            {#if edu.gpa}
              <div class="gpa">
                <strong> Grade:</strong> <span>{edu.gpa}</span>
              </div>
            {/if}
            {#if edu.summary}
              <div class="summary">{@html paragraphSplit(edu.summary)}</div>
            {/if}
          </div>
        </section>
      {/each}
    </section>
  </section>
{/if}
