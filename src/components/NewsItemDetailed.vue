<template>
  <section class="content-section news-detail">
    <router-link class="back-link" to="/news">&larr; News and Events</router-link>
    <div class="detail-meta">{{ formattedDate }}<span v-if="item.location"> &middot; {{ item.location }}</span></div>
    <h2 class="main-title">{{item.title}}</h2>
    <div class="img-wrapper" v-if="item.image">
      <img :src="require(`Content/research/${item.image}`)">
    </div>
    <div v-if="item.description">
      <p class="description">{{item.description}}</p>
    </div>
    <div v-if="item.html">
      <p class="description" v-html="item.html"></p>
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
  computed: {
    formattedDate() {
      return new Date(this.item.date + 'T12:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
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
.news-detail {
  max-width: 920px;
  margin: 0 auto;
  padding: 1.5em 1.5em 0 1.5em;
  text-align: left;
}
.back-link {
  font-weight: 600;
  color: var(--text-color);
}
.detail-meta {
  margin-top: 1.2em;
  font-size: 0.9em;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #a6192e;
}
.main-title {
  margin-top: 0.2em;
  font-weight: 700;
  font-size: 1.9em;
  line-height: 1.25;
}
p.description {
  margin-top: 0.8em;
  font-size: 1.05em;
  line-height: 1.6;
  color: #444;
}
.description >>> a {
  color: var(--text-color);
  text-decoration: underline;
}
</style>
