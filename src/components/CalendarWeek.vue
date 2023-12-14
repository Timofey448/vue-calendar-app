<template>
  <div class="flex flex-wrap justify-center sm:mx-auto sm:max-w-lg mb-12">
    <CalendarDay      
      v-for="day in sharedState.data"
      :key="day.id"
      :day="day"      
    />
  </div>  
</template>

<script setup lang="ts">
import { store } from '../store';
import CalendarDay from './CalendarDay.vue';

const sharedState = store.state;
</script>
