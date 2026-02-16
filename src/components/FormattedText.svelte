<script>
  import { paragraphSplit } from '../utils/markdown.ts';

  let { text } = $props();
</script>

{#if text}{@html paragraphSplit(text)}{/if}
