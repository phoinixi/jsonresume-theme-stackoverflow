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
    padding-left: 0.5em;
    margin-bottom: 1em;
    border-left: 5px solid var(--color-reference-border);
  }

  .name {
    font-weight: 600;
  }
</style>
