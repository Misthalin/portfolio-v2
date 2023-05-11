<template>
  <section id="experience">
    <h2>
      <!-- <span style="color: var(--darkest)">//</span>  -->
      Experience
    </h2>
    <div>
      <ExperienceCard
        years="2023 - >"
        position="System Developer"
        companyLink="https://www.spk.no/"
        company="Statens Pensjonskasse"
        location="Oslo, Norway"
        description="Working on web apps for both business and public services, as well as internal use. Responsibilities span across design, programming, testing, deployment, and follow-up of applications."
        technologies="React • Java • Kotlin • TypeScript"
      />
      <ExperienceCard
        years="2022 - 2023"
        position="Front End Developer"
        companyLink="https://www.junglemap.com/"
        company="Junglemap"
        location="Oslo, Norway"
        description="Converting and redesigning Junglemap's NanoLearning platform from previous Angular codebase to Vue 3"
        technologies="Vue • Quasar • Vite • TypeScript"
      />
      <ExperienceCard
        years="2020 - 2023"
        position="Bachelor's degree, Web Development"
        companyLink="https://www.ntnu.no/studier/bwu"
        company="NTNU"
        location="Gjøvik, Norway"
        description="The study provides in-depth knowledge on how the World Wide Web works and the technological standards and best practices used to build robust web solutions."
        technologies="React • NodeJS • MySQL • MongoDb"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import ExperienceCard from './ExperienceSectionCard.vue';
</script>

<style scoped lang="scss">
section {
  max-width: 950px;
  padding-top: 4em;
  margin-top: 4em;
}

h2 {
  font-weight: 500;
  font-size: 2rem;
  margin-bottom: 25px;
  font-family: $font-mono;
  color: $cloud-gray;
}

div {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  width: 100%;
}

@media (max-width: 450px) {
  div {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }
}
</style>
