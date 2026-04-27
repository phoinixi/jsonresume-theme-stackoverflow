<script>
  import FormattedText from './FormattedText.svelte';

  let { highlights = [] } = $props();
</script>

{#if highlights?.length}
  <ul class="highlights">
    {#each highlights as highlight}
      <li><FormattedText text={highlight} /></li>
    {/each}
  </ul>
{/if}

<style>
  .highlights {
    margin: var(--sp-2) 0 0 0;
  }

  .highlights > li {
    margin-top: var(--sp-1);
    line-height: var(--lh-base);
  }

  .highlights > li:first-child {
    margin-top: 0;
  }

  @media print {
    .highlights { margin: var(--sp-2) 0 0 0; }
    .highlights > li { margin-top: var(--sp-1); line-height: var(--lh-snug); }
    .highlights > li > :global(p) { margin-bottom: var(--sp-1); }
  }
</style>
