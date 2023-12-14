<template>
  <div
    class="mt-2 mb-2 p-2 text-event-color"
    :style="getEventBackgroundColor"
  >
    <div class="p-1">
      <div v-if="!event.edit">
        <div class="mb-2">{{ event.details }}</div>
        <div class="flex">
          <a
            class="bg-app-bg mr-2 p-1 rounded text-white hover:text-green-500"
            @click="editEvent(day.id, event.details)"
          >edit</a>
          <a
            class="bg-app-bg p-1 rounded text-white hover:text-red-500"
            @click="deleteEvent(day.id, event.details)">delete</a>
        </div>
      </div>
      <div class="flex" v-else>
        <input
          type="text"
          :placeholder="event.details"
          class="mr-1"
          v-model="newEventDetails"
          @keypress.enter="updateEvent(day.id, event.details, newEventDetails)"
        />
        <a
          @click="updateEvent(day.id, event.details, newEventDetails)"
          class="bg-app-bg mr-2 p-1 rounded text-white hover:text-green-500">
          ok
        </a>
      </div>      
    </div>
  </div>
</template>

<script setup lang='ts'>
import { store } from '../store.js';
import { ref, computed } from 'vue';
import { Day, Event } from '../types';


const props = defineProps<{
  event: Event,
  day: Day
}>();

const COLORS = ['#FF9999', '#85D6FF', '#99FF99'];
const newEventDetails = ref('');
const getEventBackgroundColor = computed<string>(() => {
  const randomColor = ref(COLORS[Math.floor(Math.random() * COLORS.length)]);
  return `background-color: ${randomColor.value}`;
});

function editEvent(dayId: number, eventDetails: string) {  
  store.editEvent(dayId, eventDetails);         
}

function updateEvent(dayId: number, originalEventDetails: string, updatedEventDetails: string) {
  if (updatedEventDetails === '') {
    updatedEventDetails = originalEventDetails;        
  };
  store.updateEvent(dayId, originalEventDetails, updatedEventDetails);
  newEventDetails.value = '';
}

function deleteEvent(dayId: number, eventDetails: string) {
  store.deleteEvent(dayId, eventDetails);
}
</script>
