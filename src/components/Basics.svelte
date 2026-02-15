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

<style>
  #header {
    margin-bottom: 1rem;
  }

  #header > :global(#profiles),
  #header > :global(#contact) {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
  }

  #header > :global(div) {
    line-height: 1.5;
  }

  #header > :global(div > div) {
    margin-right: 1.2em;
  }

  #header :global(h1.name) {
    font-size: 2.8rem;
    font-weight: 100;
    line-height: 100%;
  }

  #header :global(h2.label) {
    color: var(--color-heading);
    font-size: 1.47rem;
    font-weight: 300;
  }

  #header :global(.image) {
    width: 11em;
    float: right;
    border-radius: 4px;
  }

  #contact {
    margin-top: 0.5rem;
  }

  :global(#profiles .item) {
    padding: 0;
    margin-right: 0.8em;
  }

  :global(.fa) {
    margin-right: 0.25em;
  }

  :global(.fa.social) {
    font-size: 1.1em;
  }

  :global(.google-plus) { color: #dd4b39; }
  :global(.tumblr) { color: #32506d; }
  :global(.foursquare) { color: #0072b1; }
  :global(.facebook) { color: #3b5998; }
  :global(.linkedin) { color: #007bb6; }
  :global(.pinterest) { color: #cb2027; }
  :global(.dribbble) { color: #ea4c89; }
  :global(.instagram) { color: #517fa4; }
  :global(.twitter) { color: #00aced; }
  :global(.soundcloud) { color: #ff3a00; }
  :global(.wordpress) { color: #21759b; }
  :global(.youtube) { color: #bb0000; }
  :global(.github) { color: #171515; }
  :global(.stack-overflow) { color: #828386; position: relative; }
  :global(.flickr) { color: #ff0084; }
  :global(.reddit) { color: #ff4500; }
  :global(.hacker-news) { color: #ff6600; }
  :global(.stack-overflow::after) {
    position: absolute;
    left: 0;
    content: "\f16c";
    color: #f68a1f;
    overflow: hidden;
    height: 100%;
  }
  :global(.telegram) { color: #2291c3; }
</style>
