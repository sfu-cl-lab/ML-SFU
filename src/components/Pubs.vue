<template>
    <div>
      <section class="content-section">
        <h3 class="section-title" v-if="$route.params.venue && $route.params.year">SFU at {{$route.params.venue.toUpperCase()}} {{$route.params.year}}</h3>
        <h3 class="section-title" v-else>Publications</h3>
        <div style="display: flex; justify-content: center; flex-wrap: wrap;">
          <pub class="pub" :pub="item" v-for="(item,index) in filtered($route.params.year,$route.params.venue)" :key="index">
          </pub>
        </div>
      </section>
    </div>
</template>
<script>
import dataConfig from '../assets/data.json'
import pub from './Pub.vue'
export default {
  name: 'seminars',
  data() {
    return {
      pubs: dataConfig.pubs
    }
  },
  computed: {

  },
  methods: {
    filtered: function(year, venue) {
      let pubs = this.pubs
      if (year != null) {
        const yearstring = year.toString()
        pubs = pubs.filter(p => p.year.toString() === yearstring)
      }
      if (venue != null) {
        const lower = venue.toLowerCase()
        pubs = pubs.filter(p => p.venue.toLowerCase() === lower)
      }
      return pubs
    }
  },
  components: {
    'pub': pub
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
