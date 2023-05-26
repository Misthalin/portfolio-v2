<template>
  <section id="main">
    <div style="margin: 0 auto">
      <h1>Hi there! My name is</h1>
      <h2 class="big-heading">Adrian N. Riise.</h2>
      <h3 class="big-heading">I weave web magic!</h3>
      <p>
        My goal is to create web experiences that are not just functional, but
        also user-friendly and engaging. I am currently honing my skills and
        expanding my expertise by working on web apps for
        <a href="https://www.spk.no/" target="_blank" rel="noreferrer"
          >Statens Pensjonskasse</a
        >.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
section {
  min-height: 100vh;
}

div {
  padding: 10px;
  border-radius: 10px;
}

h1 {
  margin: 12px 0px 10px 4px;
  color: $turquoise-blast;
  font-family: $font-mono;
  font-size: clamp(1rem, 5vw, 1.1rem);
  font-weight: normal;
  line-height: 0;
}

h3 {
  margin-top: 0px;
  color: $cloud-gray;
  line-height: 0.7;
}

p {
  font-weight: normal;
  font-family: $font-mono;
  margin-top: 25px;
  font-size: clamp(1rem, 5vw, 1.1rem);
  color: $cloud-gray;
  width: 100%;
  & > a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: $transition;
    color: $turquoise-blast;
    font-weight: normal;
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
  }
  & > a:hover::after {
    width: 100%;
  }
}
</style>
