<script>
  import { formatDate } from '../utils/date-helpers.ts';

  let { startDate, endDate, language = 'en-gb' } = $props();
</script>

{#if startDate}
  <div class="date">
    <span class="startDate">{formatDate(startDate, language)}</span>
    {#if endDate}
      <span class="endDate">- {formatDate(endDate, language)}</span>
    {:else}
      <span class="endDate">- Current</span>
    {/if}
  </div>
{/if}
