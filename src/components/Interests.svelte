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
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
  }

  .interest-item {
    width: 15em;
    padding: 0 0.5em 0.5em 0;
    border-bottom: none;
  }

  @media screen and (max-width: 601px) {
    .interests-grid { flex-direction: column; }
    .interest-item { width: 100%; padding-right: 0; }
  }
</style>
