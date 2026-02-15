<script>
  import { paragraphSplit, t } from '../utils/helpers.ts';

  let { interests = [] } = $props();
</script>

{#if interests?.length}
  <section class="section">
    <header>
      <h2 class="section-title">{t('resume.interests')} <span class="item-count">({interests.length})</span></h2>
    </header>
    <section id="interests">
      {#each interests as interest}
        <div class="item">
          {#if interest.name}
            <h3 class="name">{interest.name}</h3>
          {/if}
          {#if interest.keywords?.length}
            <ul class="keywords">
              {#each interest.keywords as keyword}
                <li>{keyword}</li>
              {/each}
            </ul>
          {/if}
          {#if interest.summary}
            <div class="summary">{@html paragraphSplit(interest.summary)}</div>
          {/if}
        </div>
      {/each}
    </section>
  </section>
{/if}

<style>
  #interests {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
  }

  #interests :global(.item) {
    width: 15em;
    padding: 0 0.5em 0.5em 0;
    border-bottom: none;
  }
</style>
