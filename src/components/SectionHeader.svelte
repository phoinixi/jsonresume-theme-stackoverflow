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
    margin-bottom: var(--sp-5);
  }

  header {
    position: relative;
    margin-bottom: var(--sp-3);
  }

  header::after {
    position: absolute;
    left: 0;
    top: 50%;
    height: 1px;
    background: var(--color-border);
    content: "";
    width: 100%;
    z-index: 0;
    display: block;
  }

  .item-count {
    margin-left: 0.5em;
    font-weight: 500;
    opacity: 0.65;
  }

  .section-title {
    position: relative;
    z-index: 1;
    display: inline-block;
    background: var(--color-section-title-bg);
    padding-right: 0.85em;
    color: var(--color-accent);
    text-transform: uppercase;
    font-weight: 700;
    border: none;
    font-size: var(--fs-section);
    line-height: var(--lh-tight);
    letter-spacing: 0.12em;
  }

  @media print {
    .section { margin-bottom: var(--sp-4); padding: 0; }
    header { margin-bottom: var(--sp-2); }
    header::after {
      background: #d8d8d8;
      height: 0.5px;
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
    }
    :global(.location) { padding-bottom: var(--sp-1); }
    .section > :global(section > section) { margin: var(--sp-3) 0; }
    .section > :global(section > section:last-of-type) { margin-bottom: 0; }
    .item-count { display: none; }
  }
</style>
