<script>
  import { t } from '../utils/helpers.ts';
  import SectionHeader from './SectionHeader.svelte';
  import LevelBar from './LevelBar.svelte';
  import KeywordList from './KeywordList.svelte';

  let { skills = [] } = $props();
</script>

{#if skills?.length}
  <SectionHeader title={t('resume.skills')}>
    <section id="skills">
      {#each skills as skill}
        <div class="item">
          {#if skill.name}
            <h3 class="name">{skill.name}</h3>
          {/if}
          {#if skill.level}
            <LevelBar level={skill.level} displayText={skill.levelDisplay} name={skill.name} />
          {/if}
          <KeywordList keywords={skill.keywords} />
        </div>
      {/each}
    </section>
  </SectionHeader>
{/if}

<style>
  #skills {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
  }

  #skills :global(.item) {
    width: 16em;
    padding: 0 0.5em 0.5em 0;
    border-bottom: none;
  }

  #skills :global(.item .keywords) {
    width: 15em;
  }
</style>
