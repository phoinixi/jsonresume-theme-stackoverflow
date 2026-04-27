<script>
  import { t } from '../utils/helpers.ts';
  import SectionHeader from './SectionHeader.svelte';
  import LevelBar from './LevelBar.svelte';

  let { languages = [] } = $props();
</script>

{#if languages?.length}
  <SectionHeader title={t('resume.languages')} count={languages.length}>
    <section class="languages-grid">
      {#each languages as lang}
        <div class="language-entry display">
          {#if lang.language}
            <h3 class="language">{lang.language}</h3>
          {/if}
          <div class="language-item">
            {#if lang.fluency}
              <LevelBar level={lang.fluency} displayText={lang.fluencyDisplay} />
            {/if}
          </div>
        </div>
      {/each}
    </section>
  </SectionHeader>
{/if}

<style>
  .languages-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: var(--sp-5);
    row-gap: var(--sp-3);
  }

  .language-item {
    padding: 0;
    border-bottom: none;
  }

  .language {
    font-weight: 700;
    font-size: var(--fs-card);
    line-height: var(--lh-snug);
    color: var(--color-heading);
    margin-bottom: var(--sp-1);
  }

  .display {
    display: block;
    opacity: 1 !important;
  }

  @media screen and (max-width: 479px) {
    .languages-grid { grid-template-columns: 1fr; }
  }

  @media screen and (min-width: 480px) and (max-width: 601px) {
    .languages-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }
</style>
