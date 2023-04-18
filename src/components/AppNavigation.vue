<script setup>
import {ref} from 'vue';
  import AppNavigationItem from './AppNavigationItem.vue';
  import {PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS} from '../constants';
  import { ClockIcon, RocketLaunchIcon, ArrowTrendingUpIcon } from '@heroicons/vue/24/outline';
 const navItems = {
    [PAGE_TIMELINE]: ClockIcon,
    [PAGE_ACTIVITIES]: RocketLaunchIcon,
    [PAGE_PROGRESS]: ArrowTrendingUpIcon
  }

  const currentPage = ref(normalizePageHash());

  function normalizePageHash() {
    const hash = window.location.hash.slice(1);
    if (Object.keys(navItems).includes(hash)) {
      return hash
    }

    window.location.hash = PAGE_TIMELINE;
    return PAGE_TIMELINE
  }
</script>

<template>
    <nav class="sticky bottom-0 z-2 bg-white">
      <ul class="flex items-center justify-around border-t">
          <AppNavigationItem 
            v-for="(icon, page) in navItems" 
            :key="page" 
            :href="`#${page}`"
            :class="{'bg-gray-200 pointer-events-none' : page === currentPage}"
            @click="currentPage = page"
            >
              <component :is="icon" class="h-6 w-6"/>         
              {{ page }}
          </AppNavigationItem>
      </ul>
  </nav>
</template>