<script>
  import { paragraphSplit, t } from '../utils/helpers.ts';
  import { getDateHelpers } from '../utils/date-helpers.ts';

  let { publications = [], language = 'en-gb' } = $props();

  const { MY } = getDateHelpers(language);
</script>

{#if publications?.length}
  <section class="section">
    <header>
      <h2 class="section-title">{t('resume.publications')} <span class="item-count">({publications.length})</span></h2>
    </header>
    <section id="publications">
      {#each publications as pub, index}
        <section class="publication-item">
          {#if pub.summary}
            <label for="publication-item-{index}"></label>
          {/if}
          <header class="clear">
            {#if pub.releaseDate}
              <span class="date">{MY(pub.releaseDate)}</span>
            {/if}
            <div class="header-left">
              {#if pub.name}
                <span class="name">
                  {#if pub.website}
                    <span class="website">
                      <span class="fa-solid fa-up-right-from-square"></span>
                      <a target="_blank" href={pub.website}>{pub.name}</a>
                    </span>
                  {:else}
                    {pub.name}
                  {/if}
                </span>
              {/if}
              {#if pub.publisher}
                <span class="publisher">in {pub.publisher}</span>
              {/if}
            </div>
          </header>
          {#if pub.keywords?.length}
            <ul class="keywords">
              {#each pub.keywords as keyword}
                <li>{keyword}</li>
              {/each}
            </ul>
          {/if}
          <div class="item">
            {#if pub.summary}
              <div class="summary">{@html paragraphSplit(pub.summary)}</div>
            {/if}
          </div>
        </section>
      {/each}
    </section>
  </section>
{/if}
