<template>
  <section id="about">
    <div class="grid-container">
      <img
        src="@/assets/portrait.webp"
        width="200"
        height="200"
        alt="Portrait image of Adrian"
        class="portrait"
      />
    </div>
    <div class="text-description">
      <h3 style="font-size: 1.2rem">About</h3>
      <p>
        I believe in placing the user at the center of the development process
        and focus on creating user-friendly and universally designed
        applications.
      </p>
      <p>
        A crucial part of my learning process involves making mistakes and
        learning from them, which I believe helps me grow both professionally
        and personally. I thrive in challenging projects that allow me to
        stretch and expand my expertise.
      </p>
      <p>
        Throughout my time as a student and in the workforce, I have
        collaborated with a diverse range of people and I am always open to
        sharing knowledge and experiences with others. I look forward to
        bringing my skills and enthusiasm to new projects and challenges, where
        I can contribute to creating engaging and inclusive user experiences.
      </p>
      <div class="contact">
        <div
          style="
            display: flex;
            align-items: center;
            gap: 12px;
            margin-top: 12px;
          "
        >
          <q-icon :name="evaPhoneOutline" size="sm" />
          <a href="tel:+4795496830" target="_blank"> +47 954 96 830 </a>
        </div>

        <div style="display: flex; align-items: center; gap: 12px">
          <q-icon :name="evaEmailOutline" size="sm" />
          <a
            href="mailto:adrian.n.riise@gmail.com?subject=Portfolio Inquiry"
            target="_blank"
          >
            adrian.n.riise@gmail.com
          </a>
        </div>
        <div style="display: flex; align-items: center; gap: 12px">
          <q-icon :name="evaLinkedinOutline" size="sm" />
          <a href="https://www.linkedin.com/in/adrianriise/" target="_blank">
            linkedin.com/in/adrianriise
          </a>
        </div>
        <div style="display: flex; align-items: center; gap: 12px">
          <q-icon :name="evaGithubOutline" size="sm" />
          <a href="https://github.com/Misthalin" target="_blank">
            github.com/Misthalin
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  evaLinkedinOutline,
  evaEmailOutline,
  evaPhoneOutline,
  evaGithubOutline,
} from '@quasar/extras/eva-icons';
</script>

<style scoped lang="scss">
.contact {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 4em;
}
a {
  text-decoration: none;
  text-decoration-skip-ink: auto;
  transition: $transition;
  color: $frost-white;
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
  &:hover {
    color: $turquoise-blast;
  }
}
.text-description {
  background-color: $twilight-blue-opacity;
  padding: 25px;
  place-self: center;
  max-width: 65ch;
  font-size: 1rem;
  font-family: $font-mono;
  border-radius: 5px;
}

.contact {
  place-self: center;
  font-size: 0.9rem;
  font-family: $font-mono;
  border-radius: 5px;
  &-inner {
    padding: 25px;
  }
}

h2 {
  font-weight: 500;
  place-self: center;
  margin-bottom: 25px;
  font-family: $font-mono;
  color: $cloud-gray;
}
section {
  max-width: 950px;
  padding-top: 4em;
  margin-top: 4em;
  display: flex;
}
.grid-container {
  place-self: center;
  display: flex;
  flex-direction: row;
  gap: 25px;
}

img {
  border: 2px solid $deep-space-blue;
}

.portrait {
  place-self: center;
  max-width: 100%;
  height: auto;
  border-radius: 50%;
}
</style>
