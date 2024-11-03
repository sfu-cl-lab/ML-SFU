<template>
  <section class="content-section">
    <h2 class="main-title">{{item.title}}</h2>
    <div class="img-wrapper" v-if="item.image">
      <img :src="require(`Content/research/${item.image}`)">
    </div>
    <div v-if="item.description">
      <p>{{item.description}}</p>
    </div>
    <schedule v-if="item.schedule" :schedule="item.schedule" :date="item.date"></schedule>
    <div v-if="item.pubGroups && item.pubGroups.length">
      <pubs :pubs=g.pubs :title=g.title v-for="(g,index) in item.pubGroups" :key="'pg-' + index"></pubs>
    </div>
    <div v-if="item.workshops && item.workshops.length > 0">
      <workshops :workshops="item.workshops"></workshops>
    </div>
    <!-- <div v-if="item.images && item.images.length">
      <img height=200px :src="require(`Content/${path}`)" v-for="(path,index) in item.images" :key="index"/>
    </div> -->
  </section>
</template>
<script>
import pubsVue from './Pubs.vue'
import scheduleVue from './Schedule.vue'
import workshopsVue from './Workshops.vue'
export default {
  name: 'news_item_detailed',
  data() {
    return {
    }
  },
  components: {
    'pubs': pubsVue,
    'schedule': scheduleVue,
    'workshops': workshopsVue
  },
  props: ['item']
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-title {
  font-weight: 700;
  display: inline-block;
  font-size: 2.2em;
  letter-spacing: 0.2rem;
}
</style>
