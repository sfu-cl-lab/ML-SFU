<template>
  <div class="seminar">
    <div class="seminar-header">
      <a v-for="(speaker, index) in speakersWithPhoto" :key="index" class="seminar-photo-link"
         :href="speaker.url" target="_blank">
        <img class="seminar-photo" :src="require(`Content/seminars/speakers/${speaker.photo}`)" :alt="speaker.name">
      </a>
      <div>
        <div class="seminar-meta">{{ date }}<template v-if="seminar.location"> &middot; {{ seminar.location }}</template></div>
        <h3 v-if="seminar.title" class="seminar-title">{{ seminar.title }}</h3>
        <div class="seminar-speaker" v-for="(speaker, index) in speakers" :key="index">
          <a :href="speaker.url" target="_blank">{{ speaker.name }}</a><template v-if="speaker.info">, {{ speaker.info }}</template>
        </div>
      </div>
    </div>
    <p v-if="seminar.abstract"><b>Abstract:</b>
      <span v-if="seminar.html" v-html="seminar.abstract"></span>
      <span v-else>{{ seminar.abstract }}</span>
    </p>
    <p v-if="seminar.bio"><b>Speaker info:</b>
      <span v-if="seminar.html" v-html="seminar.bio"></span>
      <span v-else>{{ seminar.bio }}</span>
    </p>
    <a v-if="seminar.video" class="seminar-video" :href="seminar.video" target="_blank">Video</a>
  </div>
</template>

<script>
import getSpeakers, { formatSeminarDate } from '../seminarSpeakers'

export default {
  name: 'seminar',
  computed: {
    speakers() {
      return getSpeakers(this.seminar)
    },
    speakersWithPhoto() {
      return this.speakers.filter(s => s.photo)
    },
    date() {
      return formatSeminarDate(this.seminar.date)
    }
  },
  props: ['seminar']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.seminar {
  padding: 1.2em 0 1.4em 0;
  border-bottom: 1px solid #eee;
  text-align: left;
}
.seminar-header {
  display: flex;
  align-items: center;
  margin-bottom: 0.6em;
}
.seminar-photo-link {
  flex: 0 0 auto;
  display: flex;
}
.seminar-photo {
  flex: 0 0 auto;
  width: 96px;
  height: 96px;
  margin-right: 1.2em;
  border-radius: 50%;
  border: 2px solid var(--text-color);
  object-fit: cover;
}
.seminar-meta {
  font-size: 0.95em;
  color: #888;
}
.seminar-title {
  margin: 0.2em 0 0.3em 0;
  font-size: 1.35em;
  font-weight: 700;
  line-height: 1.3;
  color: #2c3e50;
}
.seminar-speaker {
  color: #555;
  line-height: 1.4;
}
.seminar-speaker a {
  font-weight: 600;
  color: #333;
}
p {
  margin: 0.8em 0 0 0;
  line-height: 1.6;
  color: #444;
}
.seminar-video {
  display: inline-block;
  margin-top: 0.8em;
  font-weight: 600;
  color: var(--text-color);
}
@media (max-width: 600px) {
  .seminar-header {
    align-items: flex-start;
  }
  .seminar-photo {
    width: 64px;
    height: 64px;
    margin-right: 0.9em;
  }
}
</style>
