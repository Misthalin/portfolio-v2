<template>
  <header class="header" :class="{ 'header--hidden': hidden }">
    <nav>
      <NavLogo />

      <template v-if="!$q.screen.lt.md">
        <!-- Main navigation -->
        <div style="display: flex; flex-direction: row; gap: 25px">
          <q-btn
            no-caps
            flat
            padding="12px"
            label="Experience"
            @click="scrollToTarget('experience')"
          />
          <q-btn
            no-caps
            flat
            padding="12px"
            label="Projects"
            @click="scrollToTarget('projects')"
          />
          <q-btn
            no-caps
            flat
            padding="12px"
            label="About"
            @click="scrollToTarget('about')"
          />
        </div>

        <!-- Social media -->
        <div>
          <q-btn
            round
            flat
            :icon="evaGithubOutline"
            aria-label="Visit my GitHub profile"
            href="https://github.com/misthalin"
            target="_blank"
            style="margin-right: 10px"
          />
          <q-btn
            round
            flat
            :icon="evaLinkedinOutline"
            aria-label="Visit my LinkedIn profile"
            href="https://www.linkedin.com/in/adrianriise"
            target="_blank"
          />
        </div>
      </template>

      <!-- Sidebar menu -->
      <q-btn
        square
        flat
        dense
        aria-label="Menu"
        style="margin-right: -12px"
        :icon="evaMenuOutline"
        v-if="$q.screen.lt.md"
        size="xl"
        @click="onMenuClick"
      />
      <navigation-sidebar />
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import NavigationSidebar from './NavigationSidebar.vue';
import NavLogo from './NavLogo.vue';
import {
  evaLinkedinOutline,
  evaGithubOutline,
  evaMenuOutline,
} from '@quasar/extras/eva-icons';
import { Ref, inject, onBeforeUnmount, onMounted, ref } from 'vue';
import { scrollTo } from '@/utils/helpers';

const contentWrapper = inject<Ref<HTMLElement | null>>('contentWrapper');
const hidden = ref<boolean>(false);
const lastScroll = ref<number>(0);
const $q = useQuasar();

function scrollToTarget(target: string) {
  if (!contentWrapper?.value) return;
  scrollTo(target, contentWrapper?.value);
}

function onMenuClick() {
  $q.dialog({
    component: NavigationSidebar,
  });
}

onMounted(() => {
  contentWrapper?.value?.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  contentWrapper?.value?.removeEventListener('scroll', handleScroll);
});

function handleScroll() {
  const currentScroll = contentWrapper?.value?.scrollTop;
  if (!currentScroll) return;
  if (currentScroll > lastScroll.value && currentScroll > 150) {
    hidden.value = true;
  } else {
    hidden.value = false;
  }
  lastScroll.value = currentScroll;
}
</script>

<style scoped lang="scss">
.header {
  transition: all 0.2s ease-in-out;
  // box-shadow: 0 10px 30px -10px var(--dark-opacity);
}
.header--hidden {
  transform: translateY(-100%);
  box-shadow: 0 10px 30px -10px $deep-space-blue-opacity;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0px;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: 80px;
  background-color: $twilight-blue-opacity;
  backdrop-filter: blur(10px);
  transition: var(--transition);
  @media (max-width: 1080px) {
    padding: 0px 40px;
  }
}

:deep(.q-btn):hover,
:deep(.q-btn):focus {
  color: $turquoise-blast !important;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  font-family: $font-mono;
  counter-reset: item 0;
  z-index: 12;
}
</style>
