<template>
  <div>
    <section class="content-section">
      <div>
        <h2 class="section-title">SFU VCR/AI Seminars</h2>
        <div style="display:flex; justify-content:space-around;">
        We hold a series of seminars where external speakers present about their work in visual computing, robotics, and AI.  <br/> Video recordings are made available internally to the SFU community only.
        </div>
      </div>
      <h3 class="section-title">Upcoming seminars</h3>
      <div style="display: flex; justify-content: center; flex-wrap: wrap;">
        <seminar class="seminar" :seminar="item" v-for="(item,index) in futureSeminars" :key="index">
        </seminar>
      </div>
      <h3 class="section-title">Past seminars</h3>
      <div style="display: flex; justify-content: center; flex-wrap: wrap;">
        <seminar class="seminar" :seminar="item" v-for="(item,index) in pastSeminars" :key="index">
        </seminar>
      </div>
    </section>

  </div>
</template>

<script>
import dataConfig from '../assets/data.json'
import seminar from './Seminar.vue'

const now = new Date().getTime()
dataConfig.seminars.forEach(s => { s._millisecs = Date.parse(s.date) })

export default {
  name: 'seminars',
  data() {
    return {
      seminars: dataConfig.seminars,
      pastSeminars: dataConfig.seminars.filter(s => s._millisecs <= now),
      futureSeminars: dataConfig.seminars.filter(s => s._millisecs > now).sort((a, b) => a._millisecs - b._millisecs)
    }
  },
  computed: {
  },
  components: {
    'seminar': seminar
  },
  mounted() {
  }
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
