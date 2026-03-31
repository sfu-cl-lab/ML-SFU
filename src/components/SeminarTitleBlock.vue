<template>
  <div>
    <template v-for="(speaker, index) in speakers">
      <img v-if="speaker.photo" :src="require(`Content/seminars/speakers/${speaker.photo}`)" class="speaker-image" style="float: left;" :key="index">
    </template>
    <h3>{{getDayOfWeek(seminar.date)}} {{seminar.date}} <span v-if="seminar.location">({{seminar.location}})</span></h3>
    <h3 class="speaker-name" v-for="(speaker, index) in speakers" :key="index">
      <a target="_blank" :href="speaker.url"><b>Speaker</b>: {{speaker.name}}</a>
      <br/>
      <a target="_blank" :href="speaker.url">{{speaker.info}}</a>
    </h3>
    <img v-if="seminar.talkImage" :src="require(`Content/seminars/speakers/${seminar.talkImage}`)" style="float: right;">
    <div v-if="seminar.title"><b>Title:</b> {{seminar.title}}</div>
  </div>
</template>

<script>
export default {
  name: 'seminar-title-block',
  data() {
    return {
    }
  },
  methods: {
    getDayOfWeek: function(dateStr) {
      var date = new Date(dateStr + 'T12:00:00.000-07:00')
      return date.toLocaleDateString('en-US', { weekday: 'long' })
    },
    getSpeakers: function(seminar) {
      if (seminar.speakers) {
        return seminar.speakers
      } else if (seminar.speaker) {
        return [{
          name: seminar.speaker,
          url: seminar.speakerUrl,
          info: seminar.speakerInfo,
          photo: seminar.speakerPhoto
        }]
      }
    }
  },
  computed: {
    speakers() {
      return this.getSpeakers(this.seminar)
    }
  },
  props: ['seminar']
}
</script>
