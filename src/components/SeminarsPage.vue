<template>
  <div>
    <section class="content-section">
      <h2 class="section-title">SFU VCR/AI Seminars</h2>
      <div class="seminars-page">
        <p class="intro">
          We hold a series of seminars where we bring together different groups in visual computing, robotics, and AI.
          Unless otherwise noted, the VCR/AI seminars are held regularly on Fridays on the Burnaby campus, TASC1 12:00pm to 1:30pm.
        </p>
        <p class="intro">
          As part of the seminar, we feature talks by students, faculty as well as external speakers.
          Below are some of the external speakers who have presented their work with us.
          Note: video recordings are made available internally to the SFU community only.
          The seminar is organized with the help of student and faculty members (see <a href="../#/seminars#organizers">organizers</a>).
        </p>

        <h3 id="upcoming-seminars" class="seminars-heading">Upcoming seminars</h3>
        <seminar :seminar="item" v-for="(item,index) in futureSeminars" :key="'upcoming' + index"></seminar>
        <p v-if="futureSeminars.length === 0" class="empty">No upcoming seminars are scheduled at the moment.</p>

        <h3 id="past-seminars" class="seminars-heading">Past seminars</h3>
        <nav class="year-filter">
          <a v-for="year in pastSeminarYears" :key="year" :href="'../#/seminars#seminars-' + year">{{ year }}</a>
        </nav>
        <div :id="'seminars-' + year" v-for="year in pastSeminarYears" :key="'seminars-' + year">
          <h4 class="seminars-year">{{ year }}</h4>
          <ul>
            <seminar-row :seminar="item" v-for="item in pastSeminarsByYear[year]" :key="item.key"></seminar-row>
          </ul>
        </div>

        <h3 id="organizers" class="seminars-heading">Organizers</h3>
        <div :id="'organizers-' + yearOrganizerInfo.year" v-for="yearOrganizerInfo in organizersByYear" :key="'organizers-' + yearOrganizerInfo.year">
          <h4 class="seminars-year">{{ yearOrganizerInfo.year }}</h4>
          <div class="organizer" v-for="termInfo in yearOrganizerInfo.terms" :key="termInfo.term + '-' + yearOrganizerInfo.year">
            <b>{{ termInfo.term }}</b>
            <ul>
              <li v-if="termInfo.main_student_coordinator">
                <b>Main student organizer:</b> {{termInfo.main_student_coordinator}}
              </li>
              <li><b>Organizers:</b> {{termInfo.student_volunteers}}</li>
              <li><b>Sponsors:</b> {{termInfo.faculty_sponsors}}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import dataConfig from '../assets/data.json'
import seminar from './Seminar.vue'
import seminarRow from './SeminarRow.vue'
import groupBy from '../groupBy'

const now = new Date().getTime()
dataConfig.seminars.forEach(s => {
  s._date = new Date(s.date)
  s._millisecs = Date.parse(s.date)
  s._millisecs_daylater = s._millisecs + 86400000
})

export default {
  name: 'seminarsPage',
  data() {
    return {
      seminars: dataConfig.seminars,
      pastSeminars: dataConfig.seminars.filter(s => s._millisecs_daylater <= now),
      futureSeminars: dataConfig.seminars.filter(s => s._millisecs_daylater > now).sort((a, b) => a._millisecs - b._millisecs),
      organizersByYear: dataConfig.seminar_info.organizers_by_year
    }
  },
  computed: {
    pastSeminarsByYear() {
      return this.groupSeminarsByYear(this.pastSeminars)
    },
    pastSeminarYears() {
      return Object.keys(this.pastSeminarsByYear).sort((a, b) => b - a)
    }
  },
  methods: {
    groupSeminarsByYear: function(seminars) {
      // Year from the date string, so a talk on Jan 1 never lands in the previous year
      return groupBy(seminars, (elem, k) => elem.date.slice(0, 4))
    }
  },
  components: {
    'seminar': seminar,
    'seminar-row': seminarRow
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.seminars-page {
  max-width: 880px;
  margin: 1.2em auto 0 auto;
  padding: 0 1.5em;
  text-align: left;
}
.intro {
  margin: 0 0 0.8em 0;
  line-height: 1.6;
  color: #444;
}
.intro a {
  color: var(--text-color);
  text-decoration: underline;
}
.seminars-heading {
  margin: 1.8em 0 0.4em 0;
  padding-bottom: 0.3em;
  border-bottom: 2px solid #2c3e50;
  font-size: 1.3em;
  font-weight: 700;
  color: #2c3e50;
}
.empty {
  margin: 0.8em 0;
  color: #666;
}
.seminars-year {
  margin: 1.4em 0 0 0;
  font-size: 0.85em;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #a6192e;
}
ul {
  margin: 0;
  padding: 0;
}
.year-filter {
  display: flex;
  flex-wrap: wrap;
  margin: 0.6em 0 0 0;
}
.year-filter a {
  margin: 0.25em 0.5em 0.25em 0;
  padding: 0.3em 1em;
  border: 1px solid var(--text-color);
  border-radius: 999px;
  font-weight: 600;
  color: var(--text-color);
  transition: all 0.2s;
}
.year-filter a:hover {
  background-color: var(--text-color);
  color: #fff;
}
.organizer {
  margin-top: 0.6em;
  line-height: 1.5;
}
.organizer ul {
  margin: 0.2em 0 0 1.2em;
  list-style: disc;
  color: #444;
}
</style>
