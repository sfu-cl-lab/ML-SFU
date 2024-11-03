<template>
    <div v-if="workshops && workshops.length > 0">
      <h3 class="section-title">Workshops</h3>
      <br/>Below are a list of workshops that we are helping to organize and participating in.
      <div style="display: flex; justify-content: center; flex-wrap: wrap;">
        <workshop :workshop=workshop v-for="(workshop,index) in workshops" :key="'w-' + index"></workshop>
      </div>
    </div>
  </template>
<script>
import workshopVue from './Workshop.vue'

export default {
  name: 'workshops',
  data() {
    return {
    }
  },
  props: ['workshops'],
  components: {
    'workshop': workshopVue
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
