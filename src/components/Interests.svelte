<script>
  import { t } from '../utils/helpers.ts';
  import SectionHeader from './SectionHeader.svelte';
  import KeywordList from './KeywordList.svelte';
  import FormattedText from './FormattedText.svelte';

  let { interests = [] } = $props();
</script>

{#if interests?.length}
  <SectionHeader title={t('resume.interests')} count={interests.length}>
    <section class="interests-grid">
      {#each interests as interest}
        <div class="interest-item">
          {#if interest.name}
            <h3 class="name">{interest.name}</h3>
          {/if}
          <KeywordList keywords={interest.keywords} />
          {#if interest.summary}
            <div class="summary">
              <FormattedText text={interest.summary} />
            </div>
          {/if}
        </div>
      {/each}
    </section>
  </SectionHeader>
{/if}

<style>
  .interests-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: var(--sp-5);
    row-gap: var(--sp-3);
  }

  .interest-item {
    padding: 0;
    border-bottom: none;
  }

  .interest-item .name {
    font-weight: 700;
    font-size: var(--fs-card);
    line-height: var(--lh-snug);
    color: var(--color-heading);
    margin-bottom: var(--sp-1);
  }

  @media screen and (max-width: 479px) {
    .interests-grid { grid-template-columns: 1fr; }
  }

  @media screen and (min-width: 480px) and (max-width: 601px) {
    .interests-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }
</style>
