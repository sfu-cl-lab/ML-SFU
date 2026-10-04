<template>
    <section class="pub-group">
      <h4 class="pub-group-title">{{ title || 'Publications' }}</h4>
      <ul>
        <pub :pub="item" :show-venue="showVenue" v-for="(item,index) in pubs" :key="index">
        </pub>
      </ul>
    </section>
</template>
<script>
import pub from './Pub.vue'
export default {
  name: 'pubs',
  data() {
    return {
    }
  },
  components: {
    'pub': pub
  },
  props: {
    pubs: Array,
    title: String,
    // Not needed when the group title already names the venue
    showVenue: { type: Boolean, default: true }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pub-group {
  margin-top: 1.4em;
  text-align: left;
}
ul {
  margin: 0;
  padding: 0;
}
.pub-group-title {
  margin: 0 0 0.2em 0;
  font-size: 0.85em;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #a6192e;
}
</style>
