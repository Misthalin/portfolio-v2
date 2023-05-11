<template>
  <a href="/">
    <div class="circle">
      <span ref="circleSpan">A</span>
    </div>
  </a>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.circle {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: $turquoise-blast;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease-in-out;
  clip-path: circle(52% at 50% 50%);
  & span {
    font-family: Arial, Helvetica, sans-serif, Tahoma, Geneva, Verdana;
    font-size: 2.5em;
    font-weight: bold;
    color: $twilight-blue;
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
    pointer-events: none;
  }
  &:hover {
    transform: scale(1.2);
    background-color: rgba(255, 255, 255, 0);
    box-shadow: none;
    & span {
      color: $turquoise-blast;
      font-size: 0.8em;
      pointer-events: none;
      transform: rotate(720deg);
    }
  }
}
</style>
