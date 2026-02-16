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

  @media print {
    li { margin: 0; padding: 0; font-size: 0.8rem; background: transparent; }
    li::after { padding: 0 0 0 0.1rem; content: ", "; }
    li:last-of-type::after { content: ""; }
    :global(.skills-grid) li::after { content: ", "; }
    :global(.skills-grid) li:last-of-type::after { content: ""; }
    ul::before { font-size: 0.8rem; font-weight: 600; }
    ul.keywords::before { content: "Skills: "; font-size: 1rem; }
    :global(.skills-grid) ul::before { content: none; }
    ul.courses::before { content: "Major courses: "; font-size: 1rem; }
    li { font-size: 1rem; line-height: inherit; }
    :global(.skills-grid) .keywords { font-size: 0.9rem; margin: 0; }
  }
</style>
