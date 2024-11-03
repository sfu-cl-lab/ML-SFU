<template>
    <div>
      <section class="content-section">
        <h3 class="section-title" v-if="title">{{title}}</h3>
        <h3 class="section-title" v-else>Publications</h3>
        <div style="display: flex; justify-content: center; flex-wrap: wrap;">
          <pub class="pub" :pub="item" v-for="(item,index) in pubs" :key="index">
          </pub>
        </div>
      </section>
    </div>
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
  props: ['pubs', 'title']
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 </style>
