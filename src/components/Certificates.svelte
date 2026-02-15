<script>
  import { t } from '../utils/helpers.ts';
  import { getDateHelpers } from '../utils/date-helpers.ts';

  let { certificates = [], language = 'en-gb' } = $props();

  const { MY } = getDateHelpers(language);
</script>

{#if certificates?.length}
  <section class="section">
    <header>
      <h2 class="section-title">{t('resume.certificates')} <span class="item-count">({certificates.length})</span></h2>
    </header>
    <section id="certificates">
      {#each certificates as cert}
        <section class="certificate-item">
          <header class="clear">
            {#if cert.date}
              <div class="date">{MY(cert.date)}</div>
            {/if}
            <div class="header-left">
              {#if cert.name}
                <div class="name">{cert.name}</div>
              {/if}
              {#if cert.issuer}
                <div class="issuer">{cert.issuer}</div>
              {/if}
            </div>
          </header>
          <div class="item">
            {#if cert.url}
              <span class="url">
                <span class="fa-solid fa-up-right-from-square"></span>
                <a target="_blank" href={cert.url}>{cert.url}</a>
              </span>
            {/if}
          </div>
        </section>
      {/each}
    </section>
  </section>
{/if}
