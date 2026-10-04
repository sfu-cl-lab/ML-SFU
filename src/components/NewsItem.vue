<template>
  <li class="news-row" :class="{ compact: compact }">
    <div class="news-date">
      <span class="news-month">{{ month }}</span>
      <span class="news-day">{{ day }}</span>
    </div>
    <div class="news-body">
      <div class="news-meta" v-if="!compact">
        <span class="news-tag" :class="'tag-' + kind">{{ kind }}</span>
        <span v-if="item.location">{{ item.location }}</span>
        <span v-if="paperCount">{{ paperCount }} {{ paperCount === 1 ? 'paper' : 'papers' }}</span>
      </div>
      <h3 class="news-title">
        <a v-if="item.url" :href="item.url" target="_blank">{{ item.title }}</a>
        <router-link v-else :to="{ name: 'news-item', params: { id: (item.shortname != null) ? item.shortname : index }}">{{ item.title }}</router-link>
      </h3>
      <!-- -webkit-box-orient is set inline because the CSS minifier strips it, which breaks the two-line clamp -->
      <p class="news-teaser" style="-webkit-box-orient: vertical" v-if="!compact && teaser">{{ teaser }}</p>
    </div>
  </li>
</template>
<script>
import dataConfig from '../assets/data.json'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export default {
  name: 'item',
  data() {
    return {
    }
  },
  computed: {
    month() {
      return MONTHS[parseInt(this.item.date.split('-')[1], 10) - 1]
    },
    day() {
      return parseInt(this.item.date.split('-')[2], 10)
    },
    kind() {
      return this.item.type === 'conference' || this.item.type === 'news' ? this.item.type : 'event'
    },
    teaser() {
      const html = this.item.html || this.item.description
      if (!html) {
        return ''
      }
      // DOMParser gives plain text without loading any images in the html
      const toText = h => new DOMParser().parseFromString(h, 'text/html').body.textContent.replace(/\s+/g, ' ').trim()
      // Use the opening text, before any line break, heading or list
      const opening = html.split(/<(?:br|h[1-6]|p|div|ul|ol|table|article)\b/i)[0]
      return toText(opening) || toText(html.replace(/</g, ' <'))
    },
    paperCount() {
      // Same matching as the news item page: papers from that year whose venue starts with the conference name
      if (this.item.type !== 'conference' || this.item.venue == null || this.item.year == null) {
        return 0
      }
      const venue = this.item.venue.toLowerCase()
      const year = this.item.year.toString()
      return dataConfig.pubs.filter(p => p.year.toString() === year && p.venue.toLowerCase().startsWith(venue)).length
    }
  },
  props: {
    item: Object,
    index: Number,
    compact: Boolean
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.news-row {
  position: relative;
  display: flex;
  align-items: flex-start;
  padding: 1em 0.75em;
  border-bottom: 1px solid #eee;
  text-align: left;
  transition: background-color 0.2s;
}
.news-row:hover {
  background-color: #f6fafb;
}
.news-date {
  flex: 0 0 3.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1.25em;
  line-height: 1.1;
}
.news-month {
  font-size: 0.8em;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #a6192e;
}
.news-day {
  font-size: 1.6em;
  font-weight: 700;
  color: #2c3e50;
}
.news-body {
  flex: 1;
  min-width: 0;
}
.news-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 0.3em;
  font-size: 0.85em;
  color: #888;
}
.news-meta > span + span::before {
  content: "·";
  margin: 0 0.5em;
}
.news-tag {
  padding: 0.1em 0.6em;
  border-radius: 999px;
  font-size: 0.85em;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.news-meta > .news-tag + span::before {
  content: "";
  margin: 0 0.25em;
}
.tag-conference {
  background-color: #e3f3f6;
  color: #1f7f90;
}
.tag-news {
  background-color: #f8e5e8;
  color: #a6192e;
}
.tag-event {
  background-color: #fcf0d9;
  color: #8a5d00;
}
.news-title {
  margin: 0;
  font-size: 1.1em;
  font-weight: 600;
  line-height: 1.35;
  color: #2c3e50;
}
/* Make the whole row clickable */
.news-title a::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.news-row:hover .news-title a {
  color: var(--text-color);
}
.news-teaser {
  margin: 0.3em 0 0 0;
  color: var(--text-desc-color);
  line-height: 1.45;
  /* Show at most two lines (with -webkit-box-orient set inline) */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.compact {
  padding: 0.7em 0.25em;
}
.compact .news-date {
  flex-basis: 2.75em;
  margin-right: 0.9em;
}
.compact .news-day {
  font-size: 1.3em;
}
.compact .news-title {
  font-size: 1em;
}
</style>
