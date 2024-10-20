<template>
  <div>
    <section class="content-section">
      <div>
        <h2 class="section-title">SFU VCR/AI Seminars</h2>
        <div style="display:flex; justify-content:space-around;">
        We hold a series of seminars where we bring together different groups in visual computing, robotics, and AI.
        <br/> Unless otherwise noted, the VCR/AI seminars are held regularly on Fridays on the Burnaby campus, TASC1 12:00pm to 1:30pm.
        <br/> As part of the seminar, we feature talks by students, faculty as well as external speakers.
        <br/> Below are some of the external speakers who have presented their work with us.
        <br/> Note: video recordings are made available internally to the SFU community only.
        <br/><br/> The seminar is organized with the help of student and faculty members.
        </div>
      </div>
      <div style="justify-content: center; flex-wrap: wrap;">
        <a href="../#/seminars#past-seminars">
        <el-button>
          <b>Past seminars</b>
        </el-button>
        </a>
        <a href="../#/seminars#organizers">
        <el-button>
          <b>Organizers</b>
        </el-button>
        </a>
      </div>

      <h3 id="upcoming-seminars" class="section-title">Upcoming seminars</h3>
      <div style="justify-content: center; flex-wrap: wrap;">
        <seminar class="seminar" :seminar="item" v-for="(item,index) in futureSeminars" :key="'upcoming' + index">
        </seminar>
      </div>
      <h3 id="past-seminars" class="section-title">Past seminars</h3>
      <div :id="'seminars-' + year" v-for="year in pastSeminarYears" :key="'seminars-' + year">
        <h4 class="year-title" v-if="year != currentYear">{{ year }}</h4>
        <div style="justify-content: center; flex-wrap: wrap;">
          <seminar class="seminar" :seminar="item" v-for="(item,index) in pastSeminarsByYear[year]" :key="year + '-' + index">
          </seminar>
        </div>
      </div>
      <h3 id="organizers" class="section-title">Organizers</h3>
      <div :id="'organizers-' + yearOrganizerInfo.year" v-for="yearOrganizerInfo in organizersByYear" :key="'organizers-' + yearOrganizerInfo.year">
        <h4 class="year-title">{{ yearOrganizerInfo.year }}</h4>
        <div style="justify-content: center; flex-wrap: wrap;">
          <div class="organizer" v-for="termInfo in yearOrganizerInfo.terms" :key="termInfo.term + '-' + yearOrganizerInfo.year">
            <b>{{ termInfo.term }}</b> <br/>
            <ul>
              <li v-if="termInfo.main_student_coordinator">
                <b>Main student organizer:</b> {{termInfo.main_student_coordinator}}
              </li>
              <li><b>Student volunteers:</b> {{termInfo.student_volunteers}}</li>
              <li><b>Faculty sponsors:</b> {{termInfo.faculty_sponsors}}</li>
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

const now = new Date().getTime()
const currentYear = new Date().getFullYear()
dataConfig.seminars.forEach(s => {
  s._date = new Date(s.date)
  s._millisecs = Date.parse(s.date)
  s._millisecs_daylater = s._millisecs + 86400000
})

export default {
  name: 'seminarsPage',
  data() {
    return {
      currentYear: currentYear,
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
      const grouped = Object.groupBy(seminars, (elem, k) => elem._date.getFullYear())
      return grouped
    }
  },
  components: {
    'seminar': seminar
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section-title {
  font-weight: 700;
  padding-top: 2em;
  border-bottom: solid 5px var(--text-color);
  display: inline-block;
  font-size: 1.6em;
  letter-spacing: 0.2rem;
}
.year-title {
  font-weight: 700;
  padding-top: 1em;
  border-bottom: solid 5px var(--text-color);
  display: inline-block;
  font-size: 1.2em;
  letter-spacing: 0.2rem;
}
.content-section {
  margin-bottom: 1em;
}
</style>
