<script lang="ts">
  let { ...props } = $props();
  let transform = $derived(props.rotate ? "rotate(180, 60, 60)" : "");
</script>

<svg
  class={props.class}
  width="120"
  height="120"
  xmlns="http://www.w3.org/2000/svg"
>
  <polygon
    points="60,10 110,90 10,90"
    fill="none"
    stroke="forestgreen"
    stroke-width="10"
    stroke-linejoin="round"
    {transform}
  />
</svg>
