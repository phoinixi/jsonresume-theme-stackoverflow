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
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: var(--sp-5);
    row-gap: var(--sp-3);
  }

  .skill-item {
    padding: 0;
    border-bottom: none;
  }

  .name {
    font-weight: 700;
    font-size: var(--fs-card);
    line-height: var(--lh-snug);
    color: var(--color-heading);
    margin-bottom: var(--sp-1);
  }

  @media print {
    .skills-grid { column-gap: var(--sp-4); row-gap: var(--sp-3); }
    .skills-grid .skill-item { display: flex; flex-direction: column; margin: 0; padding: 0; }
  }

  @media screen and (max-width: 479px) {
    .skills-grid { grid-template-columns: 1fr; }
  }

  @media screen and (min-width: 480px) and (max-width: 601px) {
    .skills-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }
</style>
