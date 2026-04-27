<script>
  import { t } from '../utils/helpers.ts';
  import ContactInfo from './ContactInfo.svelte';
  import SocialProfile from './SocialProfile.svelte';
  import SectionHeader from './SectionHeader.svelte';
  import BirthDate from './BirthDate.svelte';
  import FormattedText from './FormattedText.svelte';

  let { basics } = $props();
</script>

{#if basics}
  <header class="header clear">
    {#if basics.image}
      <img class="image" src={basics.image} alt={basics.name}>
      <div class="middle">
        <h1 class="name">{basics.name}</h1>
        <h2 class="label">{basics.label}</h2>
      </div>
    {:else}
      <div>
        <h1 class="name">{basics.name}</h1>
        <h2 class="label">{basics.label}</h2>
      </div>
    {/if}

    {#if basics.location}
      <span class="location">
        {#if basics.location.address}
          <span>{basics.location.address},</span>
        {/if}
        {#if basics.location.postalCode}
          <span>{basics.location.postalCode},</span>
        {/if}
        {#if basics.location.city}
          <span>{basics.location.city},</span>
        {/if}
        {#if basics.location.region}
          <span>{basics.location.region}</span>
        {/if}
        {#if basics.location.countryCode}
          <span>({basics.location.countryCode})</span>
        {/if}
      </span>
    {/if}

    <BirthDate birth={basics.birth} />

    <ContactInfo website={basics.website} email={basics.email} phone={basics.phone} />

    {#if basics.profiles?.length}
      <nav class="profiles" aria-label="Social profiles">
        {#each basics.profiles as profile}
          <SocialProfile {profile} />
        {/each}
      </nav>
    {/if}
  </header>

  {#if basics.summary}
    <SectionHeader title={t('resume.summary')}>
      <section class="main-summary">
        <div><FormattedText text={basics.summary} /></div>
      </section>
    </SectionHeader>
  {/if}
{/if}

<style>
  .header {
    margin-bottom: var(--sp-5);
  }

  .name {
    font-size: var(--fs-name);
    font-weight: 200;
    line-height: var(--lh-tight);
    letter-spacing: -0.015em;
    color: var(--color-heading);
  }

  .label {
    color: var(--color-heading);
    font-size: var(--fs-label);
    font-weight: 300;
    line-height: var(--lh-snug);
    margin-top: var(--sp-1);
    margin-bottom: var(--sp-3);
  }

  .location {
    color: var(--color-text-secondary);
    margin-bottom: var(--sp-2);
    display: block;
  }

  .image {
    width: 11em;
    float: right;
    border-radius: 4px;
  }

  .profiles {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    margin-top: var(--sp-1);
    gap: var(--sp-1) 0;
  }

  .section {
    margin-bottom: 1rem;
  }

  .main-summary {
    background: var(--color-background-alt);
    padding: var(--sp-4);
    line-height: var(--lh-base);
  }

  /* p margin reset handled by summary wrapper */

  @media print {
    .header { margin-bottom: var(--sp-4); }
    .profiles :global(a:not(.hide-href-print))::after {
      content: " · " attr(href);
      font-size: var(--fs-fine);
      color: var(--color-text-muted);
      font-weight: 400;
      margin-left: 0.2em;
    }
    .profiles .url :global(.show-only-url-print) { display: none; }
    .profiles .url :global(a)::after { content: attr(href); }
    .profiles :global(.item) { padding: 0; }
    .main-summary { padding: 0; background: transparent; }
  }

  @media screen and (max-width: 601px) {
    .header .profiles, .header :global(.contact) { flex-wrap: wrap; }
    .header > div > div { margin-right: 0.8em; margin-bottom: 0.3em; }
    .name { font-size: 1.857rem; }
    .label { font-size: 1.286rem; }
    .image { float: none; display: block; margin: 0 auto 1rem; width: 8em; }
  }
</style>
