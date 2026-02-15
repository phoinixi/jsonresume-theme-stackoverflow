<script>
  import { spaceToDash } from '../utils/helpers.ts';

  const FA_BRAND_PREFIX = 'fa-brands';

  const brandColors = {
    'google-plus': '#dd4b39',
    'tumblr': '#32506d',
    'foursquare': '#0072b1',
    'facebook': '#3b5998',
    'linkedin': '#007bb6',
    'pinterest': '#cb2027',
    'dribbble': '#ea4c89',
    'instagram': '#517fa4',
    'twitter': '#00aced',
    'soundcloud': '#ff3a00',
    'wordpress': '#21759b',
    'youtube': '#bb0000',
    'github': '#171515',
    'stack-overflow': '#828386',
    'flickr': '#ff0084',
    'reddit': '#ff4500',
    'hacker-news': '#ff6600',
    'telegram': '#2291c3',
  };

  let { profile } = $props();

  const network = spaceToDash(profile.network);
  const color = brandColors[network] || 'inherit';
  const iconClass = `${FA_BRAND_PREFIX} fa-${network}`;
</script>

{#if profile.network}
  <div class="item">
    <div class="username">
      <span class="{iconClass} social" style="color: {color}"></span>
      {#if profile.url}
        <span class="url">
          <a target="_blank" href={profile.url}><span class="show-only-url-print">{profile.username}</span></a>
        </span>
      {:else}
        <span>{profile.username}</span>
      {/if}
    </div>
  </div>
{/if}

<style>
  .item {
    padding: 0;
    margin-right: 0.8em;
  }

  .social {
    font-size: 1.1em;
    margin-right: 0.25em;
  }
</style>
