<script>
  import { paragraphSplit, t } from '../utils/helpers.ts';
  import DateRange from './DateRange.svelte';

  let { projects = [], language = 'en-gb' } = $props();
</script>

{#if projects?.length}
  <section class="section">
    <header>
      <h2 class="section-title">{t('resume.projects')} <span class="item-count">({projects.length})</span></h2>
    </header>
    <section id="projects">
      {#each projects as project, index}
        <section class="project-item">
          {#if project.summary}
            <label for="project-item-{index}"></label>
          {/if}
          {#if project.name}
            <header class="clear">
              <DateRange startDate={project.startDate} endDate={project.endDate} {language} />
              {#if project.name}
                <div class="position">{project.name}</div>
              {/if}
            </header>
          {/if}
          {#if project.location}
            <span class="location">
              <span class="fa-solid fa-location-dot"></span>
              {#if project.location.city}
                <span class="city">{project.location.city},</span>
              {/if}
              {#if project.location.countryCode}
                <span class="countryCode">({project.location.countryCode})</span>
              {/if}
              {#if project.location.region}
                <span class="region">{project.location.region}</span>
              {/if}
            </span>
          {/if}
          {#if project.url}
            <span class="website">
              <span class="fa-solid fa-up-right-from-square"></span>
              <a target="_blank" href={project.url}>{project.url}</a>
            </span>
          {/if}
          {#if project.keywords?.length}
            <ul class="keywords">
              {#each project.keywords as keyword}
                <li>{keyword}</li>
              {/each}
            </ul>
          {/if}
          <div class="item">
            {#if project.description}
              <div class="summary">{@html paragraphSplit(project.description)}</div>
            {/if}
            {#if project.highlights?.length}
              <ul class="highlights">
                {#each project.highlights as highlight}
                  <li>{@html paragraphSplit(highlight)}</li>
                {/each}
              </ul>
            {/if}
          </div>
        </section>
      {/each}
    </section>
  </section>
{/if}
