<template>
  <div
    :aria-label="`Read more about project: ${props.heading}`"
    class="project-card"
    @click="openModal"
    @keydown.enter="openModal"
    tabindex="0"
  >
    <div class="gradient"></div>
    <div class="content">
      <div class="flex-row">
        <h3>{{ props.heading }}</h3>
        <div class="icon">
          <q-icon :name="evaExpandOutline" size="2rem" />
        </div>
      </div>

      <div class="flex-row">
        <p class="technologies">{{ props.technologies }}</p>
        <p class="date">
          {{ props.month }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { evaExpandOutline } from '@quasar/extras/eva-icons';
import ProjectSectionModal from './ProjectSectionModal.vue';

const $q = useQuasar();

function openModal() {
  $q.dialog({
    component: ProjectSectionModal,
    componentProps: {
      content: props,
    },
  });
}

const props = defineProps({
  heading: {
    type: String,
    required: true,
  },
  technologies: {
    type: String,
    required: true,
  },
  githubLink: {
    type: String,
    required: true,
  },
  previewLink: {
    type: String,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
  description: {
    type: Array,
    required: true,
  },
  keyFeatures: {
    type: Array,
    required: true,
  },
  technicalOverview: {
    type: Array,
    required: true,
  },
  challengesAndFutureImprovements: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped lang="scss">
h3 {
  margin: 0;
  font-weight: 500;
  text-align: left;
  font-size: 1rem;
  transition: $transition;
}

p {
  transition: $transition;
  padding: 0;
  margin: 0;
}

.icon {
  display: flex;
  flex-direction: row;
  place-content: center;
  color: $cloud-gray;
}

.technologies {
  text-align: center;
  color: $frost-white;
  font-family: $font-sans;
  font-size: 0.8rem;
  font-weight: 300;
}

.content {
  padding: 25px;
  background-color: $night-sky-gray;
  height: 258px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0 5px 5px 5px;
}

.gradient {
  border-radius: 5px 0 0 0;
  border-bottom: 6px solid $twilight-blue;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  transition: $transition;
  background: linear-gradient(
    45deg,
    $night-sky-gray 42%,
    #00000000 42%,
    #00000000 44%,
    $night-sky-gray 44%,
    $night-sky-gray 48%,
    #00000000 48%
  );
}

.flex-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.project-card {
  display: block;
  height: 300px;
  background-color: #00000000;
  border-radius: 5px;
  transition: $transition;
  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
    & .gradient {
      background: linear-gradient(
        45deg,
        $night-sky-gray 42%,
        #00000000 42%,
        #00000000 44%,
        $night-sky-gray 44%,
        $night-sky-gray 47%,
        $turquoise-blast 47%,
        $turquoise-blast 48%,
        #00000000 48%
      );
    }
    & .content {
      border-bottom: 1px solid $turquoise-blast;

      & h3 {
        color: $turquoise-blast;
      }

      & .icon {
        color: $turquoise-blast;
      }
    }
  }
}

.date {
  font-family: $font-mono;
  font-size: 0.7rem;
  color: $cloud-gray;
}
</style>
