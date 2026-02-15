<script>
  import { paragraphSplit, t } from '../utils/helpers.ts';
  import { getDateHelpers } from '../utils/date-helpers.ts';

  let { awards = [], language = 'en-gb' } = $props();

  const { MY } = getDateHelpers(language);
</script>

{#if awards?.length}
  <section class="section">
    <header>
      <h2 class="section-title">{t('resume.awards')} <span class="item-count">({awards.length})</span></h2>
    </header>
    <section id="awards">
      {#each awards as award, index}
        <section class="award-item">
          {#if award.summary}
            <label for="award-item-{index}"></label>
          {/if}
          <header class="clear">
            {#if award.date}
              <div class="date">{MY(award.date)}</div>
            {/if}
            <div class="header-left">
              {#if award.title}
                <div class="title">{award.title}</div>
              {/if}
              {#if award.awarder}
                <div class="awarder">{award.awarder}</div>
              {/if}
            </div>
          </header>
          <div class="item">
            {#if award.summary}
              <div class="summary">{@html paragraphSplit(award.summary)}</div>
            {/if}
          </div>
        </section>
      {/each}
    </section>
  </section>
{/if}
