<script>
  import { toLowerCase, t } from '../utils/helpers.ts';

  let { languages = [] } = $props();
</script>

{#if languages?.length}
  <section class="section">
    <header>
      <h2 class="section-title">{t('resume.languages')} <span class="item-count">({languages.length})</span></h2>
    </header>
    <section id="languages">
      {#each languages as lang}
        <div class="display">
          {#if lang.language}
            <h3 class="language">{lang.language}</h3>
          {/if}
          <div class="item">
            {#if lang.fluency}
              <div class="level fluency {toLowerCase(lang.fluency)}">
                {#if lang.fluencyDisplay}
                  <em>{lang.fluencyDisplay}</em>
                {:else}
                  <em>{lang.fluency}</em>
                {/if}
                <div class="bar"></div>
              </div>
            {/if}
          </div>
        </div>
      {/each}
    </section>
  </section>
{/if}
