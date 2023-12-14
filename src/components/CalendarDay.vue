<template>
  <div
    class="bg-day-bg hover:bg-day-hover/70 text-white text-xs border-l-2 last:border-r-2 border-t-2 border-b-2 border-br-color cursor-pointer"
    @click="setActiveDay(day.id)"
  >
    <div class="flex justify-center bg-banner-bg hover:bg-banner-bg/70 font-bold uppercase p-3">{{ day.abbvTitle }}</div>
      <div class="p-3">
        <div class="flex">{{ day.id }}</div>

        <CalendarEvent 
          v-for="(event, index) in day.events"
          :key="index"
          :day="day"
          :event="event"
        /> 
      </div> 
  </div>  
</template>

<script setup lang="ts">
import { store } from '../store.js';
import { Day } from '../types'
import CalendarEvent from './CalendarEvent.vue';


const props = defineProps<{
  day: Day
}>();

function setActiveDay(dayId: number) {
  store.setActiveDay(dayId);
}
</script>
