<template>
  <div class="flex flex-wrap justify-center sm:mx-auto sm:max-w-lg mb-12">
    <CalendarDay      
      v-for="day in sharedState.data"
      :key="day.id"
      :day="day"      
    />
  </div>  
</template>

<script>
import { store } from '../store';
import CalendarDay from './CalendarDay.vue';

export default {
  name: "CalendarWeek",
  data() {
    return {
      sharedState: store.state // объект  - data: seedData
    }
  },
  components: {
    CalendarDay
  }
}
</script>

