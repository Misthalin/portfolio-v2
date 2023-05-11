<template>
  <div style="display: flex">
    <p class="years">{{ props.years }}</p>
    <div class="experience-card">
      <p style="font-weight: 500; font-size: 1rem">
        {{ props.position }}
      </p>
      <a
        class="companyLink"
        :href="props.companyLink"
        target="_blank"
        rel="noreferrer"
        >@ {{ props.company }}</a
      >
      <p class="location">{{ props.location }}</p>
      <p class="description">{{ props.description }}</p>
      <p class="technologies">{{ props.technologies }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  years: {
    type: String,
    required: true,
  },
  companyLink: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  technologies: {
    type: String,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.experience-card {
  max-width: 400px;
  padding: 10px;
  margin: 0;
}

p {
  margin: 0;
  padding: 6px;
}

a {
  display: inline-block;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  position: relative;
  transition: $transition;
  color: $turquoise-blast;
  font-weight: normal;
  padding-left: 6px;
  &::after {
    content: '';
    display: block;
    width: 0;
    height: 1px;
    position: relative;
    bottom: 0.15em;
    background-color: $turquoise-blast;
    transition: $transition;
    opacity: 0.5;
  }
  &:hover::after {
    width: 100%;
  }
}

.years {
  background-color: $midnight-blue-opacity;
  color: $cloud-gray;
  font-size: 1.3rem;
  font-weight: 300;
  -webkit-writing-mode: vertical-lr;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  text-align: center;
}

.companyLink {
  font-weight: 500;
  font-size: 0.9rem;
}

.location {
  color: $cloud-gray;
  font-size: 0.8rem;
  font-weight: 300;
  font-family: $font-mono;
}

.description {
  color: $cloud-gray;
  font-weight: 300;
  font-family: $font-sans;
  font-size: 1rem;
}

.technologies {
  color: $frost-white;
  font-family: $font-sans;
  font-size: 0.8rem;
  font-weight: 300;
}
</style>
