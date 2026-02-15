<script>
  let { birth } = $props();
</script>

{#if birth && Object.keys(birth).length}
  <div class="birth-date">
    {#if birth.place}
      Born in {birth.place}{#if birth.state}, {birth.state}{/if}{#if birth.date} in {new Date(birth.date).toLocaleDateString('en', { year: 'numeric' })}{/if}
    {:else if birth.date}
      Born in {new Date(birth.date).toLocaleDateString('en', { year: 'numeric' })}
    {/if}
  </div>
{/if}
