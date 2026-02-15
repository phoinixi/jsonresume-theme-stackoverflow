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
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
  }

  .language-item {
    width: 15em;
    padding: 0 0.5em 0.5em 0;
    border-bottom: none;
  }

  .language {
    font-weight: 600;
  }

  .display {
    display: block;
    opacity: 1 !important;
  }
</style>
