<template>
  <article>
    <div>
      <h3 class="section-title">Schedule</h3>
      <table class="center">
        <tr><th>Time</th><th>Event</th></tr>
        <tr class="content-section" v-for="(item,index) in scheduleItems" :key="index">
          <td>{{item.time}}</td>
          <td>
            <div v-if="item.speaker">
                <img v-if="item.seminar && item.seminar.speakerPhoto" :src="require(`Content/seminars/speakers/${item.seminar.speakerPhoto}`)" class="speaker-image" style="float: left;">
                <img v-else-if="item.groupMember && item.groupMember.picPath" :src="require(`Content/people/${item.groupMember.picPath}`)" class="speaker-image" style="float: left;">
                <template v-if="item.speakerUrl">
                  <b><a :href="item.speakerUrl">{{item.speaker}}</a></b>
                </template>
                <template v-else>
                <b>{{item.speaker}}</b>
                </template>
            </div>
            <template v-if="item.seminar">
              <router-link :to="`/seminar/${item.seminar.key}`"><b>{{item.event.title}}</b></router-link>
            </template>
            <template v-else>
              <b>{{item.event.title}}</b>
            </template>
            <div v-if="item.event.description">
            {{item.event.description}}
            </div>
         </td>
        </tr>
      </table>
    </div>
  </article>
</template>
<script>
import dataConfig from '../assets/data.json'
import seminar from './Seminar.vue'

export default {
  name: 'schedule',
  data() {
    return {
      seminars: dataConfig.seminars,
      people: dataConfig.people
    }
  },
  computed: {
    scheduleItems() {
      const date = this._props.date
      const items = this._props.schedule
      for (let item of items) {
        if (date && item.speaker) {
          item.seminar = this.getSeminar(date, item.speaker)
          item.groupMember = this.getGroupMember(item.speaker)
          if (item.seminar) {
            if (item.seminar.speakerUrl) {
              item.speakerUrl = item.seminar.speakerUrl
            }
          } else if (item.groupMember) {
            if (item.groupMember.picPath) {
              item.speakerUrl = item.groupMember.url
            }
          }
        }
        if (item.event) {
          if (typeof item.event === 'string') {
            item.event = { 'title': item.event }
          }
        }
      }
      return items
    }
  },
  methods: {
    getSeminar: function(date, speaker) {
      const simplifiedSpeaker = speaker.replace(/ *\([^)]*\) */g, '')
      const matching = this.seminars.filter(item => item.date === date && item.speaker === simplifiedSpeaker)
      if (matching.length) {
        return matching[0]
      }
    },
    getGroupMember: function(speaker) {
      const simplifiedSpeaker = speaker.replace(/ *\([^)]*\) */g, '')
      const matching = this.people.filter(item => item.name === simplifiedSpeaker)
      if (matching.length) {
        return matching[0]
      }
    }
  },
  components: {
    'seminar': seminar
  },
  props: ['schedule', 'date']
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img.speaker-image {
  margin-right: 10px
}
</style>
