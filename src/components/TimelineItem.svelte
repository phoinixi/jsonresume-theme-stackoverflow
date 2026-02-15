<script>
  import { paragraphSplit } from '../utils/helpers.ts';
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
      <div class="summary">{@html paragraphSplit(summary)}</div>
    {/if}
    {#if highlights?.length}
      <ul class="highlights">
        {#each highlights as highlight}
          <li>{@html paragraphSplit(highlight)}</li>
        {/each}
      </ul>
    {/if}
  </div>
</section>

<style>
  .timeline-item :global(.position),
  .timeline-item :global(.company),
  .timeline-item :global(.organization),
  .timeline-item :global(.institution),
  .timeline-item :global(.date),
  .timeline-item :global(.area),
  .timeline-item :global(.studyType),
  .timeline-item :global(.title),
  .timeline-item :global(.awarder) {
    display: inline;
  }

  .timeline-item :global(.position),
  .timeline-item :global(.studyType),
  .timeline-item :global(.area),
  .timeline-item :global(.title) {
    font-weight: 600;
  }

  .timeline-item :global(.company::before),
  .timeline-item :global(.institution::before),
  .timeline-item :global(.organization::before),
  .timeline-item :global(.awarder::before) {
    content: "at ";
  }

  .timeline-item :global(.company),
  .timeline-item :global(.institution),
  .timeline-item :global(.organization),
  .timeline-item :global(.awarder) {
    color: var(--color-text-secondary);
    font-weight: 400;
  }

  .timeline-item :global(header .date) {
    display: block;
    font-size: 1rem;
    padding: 0.1em 0;
    color: var(--color-text-secondary);
    font-weight: 400;
  }

  .timeline-item :global(.item) {
    overflow: hidden;
  }

  .timeline-item :global(.highlights > li > p) {
    margin-bottom: 0.5em;
  }

  .timeline-item :global(.clear::after) {
    content: "";
    display: table;
    clear: both;
  }

  .timeline-item :global(.location) {
    margin-right: 0.5em;
    color: var(--color-text-secondary);
    font-weight: 700;
  }
</style>
