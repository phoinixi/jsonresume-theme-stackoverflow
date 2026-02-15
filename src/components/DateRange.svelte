<script>
  import { getDateHelpers } from '../utils/date-helpers.ts';

  let { startDate, endDate, language = 'en-gb' } = $props();

  const { MY } = getDateHelpers(language);
</script>

{#if startDate}
  <div class="date">
    <span class="startDate">{MY(startDate)}</span>
    {#if endDate}
      <span class="endDate">- {MY(endDate)}</span>
    {:else}
      <span class="endDate">- Current</span>
    {/if}
  </div>
{/if}
