<template>
  <div>
    <canvas
      ref="canvasDotsRef"
      style="position: fixed; left: 0; z-index: -1"
    ></canvas>
    <slot />
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import canvasDots from '@/components/background/connectedDotsCanvas';

const canvasDotsRef = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
  if (!canvasDotsRef.value) return;
  canvasDots(canvasDotsRef.value);
});

let timeoutId: ReturnType<typeof setTimeout> | null = null;
window.addEventListener('resize', () => {
  if (timeoutId) clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    if (!canvasDotsRef.value) return;
    canvasDots(canvasDotsRef.value);
  }, 250);
});
</script>

<style scoped></style>
