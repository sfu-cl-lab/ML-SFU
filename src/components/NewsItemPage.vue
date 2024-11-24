<template>
     <news_item_detailed :item=getItem($route.params.id)></news_item_detailed>
</template>
<script>
import dataConfig from '../assets/data.json'
import newsItemDetailed from './NewsItemDetailed.vue'
export default {
  name: 'news_item_page',
  data() {
    return {
      news: dataConfig.news,
      pubs: dataConfig.pubs
    }
  },
  computed: {

  },
  methods: {
    getItem: function(id) {
      let news = this.news
      let item = news[id]
      if (item == null) {
        news = news.filter(item => item.shortname === id)
        item = news[0]
      }
      return item ? this.populateItem(item) : null
    },
    populateItem: function(item) {
      const pubtypes = ['conference', 'pubs']
      if (pubtypes.indexOf(item.type) >= 0) {
        let filteredPubs = this.pubs
        if (item.year != null) {
          const yearstring = item.year.toString()
          filteredPubs = filteredPubs.filter(p => p.year.toString() === yearstring)
        }
        if (item.venue != null) {
          const venue = item.venue.toLowerCase()
          const venueWorkshop = venue + ' workshop'
          filteredPubs = filteredPubs.filter(p => p.venue.toLowerCase().startsWith(venue))
          const groupedPubs = {}
          for (let p of filteredPubs) {
            let v = p.venue.toLowerCase()
            if (v.endsWith('workshop')) {
              v = venueWorkshop
            }
            if (v in groupedPubs) {
              groupedPubs[v].push(p)
            } else {
              groupedPubs[v] = [p]
            }
          }
          const groups = []
          const mainPubs = groupedPubs[venue]
          if (mainPubs) {
            groups.push({ title: 'Main Conference Papers', pubs: mainPubs })
          }
          for (let v in groupedPubs) {
            if (v !== venue && v !== venueWorkshop) {
              const title = groupedPubs[v][0].venue.substring(venue.length).trim()
              groups.push({ title: title + ' Papers', pubs: groupedPubs[v] })
            }
          }
          const workshopPubs = groupedPubs[venueWorkshop]
          if (workshopPubs) {
            groups.push({ title: 'Workshop Papers', pubs: workshopPubs })
          }
          item.pubGroups = groups
        }
      }
      return item
    }
  },
  components: {
    'news_item_detailed': newsItemDetailed
  },
  mounted() {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
article img {
  width: 100%;
  height: 100%;
  /* border-radius: 50px; */
  /* border: solid 1px #fff; */
  border-color: var(--text-color);
}

.img-wrapper {
    display: inline-block;
    width: 100px;
    height: 150px;
    color: #fff;
    font-size: 20px;
    margin: 0 auto 0 auto;
}
</style>
