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
            <div class="level {normalizeLevel(skill.level)}">
              {#if skill.levelDisplay}
                <em>{skill.levelDisplay}</em>
              {:else}
                <em>{skill.level}</em>
              {/if}
              <div class="bar"></div>
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
