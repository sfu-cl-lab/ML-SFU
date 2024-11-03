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
                <b>{{item.speaker}}</b>
            </div>
            {{item.event}}
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
      seminars: dataConfig.seminars
    }
  },
  computed: {
    scheduleItems() {
      const date = this._props.date
      const items = this._props.schedule
      for (let item of items) {
        if (date && item.speaker) {
          item.seminar = this.getSeminar(date, item.speaker)
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
 </style>
