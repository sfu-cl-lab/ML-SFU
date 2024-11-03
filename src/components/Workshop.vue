<template>
  <article>
    <h3><a :href="workshop.url">{{workshop.title }}</a></h3>
      <div><b>{{getDayOfWeek(workshop.date)}} {{workshop.date}}</b>
      <b v-if="workshop.location">({{workshop.location}})</b></div>
      <div v-if="workshop.advisor"><b>Advisor:</b> {{workshop.advisor}}</div>
      <div v-if="workshop.organizer"><b>Organizer:</b> {{workshop.organizer}}</div>
      <div v-if="workshop.speaker"><b>Speaker:</b> {{workshop.speaker}}</div>
  </article>
</template>

<script>
export default {
  name: 'workshop',
  data() {
    return {
    }
  },
  methods: {
    getDayOfWeek: function(dateStr) {
      var date = new Date(dateStr + 'T12:00:00.000-07:00')
      return date.toLocaleDateString('en-US', { weekday: 'long' })
    }
  },
  props: ['workshop']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
