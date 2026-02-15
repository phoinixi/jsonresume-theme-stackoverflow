<script>
  import { t } from '../utils/helpers.ts';

  let { references = [] } = $props();
</script>

{#if references?.length}
  <section class="section">
    <header>
      <h2 class="section-title">{t('resume.references')} <span class="item-count">({references.length})</span></h2>
    </header>
    <section id="references">
      {#each references as ref}
        <div class="item">
          {#if ref.reference}
            <blockquote class="reference">&#8220;&#32;{ref.reference}&#32;&#8221;</blockquote>
          {/if}
          {#if ref.name}
            <div class="name">{ref.name}</div>
          {/if}
        </div>
      {/each}
    </section>
  </section>
{/if}

<style>
  #references :global(.item) {
    padding-left: 0.5em;
    margin-bottom: 1em;
    border-left: 5px solid var(--color-reference-border);
  }
</style>
