module.exports = {
  content: [
    './src/components/CalendarWeek.vue',
    './src/components/CalendarDay.vue',
    './src/components/CalendarEntry.vue',
    './src/components/CalendarEvent.vue',
    './main.js',
    './src/App.vue',
    '../index.html'
  ],
  theme: {
    extend: {
      colors: {
        'app-bg': '#6e6e6e',
        'day-bg': '#4A4A4A',
        'day-hover': '#4A4A4A',
        'br-color': '#8F8F8F',
        'banner-bg': '#333333',
        'event-color': '#4C4C4C',
        'event-bg-1': '#FF9999',
        'event-bg-2': '#85D6FF',
        'event-bg-3': '#99FF99',
      }
    },
    fontSize: {
      'xs': '12px',
    },
    padding: {
      '1': '4px',
      '2': '8px',
      '3': '12px',
    },
    screens: {
      // '940': '940px'
    }
  },
  plugins: [],
}
