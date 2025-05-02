<template>
  <article :class="getSeminarType(seminar)">
    <div>
      <img v-if="seminar.speakerPhoto" :src="require(`Content/seminars/speakers/${seminar.speakerPhoto}`)" class="speaker-image" style="float: left;">
      <h3>{{getDayOfWeek(seminar.date)}} {{seminar.date}} <span v-if="seminar.location">({{seminar.location}})</span></h3>
      <h3 class="speaker-name">
        <a target="_blank" :href="seminar.speakerUrl"><b>Speaker</b>: {{seminar.speaker}}</a>
        <br/>
        <a target="_blank" :href="seminar.speakerUrl">{{seminar.speakerInfo}}</a>
      </h3>
      <img v-if="seminar.talkImage" :src="require(`Content/seminars/speakers/${seminar.talkImage}`)" style="float: right;">
      <div v-if="seminar.title"><b>Title:</b> {{seminar.title}}</div>
    </div>
  </article>
</template>

<script>
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
  props: ['seminar']
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
