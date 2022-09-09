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
      <div class="flex" v-if="event.edit">
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

<script>
import { store } from '../store.js';

export default {
  name: 'CalendartEvent',
  props: ['event', 'day'],
  data() {
    return {
      newEventDetails: "",
    }
  },
  methods: {
    editEvent(dayId, eventDetails) {  
      store.editEvent(dayId, eventDetails);         
    },
    updateEvent(dayId, originalEventDetails, updatedEventDetails) {
      if (updatedEventDetails === "") {
        updatedEventDetails = originalEventDetails;        
      };
      store.updateEvent(dayId, originalEventDetails, updatedEventDetails);
      this.newEventDetails = "";
    },
    deleteEvent(dayId, eventDetails) {
      store.deleteEvent(dayId, eventDetails);
    },
  },
  computed: {
    getEventBackgroundColor() {
      const colors = ['#FF9999', '#85D6FF', '#99FF99'];
      let randomColor = colors[Math.floor(Math.random() * colors.length)];
      return `background-color: ${randomColor}`;
    },
  }
}
</script>

