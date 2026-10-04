<template>
  <div>
    <section class="content-section seminar-detail">
      <router-link class="back-link" to="/seminars">&larr; All seminars</router-link>
      <seminar :seminar="item" v-for="(item,index) in selectedSeminars" :key="index">
      </seminar>
      <h4 v-if="selectedSeminars.length===0" class="empty">No matching seminars</h4>
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
      if (this.$route.params.key != null) {
        return this.getSeminarsByKey(this.$route.params.key)
      } else {
        return this.getSeminars(this.$route.params.date)
      }
    }
  },
  methods: {
    getSeminars: function(date) {
      // date should be string YYYYMMDD
      const stripped = date.replaceAll('-', '')
      return this.seminars.filter(s => s.date.replaceAll('-', '').startsWith(stripped))
    },
    getSeminarsByKey: function(key) {
      return this.seminars.filter(s => s.key === key)
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
.seminar-detail {
  max-width: 880px;
  margin: 0 auto;
  padding: 1.5em 1.5em 0 1.5em;
  text-align: left;
}
.back-link {
  font-weight: 600;
  color: var(--text-color);
}
.empty {
  margin-top: 1em;
}
</style>
