<template>
    <pubs :pubs=getFilteredPubs(pubs,$route.params.year,$route.params.venue) :title="getTitle($route.params.year,$route.params.venue)"></pubs>
</template>
<script>
import dataConfig from '../assets/data.json'
import pubsVue from './Pubs.vue'
export default {
  name: 'pubsall',
  data() {
    return {
      pubs: dataConfig.pubs
    }
  },
  computed: {

  },
  methods: {
    getTitle: function(year, venue) {
      let title = 'Publications'
      if (year != null) {
        title = year + ' ' + title
      }
      if (venue != null) {
        title = venue.toUpperCase() + ' ' + title
      }
      return title
    },
    getFilteredPubs: function(pubs, year, venue) {
      let filteredPubs = pubs
      if (year != null) {
        const yearstring = year.toString()
        filteredPubs = filteredPubs.filter(p => p.year.toString() === yearstring)
      }
      if (venue != null) {
        const lower = venue.toLowerCase()
        filteredPubs = filteredPubs.filter(p => p.venue.toLowerCase() === lower)
      }
      return filteredPubs
    }
  },
  components: {
    'pubs': pubsVue
  },
  mounted() {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
