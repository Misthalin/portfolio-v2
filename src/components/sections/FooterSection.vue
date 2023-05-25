<template>
  <div class="footer-container">
    <q-btn
      :icon="evaGithubOutline"
      stack
      label="View source code"
      flat
      square
      no-caps
      href="https://github.com/Misthalin/portfolio"
      target="_blank"
    />
  </div>
</template>

<script setup lang="ts">
import { evaGithubOutline } from '@quasar/extras/eva-icons';
</script>

<style scoped lang="scss">
.footer-container {
  font-family: $font-mono;
  font-size: 0.8rem;
  color: $frost-white;
  padding-top: 4em;
  margin-top: 4em;
  margin: 4em auto 0;
  padding-bottom: 4em;
  max-width: 300px;
  text-align: center;
}

p {
  margin: 4px;
}

a {
  text-align: center;
  display: inline-block;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  color: inherit;
  position: relative;
  transition: $transition;
  &:hover {
    color: $turquoise-blast;
  }
}
</style>
