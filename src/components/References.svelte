<script>
  import { t } from '../utils/helpers.ts';
  import SectionHeader from './SectionHeader.svelte';

  let { references = [] } = $props();
</script>

{#if references?.length}
  <SectionHeader title={t('resume.references')} count={references.length}>
    <section class="references-list">
      {#each references as ref}
        <div class="reference-item">
          {#if ref.reference}
            <blockquote class="reference">&#8220;&#32;{ref.reference}&#32;&#8221;</blockquote>
          {/if}
          {#if ref.name}
            <div class="name">{ref.name}</div>
          {/if}
        </div>
      {/each}
    </section>
  </SectionHeader>
{/if}

<style>
  .reference-item {
    padding-left: var(--sp-3);
    margin-bottom: var(--sp-4);
    border-left: 3px solid var(--color-reference-border);
  }

  .reference {
    font-style: italic;
    color: var(--color-text);
    line-height: var(--lh-base);
    margin-bottom: var(--sp-1);
  }

  .name {
    font-weight: 700;
    font-size: var(--fs-meta);
    color: var(--color-text-secondary);
  }

  .name::before {
    content: "— ";
  }
</style>
