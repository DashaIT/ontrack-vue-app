<script setup> 
  import {PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS} from './constants';
  import AppHeader from '@/components/AppHeader.vue';
  import AppNavigation from '@components/AppNavigation.vue';
  import AppTimeline from '@/pages/AppTimeline.vue';
  import AppActivities from '@/pages/AppActivities.vue';
  import AppProgress from '@/pages/AppProgress.vue';
  import {ref} from 'vue';


  const currentPage = ref(normalizePageHash());

  function normalizePageHash() {
    const hash = window.location.hash.slice(1);
    if (Object.keys([PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS]).includes(hash)) {
      return hash
    }

    window.location.hash = PAGE_TIMELINE;
    return PAGE_TIMELINE
  }
  
</script>

<template>
  <AppHeader/>
  <main class="flex flex-grow flex-col">
    <AppTimeline v-show="currentPage === PAGE_TIMELINE"/>
    <AppActivities v-show="currentPage === PAGE_ACTIVITIES"/>    
    <AppProgress v-show="currentPage === PAGE_PROGRESS"/>
  </main>
  <AppNavigation :current-page="currentPage" @navigate="currentPage = $event"/>
</template>

