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
  @media print {
    .highlights { margin: 0.5em 0 0 0; }
    .highlights > li > :global(p) { margin-bottom: 0.3em; }
  }
</style>
