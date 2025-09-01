<script lang="ts">
  let { ...props } = $props();
</script>

<svg
  class={props.class}
  width="200"
  height="200"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect
    x="75"
    y="75"
    rx="5"
    width="80"
    height="80"
    fill="none"
    stroke="royalblue"
    stroke-width="10"
    opacity=".8"
  />
</svg>
