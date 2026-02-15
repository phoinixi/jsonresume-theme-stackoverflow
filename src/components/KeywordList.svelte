<script>
  let { keywords = [], cssClass = 'keywords' } = $props();
</script>

{#if keywords?.length}
  <ul class={cssClass}>
    {#each keywords as keyword}
      <li>{keyword}</li>
    {/each}
  </ul>
{/if}

<style>
  ul {
    margin: 0.5em 0;
  }

  li {
    display: inline-block;
    margin: 2px 2px 2px 0;
    padding: 4px 5px 5px;
    font-size: 0.9rem;
    line-height: 1;
    color: var(--color-keyword-text);
    background-color: var(--color-keyword-bg);
    border: 0 solid var(--color-keyword-border);
    white-space: nowrap;
  }

  li:hover {
    background: var(--color-keyword-bg);
  }
</style>
