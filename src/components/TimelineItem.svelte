<script>
  import FormattedText from './FormattedText.svelte';
  import DateRange from './DateRange.svelte';
  import KeywordList from './KeywordList.svelte';

  let {
    title = '',
    subtitle = '',
    subtitleClass = 'company',
    url = '',
    startDate = undefined,
    endDate = undefined,
    singleDate = undefined,
    language = 'en-gb',
    summary = '',
    highlights = [],
    keywords = [],
    location = undefined,
    children = undefined,
  } = $props();
</script>

<section class="timeline-item">
  <header class="clear">
    {#if startDate}
      <DateRange {startDate} {endDate} {language} />
    {:else if singleDate}
      <div class="date">{singleDate}</div>
    {/if}
    <div class="header-left">
      {#if title}
        <div class="position">{title}</div>
      {/if}
      {#if subtitle}
        <div class={subtitleClass}>
          {#if url}
            <a target="_blank" href={url}>{subtitle}</a>
          {:else}
            {subtitle}
          {/if}
        </div>
      {/if}
    </div>
  </header>

  {#if location}
    <span class="location">
      <span class="fa-solid fa-location-dot"></span>
      {#if typeof location === 'string'}
        {location}
      {:else}
        {#if location.city}
          <span class="city">{location.city}</span>
        {/if}
        {#if location.countryCode}
          <span class="countryCode">({location.countryCode})</span>
        {/if}
        {#if location.region}
          <span class="region">{location.region}</span>
        {/if}
      {/if}
    </span>
  {/if}

  <KeywordList {keywords} />

  {#if children}
    {@render children()}
  {/if}

  <div class="item">
    {#if summary}
      <div class="summary">
        <FormattedText text={summary} />
      </div>
    {/if}
    {#if highlights?.length}
      <ul class="highlights">
        {#each highlights as highlight}
          <li><FormattedText text={highlight} /></li>
        {/each}
      </ul>
    {/if}
  </div>
</section>

<style>
  .timeline-item {
    margin-top: 0.7em;
  }

  .timeline-item:first-of-type {
    margin-top: 0;
  }

  .position,
  .company,
  .organization,
  .institution,
  .date,
  .area,
  .studyType,
  .title,
  .awarder,
  .publisher,
  .issuer {
    display: inline;
  }

  .position,
  .studyType,
  .area,
  .title {
    font-weight: 600;
  }

  .company::before,
  .institution::before,
  .organization::before,
  .awarder::before {
    content: "at ";
  }

  .company,
  .institution,
  .organization,
  .awarder {
    color: var(--color-text-secondary);
    font-weight: 400;
  }

  header .date {
    display: block;
    font-size: 1rem;
    padding: 0.1em 0;
    color: var(--color-text-secondary);
    font-weight: 400;
  }

  .item {
    overflow: hidden;
  }

  /* p margin handled via inline styles in paragraphSplit */

  .clear::after {
    content: "";
    display: table;
    clear: both;
  }

  .location {
    margin-right: 0.5em;
    color: var(--color-text-secondary);
    font-weight: 700;
  }

  header {
    font-size: 1.38rem;
    position: relative;
  }

  .header-left .position + .company::before,
  .header-left .position + .institution::before,
  .header-left .position + .organization::before,
  .header-left .position + .awarder::before {
    content: "at ";
  }
</style>
