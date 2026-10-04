<template>
    <div>
      <section class="content-section">
        <h2 class="section-title">News and Events</h2>
        <div class="news-page">
          <div v-for="year in years" :key="year">
            <h3 class="news-year">{{ year }}</h3>
            <ul>
              <newsitem v-for="entry in newsByYear[year]" :key="entry.index" :item="entry.item" :index="entry.index"/>
            </ul>
          </div>
        </div>
      </section>
    </div>
</template>
<script>
import dataConfig from '../assets/data.json'
import newsitem from './NewsItem.vue'
import groupBy from '../groupBy'

export default {
  name: 'news',
  data() {
    return {
      news: dataConfig.news
    }
  },
  computed: {
    newsByYear() {
      // Keep each item's position in news.yaml: it is the fallback id for its page
      const entries = this.news.map((item, index) => ({ item, index }))
      return groupBy(entries, entry => entry.item.date.slice(0, 4))
    },
    years() {
      return Object.keys(this.newsByYear).sort((a, b) => b - a)
    }
  },
  components: {
    'newsitem': newsitem
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.news-page {
  max-width: 880px;
  margin: 1em auto 0 auto;
  padding: 0 1.5em;
  text-align: left;
}
ul {
  margin: 0;
  padding: 0;
}
.news-year {
  margin: 1.5em 0 0 0;
  padding: 0 0.4em 0.3em 0.4em;
  border-bottom: 2px solid #2c3e50;
  font-size: 1.3em;
  font-weight: 700;
  color: #2c3e50;
}
</style>
