<script setup>
  import AppLogo from './AppLogo.vue';
  import AppHeaderProgress from './AppHeaderProgress.vue';

  const emit = defineEmits(['goToTimeline','goToProgress'])
</script>

<template>
    <header class="sticky top-0 z-2 flex items-center justify-between border-b bg-white p-3">
    <AppLogo @click="emit('goToTimeline')"/>
    <AppHeaderProgress @click="emit('goToProgress')"/>
  </header>
</template>