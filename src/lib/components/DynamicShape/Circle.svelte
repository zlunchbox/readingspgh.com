<script lang="ts">
  let { ...props } = $props();
</script>

<svg
  class={props.class}
  width="150"
  height="150"
  xmlns="http://www.w3.org/2000/svg"
>
  <circle
    cx="75"
    cy="75"
    r="60"
    fill="none"
    stroke="crimson"
    stroke-width="10"
    opacity=".8"
  />
</svg>
