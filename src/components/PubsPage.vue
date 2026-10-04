<template>
  <div>
    <section class="content-section">
      <h2 class="section-title">{{ getTitle($route.params.year, $route.params.venue) }}</h2>
      <nav class="year-filter">
        <router-link to="/pubs" exact>All</router-link>
        <router-link v-for="year in years" :key="year" :to="'/pubs/' + year">{{ year }}</router-link>
      </nav>
      <pubs :pubs=filtered></pubs>
    </section>
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
.year-filter {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1.2em 1em 0 1em;
}
.year-filter a {
  margin: 0.25em;
  padding: 0.3em 1em;
  border: 1px solid var(--text-color);
  border-radius: 999px;
  font-weight: 600;
  color: var(--text-color);
  transition: all 0.2s;
}
.year-filter a:hover,
.year-filter a.router-link-active {
  background-color: var(--text-color);
  color: #fff;
}
</style>
