<template>
  <q-dialog
    ref="dialogRef"
    @hide="onDialogHide"
    transition-show="slide-left"
    transition-hide="slide-right"
  >
    <div class="sidebar">
      <div
        style="
          height: 80px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: right;
        "
      >
        <q-btn
          square
          flat
          dense
          :icon="evaCloseOutline"
          style="margin-right: 28px"
          size="xl"
          @click="onCancel"
        />
      </div>
      <div class="container">
        <!-- Main navigation -->
        <div style="display: flex; flex-direction: column; gap: 25px">
          <q-btn
            no-caps
            flat
            size="lg"
            padding="xl"
            label="Experience"
            href="#experience"
            class="button"
          />
          <q-btn
            no-caps
            flat
            size="lg"
            padding="xl"
            label="Projects"
            href="#projects"
            class="button"
          />
          <q-btn
            no-caps
            flat
            size="lg"
            padding="xl"
            label="About"
            href="#about"
            class="button"
          />
        </div>

        <!-- Social media -->
        <div style="display: flex; flex-direction: row">
          <q-btn
            square
            flat
            no-caps
            label="GitHub"
            stack
            :icon="evaGithubOutline"
            size="md"
            padding="xl"
            href="https://github.com/misthalin"
            target="_blank"
            class="button"
          />
          <q-btn
            square
            flat
            no-caps
            label="LinkedIn"
            stack
            :icon="evaLinkedinOutline"
            size="md"
            padding="xl"
            href="https://www.linkedin.com/in/adrianriise"
            target="_blank"
            class="button"
          />
        </div>
      </div>
    </div>
  </q-dialog>
</template>

<script setup lang="ts">
import {
  evaCloseOutline,
  evaGithubOutline,
  evaLinkedinOutline,
} from '@quasar/extras/eva-icons';
import { onMounted } from 'vue';
import { useQuasar } from 'quasar';
import { useDialogPluginComponent } from 'quasar';

const $q = useQuasar();

onMounted(() => {
  window.onresize = () => {
    if (!$q.screen.lt.md && dialogRef.value) {
      onCancel();
    }
  };
});

defineEmits([
  // REQUIRED; need to specify some events that your
  // component will emit through useDialogPluginComponent()
  ...useDialogPluginComponent.emits,
]);

const { dialogRef, onDialogHide, onDialogCancel } = useDialogPluginComponent();

function onCancel() {
  onDialogCancel();
}
</script>

<style scoped lang="scss">
.sidebar {
  display: flex;
  position: fixed;
  flex-direction: column;
  gap: 5%;
  padding-bottom: 80px;
  right: 0;
  min-height: 100vh;
  width: min(80vw, 400px);
  background-color: $deep-space-blue;
  box-shadow: -10px 0px 30px -15px $midnight-blue;
}

nav {
  width: 100%;
}

.button {
  width: 100%;
  font-family: 'SpaceMono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
}
:deep(.q-btn):hover,
:deep(.q-btn):focus {
  color: $turquoise-blast !important;
}

.container {
  margin: auto 0;
}

li:hover {
  color: $turquoise-blast;
}
</style>
