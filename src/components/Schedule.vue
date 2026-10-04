<template>
  <section class="schedule">
    <h3 class="schedule-title">Schedule</h3>
    <table>
      <tr><th>Time</th><th>Event</th></tr>
      <tr v-for="(item,index) in scheduleItems" :key="index">
        <td class="time">{{item.time}}</td>
        <td>
          <div class="event">
            <img v-if="item.seminar && item.seminar.speakerPhoto" :src="require(`Content/seminars/speakers/${item.seminar.speakerPhoto}`)" class="speaker-photo" alt="">
            <img v-else-if="item.groupMember && item.groupMember.picPath" :src="require(`Content/people/${item.groupMember.picPath}`)" class="speaker-photo" alt="">
            <div>
              <div v-if="item.speaker" class="speaker">
                <a v-if="item.speakerUrl" :href="item.speakerUrl">{{item.speaker}}</a>
                <template v-else>{{item.speaker}}</template>
              </div>
              <router-link v-if="item.seminar" class="event-title" :to="`/seminar/${item.seminar.key}`">{{item.event.title}}</router-link>
              <span v-else class="event-title">{{item.event.title}}</span>
              <div v-if="item.event.description">{{item.event.description}}</div>
              <div v-if="item.links" class="links">
                <a v-for="(link,key) in item.links" :key="key" :href="link">{{key}}</a>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </table>
  </section>
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
.schedule {
  margin-top: 1.8em;
}
.schedule-title {
  margin: 0 0 0.6em 0;
  padding-bottom: 0.3em;
  border-bottom: 2px solid #2c3e50;
  font-size: 1.3em;
  font-weight: 700;
  color: #2c3e50;
}
table {
  width: 100%;
}
td.time {
  width: 1%;
  white-space: nowrap;
  color: #555;
}
.event {
  display: flex;
  align-items: center;
  line-height: 1.4;
}
.speaker-photo {
  flex: 0 0 auto;
  width: 56px;
  height: 56px;
  margin-right: 0.9em;
  border-radius: 50%;
  border: 2px solid var(--text-color);
  object-fit: cover;
}
.speaker {
  font-weight: 700;
  color: #333;
}
.event-title {
  color: #2c3e50;
}
a.event-title:hover {
  color: var(--text-color);
}
.links a {
  margin-right: 0.8em;
  color: var(--text-color);
}
/* Phones: no table columns; each slot is the time above the event */
@media (max-width: 600px) {
  table,
  tbody,
  tr,
  td {
    display: block;
  }
  table {
    border: none;
  }
  tr:first-child {
    display: none;
  }
  tr {
    padding: 0.7em 0.3em;
    border-bottom: 1px solid #e8e8e8;
  }
  td {
    padding: 0;
    border: none;
  }
  td.time {
    width: auto;
    margin-bottom: 0.3em;
    font-size: 0.9em;
    color: #888;
    white-space: normal;
  }
  .speaker-photo {
    width: 44px;
    height: 44px;
  }
}
</style>
