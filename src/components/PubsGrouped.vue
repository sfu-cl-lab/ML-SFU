<template>
    <div>
      <pubs :pubs=p :title=getTitle(k) v-for="(p,k) in grouped" :key=k></pubs>
    </div>
</template>
<script>
import pubs from './Pubs.vue'
export default {
  name: 'pubsGrouped',
  data() {
    return {
    }
  },
  computed: {
    grouped() {
      return this.groupPubs(this.pubs)
    }
  },
  methods: {
    getTitle: function(key) {
      const pieces = key.split('_')
      const year = pieces[0]
      const venue = pieces[1]
      let title = ''
      if (year != null) {
        title = year + ' ' + title
      }
      if (venue != null) {
        title = venue.toUpperCase() + ' ' + title
      }
      return title
    },
    groupPubs: function(pubs) {
      const grouped = Object.groupBy(pubs, (elem, k) => elem.year.toString() + '_' + elem.venue.toLowerCase())
      return grouped
    }
  },
  components: {
    'pubs': pubs
  },
  props: ['pubs', 'title']
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .section-title {
    font-weight: 700;
    padding-top: 2em;
    border-bottom: solid 5px var(--text-color);
    display: inline-block;
    font-size: 1.6em;
    letter-spacing: 0.2rem;
  }
  .content-section {
    margin-bottom: 1em;
  }
 </style>
