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
    margin-bottom: 1rem;
  }

  .name {
    font-size: 2.8rem;
    font-weight: 100;
    line-height: 100%;
  }

  .label {
    color: var(--color-heading);
    font-size: 1.47rem;
    font-weight: 300;
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
  }

  .section {
    margin-bottom: 1rem;
  }

  .main-summary {
    background: var(--color-background-alt);
    padding: 1.2em 1em;
  }

  /* p margin reset handled by summary wrapper */

  @media print {
    .profiles :global(a:not(.hide-href-print))::after {
      content: " (" attr(href) ") ";
    }
    .profiles .url :global(.show-only-url-print) { display: none; }
    .profiles .url :global(a)::after { content: attr(href); }
    .profiles :global(.item) { padding: 0; }
    .main-summary { padding: 0; background: transparent; }
  }

  @media screen and (max-width: 601px) {
    .header .profiles, .header :global(.contact) { flex-wrap: wrap; }
    .header > div > div { margin-right: 0.8em; margin-bottom: 0.3em; }
    .name { font-size: 2rem; }
    .label { font-size: 1.2rem; }
    .image { float: none; display: block; margin: 0 auto 1rem; width: 8em; }
  }
</style>
