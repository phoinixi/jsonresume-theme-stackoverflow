<script>
  let { website, email, phone } = $props();
</script>

{#if website || email || phone}
  <div class="contact">
    {#if email}
      <div class="contact-item">
        <span class="fa-regular fa-envelope icon"></span>
        <a class="hide-href-print" href="mailto:{email}">{email}</a>
      </div>
    {/if}
    {#if phone}
      <div class="contact-item">
        <span class="fa-solid fa-mobile-screen-button icon"></span>
        <a class="hide-href-print" href="tel:{phone}">{phone}</a>
      </div>
    {/if}
    {#if website}
      <div class="contact-item">
        <span class="fa-solid fa-up-right-from-square icon"></span>
        <a class="hide-href-print" target="_blank" href={website}>{website}</a>
      </div>
    {/if}
  </div>
{/if}

<style>
  .contact {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    margin-top: var(--sp-2);
    gap: 0 var(--sp-4);
  }

  .contact-item {
    line-height: var(--lh-snug);
  }

  .icon {
    margin-right: 0.4em;
    color: var(--color-text-secondary);
  }
</style>
