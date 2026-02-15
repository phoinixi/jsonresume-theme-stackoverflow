<script>
  import { normalizeLevel, t } from '../utils/helpers.ts';

  let { skills = [] } = $props();
</script>

{#if skills?.length}
  <section class="section">
    <header>
      <h2 class="section-title">{t('resume.skills')}</h2>
    </header>
    <section id="skills">
      {#each skills as skill}
        <div class="item">
          {#if skill.name}
            <h3 class="name">{skill.name}</h3>
          {/if}
          {#if skill.level}
            <div class="level {normalizeLevel(skill.level)}" role="meter" aria-label="{skill.name} skill level: {skill.levelDisplay || skill.level}" aria-valuemin="0" aria-valuemax="100" aria-valuenow={normalizeLevel(skill.level) === 'beginner' ? 25 : normalizeLevel(skill.level) === 'intermediate' ? 50 : normalizeLevel(skill.level) === 'advanced' || normalizeLevel(skill.level) === 'fluent' ? 75 : 100}>
              {#if skill.levelDisplay}
                <em>{skill.levelDisplay}</em>
              {:else}
                <em>{skill.level}</em>
              {/if}
              <div class="bar" aria-hidden="true"></div>
            </div>
          {/if}
          {#if skill.keywords?.length}
            <ul class="keywords">
              {#each skill.keywords as keyword}
                <li>{keyword}</li>
              {/each}
            </ul>
          {/if}
        </div>
      {/each}
    </section>
  </section>
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

  :global(.level) {
    margin-bottom: 0.5em;
  }

  :global(.level em) {
    padding-left: 0.2em;
  }

  :global(.level .bar) {
    border: 1px solid var(--color-border-light);
    display: block;
    width: 10em;
    height: 5px;
    position: relative;
  }

  :global(.level .bar::after) {
    position: absolute;
    content: " ";
    top: 0;
    left: 0;
    background: black;
    height: 5px;
  }

  :global(.level.beginner .bar::after) {
    background: var(--color-bar-beginner);
    width: 2.5em;
  }

  :global(.level.intermediate .bar::after) {
    background: var(--color-bar-intermediate);
    width: 5em;
  }

  :global(.level.advanced .bar::after),
  :global(.level.fluent .bar::after) {
    background: var(--color-bar-advanced);
    width: 7.5em;
  }

  :global(.level.master .bar::after),
  :global(.level.expert .bar::after),
  :global(.level.native.speaker .bar::after) {
    background: var(--color-bar-master);
    width: 10em;
  }
</style>
