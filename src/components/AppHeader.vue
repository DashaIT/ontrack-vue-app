<script setup>
  import { PAGE_TIMELINE, PAGE_PROGRESS } from '../constants';
  import AppLogo from './AppLogo.vue';
  import AppHeaderProgress from './AppHeaderProgress.vue';
  import { isPageValid } from '../validators';

  const emit = defineEmits({
    navigate: isPageValid
  });
  
</script>

<template>
    <header class="sticky top-0 z-2 flex items-center justify-between border-b bg-white p-3">
    <AppLogo 
      @click="emit('navigate', PAGE_TIMELINE)"
    />
    <AppHeaderProgress 
      @click="emit('navigate', PAGE_PROGRESS)"
    />
  </header>
</template>