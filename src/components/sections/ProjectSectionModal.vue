<template>
  <q-dialog
    ref="dialogRef"
    @hide="onDialogHide"
    transition-show="slide-up"
    transition-hide="slide-down"
  >
    <div class="modal-container">
      <div class="modal-header">
        <div style="margin-left: 25px">
          <q-icon :name="evaFileTextOutline" size="lg" />
        </div>
        <div class="modal-title">{{ props.content.heading }}</div>
        <q-btn
          square
          flat
          dense
          :icon="evaCloseOutline"
          style="margin-right: 14px"
          size="xl"
          @click="onCancel"
        />
      </div>
      <q-tabs
        v-model="tab"
        inline-label
        mobile-arrows
        indicator-color="primary"
        align="justify"
      >
        <q-tab tabindex="0" name="description" label="Description" />
        <q-tab tabindex="0" name="features" label="Features" />
        <q-tab tabindex="0" name="technical" label="Technical" />
        <q-tab tabindex="0" name="improvements" label="Improvements" />
      </q-tabs>
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="description">
          <div class="text-h6">Description</div>
          <template v-for="line in props.content.description" :key="line">
            <p class="modal-description">
              {{ line }}
            </p>
          </template>
        </q-tab-panel>

        <q-tab-panel name="features">
          <div class="text-h6">Features</div>
          <template v-for="line in props.content.keyFeatures" :key="line">
            <p class="modal-description">
              {{ line }}
            </p>
          </template>
        </q-tab-panel>

        <q-tab-panel name="technical">
          <div class="text-h6">Technical</div>
          <template v-for="line in props.content.technicalOverview" :key="line">
            <p class="modal-description">
              {{ line }}
            </p>
          </template>
        </q-tab-panel>

        <q-tab-panel name="improvements">
          <div class="text-h6">Improvements</div>
          <template
            v-for="line in props.content.challengesAndFutureImprovements"
            :key="line"
          >
            <p class="modal-description">
              {{ line }}
            </p>
          </template>
        </q-tab-panel>
      </q-tab-panels>
      <div style="display: flex">
        <q-btn
          stack
          square
          no-caps
          flat
          label="View code"
          :href="content.githubLink"
          target="_blank"
          style="width: 100%"
          :icon="evaGithubOutline"
        />
        <q-btn
          stack
          square
          no-caps
          flat
          :href="content.previewLink"
          target="_blank"
          style="width: 100%"
          label="Visit site"
          :icon="evaExternalLinkOutline"
        />
      </div>
    </div>
  </q-dialog>
</template>

<script setup lang="ts">
import {
  evaCloseOutline,
  evaExternalLinkOutline,
  evaFileTextOutline,
  evaGithubOutline,
} from '@quasar/extras/eva-icons';
import { useDialogPluginComponent } from 'quasar';
import { ref } from 'vue';

const tab = ref('description');

const props = defineProps<{
  content: ContentItem;
}>();

interface ContentItem {
  heading: string;
  description: string;
  keyFeatures: string[];
  challengesAndFutureImprovements: string[];
  technicalOverview: string[];
  githubLink: string;
  previewLink: string;
}

defineEmits([
  // REQUIRED; need to specify some events that your
  // component will emit through useDialogPluginComponent()
  ...useDialogPluginComponent.emits,
]);

const { dialogRef, onDialogHide, onDialogCancel } = useDialogPluginComponent();

function onCancel() {
  tab.value = 'description';
  onDialogCancel();
}
</script>

<style scoped lang="scss">
.modal-container {
  background-color: $deep-space-blue;
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 100vw;
  max-width: 950px;
}

.modal-title {
  color: $frost-white;
  font-weight: 900;
  font-family: $font-mono;
  padding: 12px;
}

:deep(.q-tab):hover,
:deep(.q-btn):hover {
  color: $turquoise-blast !important;
}

:deep(.q-tab-panels) {
  background-color: $deep-space-blue;
  flex: 1;
  overflow: auto;
}

:deep(.q-tabs) {
  flex-shrink: 0;
}

.modal-header {
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
}
</style>
