<template>
  <div class="flex flex-col justify-center items-center p-1 min-h-screen bg-app-bg">
    <CalendarWeek />
    <CalendarEntry />
  </div>  
</template>

<script setup lang='ts'>
import CalendarWeek from './components/CalendarWeek.vue';
import CalendarEntry from './components/CalendarEntry.vue';
</script>
