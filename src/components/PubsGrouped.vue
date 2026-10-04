<template>
    <div class="pubs-grouped">
      <div v-for="group in yearGroups" :key="group.year">
        <h3 class="pub-year" v-if="yearGroups.length > 1">{{ group.year }}</h3>
        <pubs :pubs=venue.pubs :title=venue.name :show-venue="false" v-for="venue in group.venues" :key="venue.key"></pubs>
      </div>
    </div>
</template>
<script>
import pubs from './Pubs.vue'
import groupBy from '../groupBy'
export default {
  name: 'pubsGrouped',
  data() {
    return {
    }
  },
  computed: {
    yearGroups() {
      // pubs.yaml is newest first, so years and venues keep that order
      const byYear = groupBy(this.pubs, p => p.year.toString())
      const years = Object.keys(byYear).sort((a, b) => b - a)
      return years.map(year => {
        const byVenue = groupBy(byYear[year], p => p.venue.toLowerCase())
        const venues = Object.keys(byVenue).map(key => ({
          key: key,
          name: this.getVenueName(byVenue[key][0].venue) + ' ' + year,
          pubs: byVenue[key]
        }))
        return { year, venues }
      })
    }
  },
  methods: {
    getVenueName: function(venue) {
      // e.g. "NeurIPS workshop" and "NeurIPS Workshop" are the same venue
      return venue.replace(/\bworkshop\b/, 'Workshop')
    }
  },
  components: {
    'pubs': pubs
  },
  props: ['pubs']
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pubs-grouped {
  max-width: 920px;
  margin: 0 auto;
  padding: 0 1.5em;
  text-align: left;
}
.pub-year {
  margin: 1.8em 0 0 0;
  padding: 0 0.2em 0.3em 0.2em;
  border-bottom: 2px solid #2c3e50;
  font-size: 1.3em;
  font-weight: 700;
  color: #2c3e50;
}
</style>
