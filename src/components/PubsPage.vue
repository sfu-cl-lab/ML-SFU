<template>
  <div>
    <div v-if="$route.params.venue == undefined">
      <br/>
      <span v-for="year in years" :key="year">
      <a :href="'../#/pubs/' + year">
        <el-button>
          {{year}}
        </el-button>
      </a>
    </span>
    </div>
    <pubs :pubs=filtered :title="getTitle($route.params.year,$route.params.venue)"></pubs>
  </div>
</template>
<script>
import dataConfig from '../assets/data.json'
import pubsVue from './PubsGrouped.vue'
export default {
  name: 'pubsall',
  data() {
    return {
      pubs: dataConfig.pubs
    }
  },
  computed: {
    filtered() {
      return this.getFilteredPubs(this.pubs, this.$route.params.year, this.$route.params.venue)
    },
    years() {
      const years = new Set(this.pubs.map(p => p.year))
      return [...years]
    }
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
        filteredPubs = filteredPubs.filter(p => p.venue.toLowerCase().split(' ')[0] === lower)
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
