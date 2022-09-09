import { reactive } from 'vue';
import { seedData } from './seed';

export const store = {
  state: {
    data: reactive(seedData)
  },
  getActiveDay() {
    return this.state.data.find(function(day) {
      return day.active;
    })    
  },
  setActiveDay(dayId) {
    this.state.data.map(function(dayObj) {
      return dayObj.id === dayId ? dayObj.active = true : dayObj.active = false;
    });
  },
  submitEvent(eventDetails) {
    const activeDay = this.getActiveDay();
    activeDay.events.push({"details": eventDetails, "edit": false});
  },
  editEvent(dayId, eventDetails) {
    this.resetEditOfAllEvents();    
    const dayObj = this.state.data.find(function(day) {
      return day.id === dayId;
    });
    const eventObj = dayObj.events.find(function(event) {
      return event.details === eventDetails;
    });
    eventObj.edit = true;
  },
  resetEditOfAllEvents() {    
    this.state.data.map(function(dayObj) {
      return dayObj.events.map(function(event) {
        return event.edit = false;
      });
    });
  },
  updateEvent(dayId, originalEventDetails, newEventDetails) {
    const dayObj = this.state.data.find(function(day) {
      return day.id === dayId;
    });
    const eventObj = dayObj.events.find(function(event) {
      return event.details === originalEventDetails;
    });
    eventObj.details = newEventDetails;
    eventObj.edit = false;
  },
  deleteEvent (dayId, eventDetails) {
    const dayObj = this.state.data.find(function(day) {
      return day.id === dayId;
    });
    const eventIndexToRemove = dayObj.events.findIndex(function(event) {
      return event.details === eventDetails
    });
    dayObj.events.splice(eventIndexToRemove, 1);
  },
};
/*
State - объект  с data, соотв-ий данным seedData в seed.js
На эти данные мы можем ссылаться в наших компонентах.
State расположен вне контекста наших компонентов.

Используем метод 'reactie', чтбы наше приложение всегда
знала о том, что наш store рективен, то есть на любое
изменение в state мы увидим изменения на странице приложения
*/
