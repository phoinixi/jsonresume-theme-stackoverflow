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

  header {
    position: relative;
  }

  header::after {
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

  @media print {
    .section { margin: 0.8rem 0; padding: 0; }
    header { padding-bottom: 0.15rem; }
    :global(.location) { padding-bottom: 0.15rem; }
    .section > :global(section > section) { border-bottom: 1px solid #fdfdfd; margin: .5em 0; }
    .section > :global(section > section:last-of-type) { margin: 0; }
  }

  .section-title {
    display: inline-block;
    background: var(--color-section-title-bg);
    padding: 0 1em 0.3em 0;
    color: var(--color-accent);
    text-transform: uppercase;
    font-weight: 600;
    border: none;
    font-size: 0.9rem;
  }
</style>
