<script>
  import { paragraphSplit, t } from '../utils/helpers.ts';
  import SectionHeader from './SectionHeader.svelte';
  import KeywordList from './KeywordList.svelte';

  let { interests = [] } = $props();
</script>

{#if interests?.length}
  <SectionHeader title={t('resume.interests')} count={interests.length}>
    <section id="interests">
      {#each interests as interest}
        <div class="item">
          {#if interest.name}
            <h3 class="name">{interest.name}</h3>
          {/if}
          <KeywordList keywords={interest.keywords} />
          {#if interest.summary}
            <div class="summary">{@html paragraphSplit(interest.summary)}</div>
          {/if}
        </div>
      {/each}
    </section>
  </SectionHeader>
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
