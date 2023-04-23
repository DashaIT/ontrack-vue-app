<script setup>
  import AppNavigationItem from './AppNavigationItem.vue';
  import { ClockIcon, RocketLaunchIcon, ArrowTrendingUpIcon } from '@heroicons/vue/24/outline';
  import {PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS} from '../constants';  
  
  const navItems = {
    [PAGE_TIMELINE]: ClockIcon,
    [PAGE_ACTIVITIES]: RocketLaunchIcon,
    [PAGE_PROGRESS]: ArrowTrendingUpIcon
  }

  defineProps(['currentPage']);
  const emit = defineEmits(['navigate']);
</script>

<template>
    <nav class="sticky bottom-0 z-2 bg-white">
      <ul class="flex items-center justify-around border-t">
          <AppNavigationItem 
            v-for="(icon, page) in navItems" 
            :key="page" 
            :href="`#${page}`"
            :class="{'bg-gray-200 pointer-events-none' : page === currentPage}"
            @click="emit('navigate', page)"
            >
              <component :is="icon" class="h-6 w-6"/>         
              {{ page }}
          </AppNavigationItem>
      </ul>
  </nav>
</template>