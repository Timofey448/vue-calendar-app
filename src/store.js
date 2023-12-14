import { reactive } from 'vue';
import { seedData } from './seed';


export const store = {
  state: {
    data: reactive(seedData),
  },
  getActiveDay() {
    return this.state.data.find(function(day) {
      return day.active;
    });
  },
  setActiveDay(dayId) {
    this.state.data.map(function(day) {
      return day.id === dayId ? day.active = true : day.active = false;
    })
  },
  resetEditOfAllEvents() {    
    this.state.data.map(function(day) {
      return day.events.map(function(event) {
        return event.edit = false;
      });
    });
  },
  submitEvent(eventDetails) {
    this.getActiveDay().events.push({
      'details': eventDetails,
      'edit': false
    });
  },
  editEvent(dayId, eventDetails) {
    this.resetEditOfAllEvents();
    const thisDay = this.state.data.find(function(day) {
      return day.id === dayId;
    });
    const thisEvent = thisDay.events.find(function(event) {
      return event.details === eventDetails;
    });
    thisEvent.edit = true;
  },
  updateEvent(dayId, originalEventDetails, newEventDetails) {
    const thisDay = this.state.data.find(function(day) {
      return day.id === dayId;
    });
    const thisEvent = thisDay.events.find(function(event) {
      return event.details === originalEventDetails;
    });
    thisEvent.details = newEventDetails;
    thisEvent.edit = false;
  },
  deleteEvent(dayId, eventDetails) {
    const thisDay = this.state.data.find(function(day) {
      return day.id === dayId;
    });
    const eventIndexToRemove = thisDay.events.findIndex(function(event) {
      return event.details === eventDetails;
    });
    thisDay.events.splice(eventIndexToRemove, 1);
  }
};
