<template>
  <li class="seminar-row" :class="{ compact: compact }">
    <a v-if="photoSpeaker" class="seminar-photo-link" :href="photoSpeaker.url" target="_blank">
      <img class="seminar-photo" :src="require(`Content/seminars/speakers/${photoSpeaker.photo}`)" :alt="photoSpeaker.name">
    </a>
    <div v-else class="seminar-photo"></div>
    <div class="seminar-body">
      <div class="seminar-meta">{{ date }}<template v-if="seminar.location && !compact"> &middot; {{ seminar.location }}</template></div>
      <h4 class="seminar-title">
        <router-link :to="{ name: 'seminars-by-key', params: { key: seminar.key } }">{{ seminar.title || 'Talk' }}</router-link>
      </h4>
      <div class="seminar-speaker" v-for="(speaker, index) in speakers" :key="index">
        <a :href="speaker.url" target="_blank">{{ speaker.name }}</a><template v-if="speaker.info && !compact">, {{ speaker.info }}</template>
      </div>
      <details v-if="!compact && (seminar.abstract || seminar.bio)">
        <summary>Abstract and speaker info</summary>
        <p v-if="seminar.abstract"><b>Abstract:</b>
          <span v-if="seminar.html" v-html="seminar.abstract"></span>
          <span v-else>{{ seminar.abstract }}</span>
        </p>
        <p v-if="seminar.bio"><b>Speaker info:</b>
          <span v-if="seminar.html" v-html="seminar.bio"></span>
          <span v-else>{{ seminar.bio }}</span>
        </p>
      </details>
      <a v-if="seminar.video && !compact" class="seminar-video" :href="seminar.video" target="_blank">Video</a>
    </div>
  </li>
</template>

<script>
import getSpeakers, { formatSeminarDate } from '../seminarSpeakers'

export default {
  name: 'seminar-row',
  computed: {
    speakers() {
      return getSpeakers(this.seminar)
    },
    photoSpeaker() {
      return this.speakers.find(s => s.photo) || null
    },
    date() {
      return formatSeminarDate(this.seminar.date, this.compact ? 'short' : 'long')
    }
  },
  props: {
    seminar: Object,
    // compact: date, title and speaker only (used on the home page)
    compact: Boolean
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.seminar-row {
  display: flex;
  align-items: flex-start;
  padding: 1.1em 0.2em;
  border-bottom: 1px solid #eee;
  text-align: left;
}
.seminar-photo-link {
  flex: 0 0 auto;
  display: flex;
}
.seminar-photo {
  flex: 0 0 auto;
  width: 64px;
  height: 64px;
  margin-right: 1.1em;
  border-radius: 50%;
  border: 2px solid var(--text-color);
  background-color: #eee;
  object-fit: cover;
}
.seminar-body {
  flex: 1;
  min-width: 0;
}
.seminar-meta {
  font-size: 0.9em;
  color: #888;
}
.seminar-title {
  margin: 0.15em 0 0.2em 0;
  font-size: 1.1em;
  font-weight: 600;
  line-height: 1.35;
  color: #2c3e50;
}
.seminar-title a:hover {
  color: var(--text-color);
}
.seminar-speaker {
  color: #555;
  line-height: 1.4;
}
.seminar-speaker a {
  font-weight: 600;
  color: #333;
}
details {
  margin-top: 0.5em;
  color: #444;
}
summary {
  cursor: pointer;
  font-weight: 600;
  color: var(--text-color);
}
details p {
  margin: 0.6em 0 0 0;
  line-height: 1.55;
}
.seminar-video {
  display: inline-block;
  margin-top: 0.4em;
  font-weight: 600;
  color: var(--text-color);
}
/* Phones: the opened abstract uses the full width instead of the column next to the photo */
@media (max-width: 600px) {
  details p {
    margin-left: calc(-64px - 1.1em);
  }
}
.compact {
  padding: 0.7em 0.2em;
}
.compact .seminar-photo {
  width: 48px;
  height: 48px;
  margin-right: 0.9em;
}
.compact .seminar-title {
  font-size: 1em;
}
</style>
