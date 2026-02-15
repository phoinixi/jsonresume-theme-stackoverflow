<script>
  import { normalizeLevel } from '../utils/helpers.ts';

  let { level, displayText = undefined, name = '' } = $props();

  const normalized = normalizeLevel(level);
  const valueNow = normalized === 'beginner' ? 25 : normalized === 'intermediate' ? 50 : (normalized === 'advanced' || normalized === 'fluent') ? 75 : 100;
</script>

<div class="level {normalized}" role="meter" aria-label="{name ? name + ' level: ' : ''}{displayText || level}" aria-valuemin="0" aria-valuemax="100" aria-valuenow={valueNow}>
  <em>{displayText || level}</em>
  <div class="bar" aria-hidden="true"></div>
</div>

<style>
  .level {
    margin-bottom: 0.5em;
  }

  .level em {
    padding-left: 0.2em;
  }

  .level .bar {
    border: 1px solid var(--color-border-light);
    display: block;
    width: 10em;
    height: 5px;
    position: relative;
  }

  .level .bar::after {
    position: absolute;
    content: " ";
    top: 0;
    left: 0;
    background: black;
    height: 5px;
  }

  .level.beginner .bar::after {
    background: var(--color-bar-beginner);
    width: 2.5em;
  }

  .level.intermediate .bar::after {
    background: var(--color-bar-intermediate);
    width: 5em;
  }

  .level.advanced .bar::after,
  .level.fluent .bar::after {
    background: var(--color-bar-advanced);
    width: 7.5em;
  }

  .level.master .bar::after,
  .level.expert .bar::after,
  .level.native.speaker .bar::after {
    background: var(--color-bar-master);
    width: 10em;
  }
</style>
