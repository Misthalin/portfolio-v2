<template>
  <lines-bg>
    <a
      href="#main"
      class="skip-link"
      v-on:focus="skipLinkVisible = true"
      v-on:blur="skipLinkVisible = false"
    >
      Skip to main content
    </a>
    <router-view />
  </lines-bg>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LinesBg from './components/background/LinesBg.vue';

const skipLinkVisible = ref(false);
</script>

<style scoped lang="scss">
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: $frost-white;
  color: $midnight-blue;
  padding: 8px;
  z-index: 100;
  transition: top 0.3s;
  &:focus {
    top: 0;
  }
}
</style>
