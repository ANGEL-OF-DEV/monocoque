<script lang="ts" setup>
</script>

<template>
  <details open>
    <summary print-exact>
      <slot name="head"></slot>
    </summary>
    <p>
      <slot name="content"></slot>
    </p>
  </details>
</template>

<style scoped>
details {
  margin-top: 2em;
  margin-bottom: 2em;
  font-size: 16px;
  padding: 1em;
  background-color: var(--color-khaki-w1);
  border-width: 1px;
  border-style: solid;
  border-color: var(--color-brown);
}

details summary > * {
  display: inline;
  font-size: 18px;
  padding: 1em;
}

details summary::marker {
  content: "";
}

details summary {
  width: fit-content;
  background-color: var(--color-slate);
  color: var(--color-khaki-w1);
  font-weight: bold;
  margin-left: -1em;

  @media print {
    color: white;
  }
}
</style>
