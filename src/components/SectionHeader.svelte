<script>
  let { title, count = undefined, children } = $props();
</script>

<section class="section">
  <header>
    <h2 class="section-title">{title}{#if count !== undefined} <span class="item-count">({count})</span>{/if}</h2>
  </header>
  {@render children()}
</section>

<style>
  .section {
    margin-bottom: 1rem;
  }

  .section > :global(header) {
    position: relative;
  }

  .section > :global(header::after) {
    position: absolute;
    left: 0;
    top: 0.7em;
    height: 1px;
    background: var(--color-border);
    content: "";
    width: 100%;
    z-index: -100;
    display: block;
  }

  .section :global(.section-title) {
    display: inline-block;
    background: var(--color-section-title-bg);
    padding: 0 1em 0.3em 0;
    color: var(--color-accent);
    text-transform: uppercase;
    font-weight: 600;
    border: none;
    font-size: 0.9rem;
  }

  .section > :global(section > header) {
    font-size: 1.38rem;
    position: relative;
    margin-top: 0.7em;
  }

  .section > :global(section > header:first-of-type) {
    margin: 0;
  }

  .section > :global(section > header .space-left) {
    position: absolute;
    left: -1.56rem;
    top: 5px;
    color: #aaa;
    line-height: 1;
    opacity: 0;
  }

  .section > :global(section > section) {
    margin-bottom: 1rem;
  }
</style>
