<script setup> 
  import {PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS} from './constants';
  import AppHeader from '@/components/AppHeader.vue';
  import AppNavigation from '@components/AppNavigation.vue';
  import AppTimeline from '@/pages/AppTimeline.vue';
  import AppActivities from '@/pages/AppActivities.vue';
  import AppProgress from '@/pages/AppProgress.vue';
  import {ref} from 'vue';
  import {normalizePageHash} from '@/functions'
  import { generateTimelineItems } from '@/functions';

  const timelineItems = generateTimelineItems();

  const currentPage = ref(normalizePageHash());  

  function goTo(page) {
    currentPage.value = page
  }
  
</script>

<template>
  <AppHeader 
    @navigate="goTo($event)"
  />
  <main class="flex flex-grow flex-col">
    <AppTimeline v-show="currentPage === PAGE_TIMELINE" :timeline-items="timelineItems"/>
    <AppActivities v-show="currentPage === PAGE_ACTIVITIES"/>    
    <AppProgress v-show="currentPage === PAGE_PROGRESS"/>
  </main>
  <AppNavigation :current-page="currentPage" @navigate="goTo($event)"/>
</template>

