<template>
  <div>
    <section class="content-section">
      <div style="justify-content: center; flex-wrap: wrap;">
         <seminar class="seminar" :seminar="item" v-for="(item,index) in selectedSeminars" :key="index">
        </seminar>
        <h4 v-if="selectedSeminars.length===0">No matching seminars</h4>
      </div>
    </section>

  </div>
</template>

<script>
import dataConfig from '../assets/data.json'
import seminar from './Seminar.vue'

export default {
  name: 'seminars',
  data() {
    return {
      seminars: dataConfig.seminars
    }
  },
  computed: {
    selectedSeminars() {
      return this.getSeminars(this.$route.params.date)
    }
  },
  methods: {
    getSeminars: function(date) {
      // date should be string YYYYMMDD
      const stripped = date.replaceAll('-', '')
      return this.seminars.filter(s => s.date.replaceAll('-', '').startsWith(stripped))
    }
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
.content-section {
  margin-bottom: 1em;
}
</style>
