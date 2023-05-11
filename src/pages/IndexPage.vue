<template>
  <div class="content-wrapper" ref="contentWrapper">
    <navigation-bar />
    <div class="main-view">
      <hero-section />
      <experience-section />
    </div>
  </div>
</template>

<script setup lang="ts">
import NavigationBar from '@/components/navigation/NavigationBar.vue';
import HeroSection from '@/components/sections/HeroSection.vue';
import ExperienceSection from '@/components/sections/ExperienceSection.vue';
import { useQuasar } from 'quasar';
import { ref, provide } from 'vue';

const contentWrapper = ref<HTMLElement | null>(null);
provide('contentWrapper', contentWrapper);

const $q = useQuasar();
$q.screen.setSizes({ md: 768 });
</script>

<style scoped lang="scss">
.content-wrapper {
  overflow-y: auto;
  height: calc(100vh);
}
.main-view {
  margin: 0 auto;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  padding: 0px 0;

  @media (max-width: 1080px) {
    padding: 0 100px;
  }

  @media (max-width: 862px) {
    padding: 0 25px;
  }

  @media (max-width: 480px) {
    padding: 0 15px;
  }
}
</style>
