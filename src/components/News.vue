<template>
    <div>
      <section class="content-section">
        <div>
          <h2 class="section-title">News and Events</h2>
          <div style="display: flex; justify-content: center; flex-wrap: wrap;">
            <newsitem class="news" :item="item" v-for="(item,index) in news" :key="index" :id="index"/>
          </div>
        </div>
      </section>
    </div>
</template>
<script>
import dataConfig from '../assets/data.json'
import newsitem from './NewsItem.vue'

export default {
  name: 'news',
  data() {
    return {
      news: dataConfig.news
    }
  },
  computed: {
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
.news {
  margin: 1em
}
</style>
