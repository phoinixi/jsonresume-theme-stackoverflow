<script>
  import { paragraphSplit, spaceToDash, birthDateHtml, t } from '../utils/helpers.ts';

  let { basics } = $props();
</script>

{#if basics}
  <header id="header" class="clear">
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
          <span class="address">{basics.location.address},</span>
        {/if}
        {#if basics.location.postalCode}
          <span class="postalCode">{basics.location.postalCode},</span>
        {/if}
        {#if basics.location.city}
          <span class="city">{basics.location.city},</span>
        {/if}
        {#if basics.location.region}
          <span class="region">{basics.location.region}</span>
        {/if}
        {#if basics.location.countryCode}
          <span class="countryCode">({basics.location.countryCode})</span>
        {/if}
      </span>
    {/if}

    {@html birthDateHtml(basics.birth)}

    <div id="contact">
      {#if basics.website}
        <div class="website">
          <span class="fa-solid fa-up-right-from-square"></span>
          <a class="hide-href-print" target="_blank" href={basics.website}>{basics.website}</a>
        </div>
      {/if}
      {#if basics.email}
        <div class="email">
          <span class="fa-regular fa-envelope"></span>
          <a class="hide-href-print" href="mailto:{basics.email}">{basics.email}</a>
        </div>
      {/if}
      {#if basics.phone}
        <div class="phone">
          <span class="fa-solid fa-mobile-screen-button"></span>
          <a class="hide-href-print" href="tel:{basics.phone}">{basics.phone}</a>
        </div>
      {/if}
    </div>

    {#if basics.profiles?.length}
      <nav id="profiles" aria-label="Social profiles">
        {#each basics.profiles as profile}
          <div class="item">
            {#if profile.network}
              <div class="username">
                <span class="fa-brands fa-{spaceToDash(profile.network)} {spaceToDash(profile.network)} social"></span>
                {#if profile.url}
                  <span class="url">
                    <a target="_blank" href={profile.url}><span class="show-only-url-print">{profile.username}</span></a>
                  </span>
                {:else}
                  <span>{profile.username}</span>
                {/if}
              </div>
            {/if}
          </div>
        {/each}
      </nav>
    {/if}
  </header>

  {#if basics.summary}
    <section class="section summary">
      <header>
        <h2 class="section-title">{t('resume.summary')}</h2>
      </header>
      <section class="main-summary">
        <div>{@html paragraphSplit(basics.summary)}</div>
      </section>
    </section>
  {/if}
{/if}
