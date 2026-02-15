<script>
  import { paragraphSplit, t } from '../utils/helpers.ts';
  import DateRange from './DateRange.svelte';

  let { volunteer = [], language = 'en-gb' } = $props();
</script>

{#if volunteer?.length}
  <section class="section">
    <header>
      <h2 class="section-title">{t('resume.volunteer')} <span class="item-count">({volunteer.length})</span></h2>
    </header>
    <section id="volunteer">
      {#each volunteer as vol, index}
        <section class="volunteer-item">
          {#if vol.organization}
            {#if vol.summary}
              <label for="volunteer-item-{index}"></label>
            {/if}
            <header class="clear">
              <DateRange startDate={vol.startDate} endDate={vol.endDate} {language} />
              <div class="header-left">
                {#if vol.position}
                  <div class="position">{vol.position}</div>
                {/if}
                <div class="organization">
                  {#if vol.url}
                    <a target="_blank" href={vol.url}>{vol.organization}</a>
                  {:else if vol.website}
                    <a target="_blank" href={vol.website}>{vol.organization}</a>
                  {:else}
                    {vol.organization}
                  {/if}
                </div>
              </div>
            </header>
          {/if}
          {#if vol.location}
            <span class="location">
              <span class="fa-solid fa-location-dot"></span>
              {#if vol.location.city}
                <span class="city">{vol.location.city},</span>
              {/if}
              {#if vol.location.countryCode}
                <span class="countryCode">({vol.location.countryCode})</span>
              {/if}
              {#if vol.location.region}
                <span class="region">{vol.location.region}</span>
              {/if}
            </span>
          {/if}
          {#if vol.keywords?.length}
            <ul class="keywords">
              {#each vol.keywords as keyword}
                <li>{keyword}</li>
              {/each}
            </ul>
          {/if}
          <div class="item">
            {#if vol.summary}
              <div class="summary">{@html paragraphSplit(vol.summary)}</div>
            {/if}
            {#if vol.highlights?.length}
              <ul class="highlights">
                {#each vol.highlights as highlight}
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
