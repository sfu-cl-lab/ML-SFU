<template>
  <article>
    <h3><a :href="workshop.url">{{workshop.title }}</a></h3>
      <div><b>{{getDayOfWeek(workshop.date)}} {{workshop.date}}</b></div>
      <div v-if="workshop.location"><b>{{workshop.location}}</b></div>
      <div v-if="workshop.roles">
        <div v-for="(role,index) in workshop.roles" :key="'r-' + index">
          <b>{{role.title | uppercase }}:</b> {{role.name}}
        </div>
      </div>
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
  filters: {
    uppercase: function (value) {
      if (!value) return ''
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  props: ['workshop']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
article div {
    margin: 0.25em auto 0.25em auto;
}
</style>
