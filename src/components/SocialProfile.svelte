<script>
  import { spaceToDash } from '../utils/helpers.ts';

  let { profile } = $props();
</script>

{#if profile.network}
  <div class="item">
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

  /* Social Media Brand Colors */
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
