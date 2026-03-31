<template>
  <article :class="getSeminarType(seminar)">
    <seminar-title-block :seminar="seminar"></seminar-title-block>
  </article>
</template>

<script>
import seminarTitleBlock from './SeminarTitleBlock.vue'

export default {
  name: 'seminar',
  data() {
    return {
    }
  },
  methods: {
    getSeminarType: function(seminar) {
      if (seminar.remote) {
        return 'remote'
      } else {
        return 'regular'
      }
    }
  },
  props: ['seminar'],
  components: {
    'seminar-title-block': seminarTitleBlock
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
article img {
  /* border-radius: 50px; */
  /* border: solid 1px #fff; */
  border-color: var(--text-color);
}
article.remote {
  border-color: red;
}
</style>
