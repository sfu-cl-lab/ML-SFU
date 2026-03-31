<template>
  <article :class="getSeminarType(seminar)">
    <seminar-title-block :seminar="seminar"></seminar-title-block>
    <div>
        <br/>
        <div class="text" v-if="seminar.abstract"><b>Abstract:</b>
          <span v-if="seminar.html" v-html="seminar.abstract"></span>
          <span v-else>{{seminar.abstract}}</span>
        </div>
        <br/>
        <div class="text" v-if="seminar.bio"><b>Speaker info:</b>
          <span v-if="seminar.html" v-html="seminar.bio"></span>
          <span v-else>{{seminar.bio}}</span>
        </div>
    </div>
    <div style="margin-top:1em;" v-if="seminar.video">
      <a target="_blank" :href="seminar.video">
        <el-button size="small">
          Video
        </el-button>
      </a>
    </div>
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
    },
    getDayOfWeek: function(dateStr) {
      var date = new Date(dateStr + 'T12:00:00.000-07:00')
      return date.toLocaleDateString('en-US', { weekday: 'long' })
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
