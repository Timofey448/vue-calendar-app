<template>
  <div class="p-3 bg-white rounded">
    <input
      type="text"
      placeholder="New Event"
      class="mb-1 hover:bg-gray-100"
      v-model="inputEntry"
      @keypress.enter="submitEvent(inputEntry)"
      required      
    />
    <div class="text-xs mb-2">
      <p class="mb-3">Day of Event:
        <span class="font-bold text-green-500">{{ titleOfActiveDay }}</span>
      </p>
      <a
        class="p-1 border-2 border-green-500 hover:border-green-300 text-green-500 font-bold  rounded cursor-pointer"
        @click="submitEvent(inputEntry)"  
      >Submit</a>
    </div>
    <p class="text-red-500 text-xs" v-if="error">
      You must type something first!
    </p>
  </div>
</template>

<script setup lang="ts">
import { store } from '../store';
import { ref, computed } from 'vue';


const inputEntry = ref('');
const error = ref(false);
const titleOfActiveDay = computed<string>(() => {
  return store.getActiveDay().fullTitle;
});

function submitEvent(eventDetails: string) {
  if (inputEntry.value === '') return error.value = true;
  store.submitEvent(eventDetails);
  inputEntry.value = '';
}
</script>
