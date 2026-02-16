<script>
  import { t } from '../utils/helpers.ts';
  import SectionHeader from './SectionHeader.svelte';
  import LevelBar from './LevelBar.svelte';
  import KeywordList from './KeywordList.svelte';

  let { skills = [] } = $props();
</script>

{#if skills?.length}
  <SectionHeader title={t('resume.skills')}>
    <section class="skills-grid">
      {#each skills as skill}
        <div class="skill-item">
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
  .skills-grid {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
  }

  .skill-item {
    width: 16em;
    padding: 0 0.5em 0.5em 0;
    border-bottom: none;
  }

  .name {
    font-weight: 600;
  }

  @media print {
    .skills-grid .skill-item { display: flex; flex-direction: column; margin: 0.3rem 0; padding: 0; }
  }

  @media screen and (max-width: 601px) {
    .skills-grid { flex-direction: column; }
    .skill-item { width: 100%; padding-right: 0; }
  }

  @media screen and (min-width: 480px) and (max-width: 601px) {
    .skills-grid { flex-direction: row; flex-wrap: wrap; }
    .skill-item { width: 48%; padding-right: 2%; }
  }
</style>
