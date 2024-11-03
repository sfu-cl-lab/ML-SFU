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
      const groupedKeys = Object.keys(grouped)
      groupedKeys.sort((a, b) => {
        const p1 = a.split(' ', 2)
        const p2 = b.split(' ', 2)
        if (p1[0] < p2[0]) {
          return 0
        } else if (p1[0] > p2[0]) {
          return 0
        } else {
          if (a < b) {
            return -1
          } else if (b > a) {
            return +1
          } else {
            return 0
          }
        }
      })
      const ordered = {}
      for (let k of groupedKeys) {
        ordered[k] = grouped[k]
      }
      return ordered
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
 </style>
