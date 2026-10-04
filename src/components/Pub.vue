<template>
    <li class="pub">
      <div class="pub-text">
        <h5 class="pub-title">
          <a v-if="first_link" target="_blank" :href="first_link">{{pub.title}}</a>
          <template v-else>{{pub.title}}</template>
        </h5>
        <div class="pub-authors">{{pub.authors.join(', ')}}</div>
        <div class="pub-venue" v-if="venueParts.length">
          <span v-for="(part,index) in venueParts" :key="index"><template v-if="index > 0"> &middot; </template><a v-if="part.url" :href="part.url" target="_blank">{{part.text}}</a><template v-else>{{part.text}}</template></span>
        </div>
        <div class="pub-links" v-if="pub.links">
          <a target="_blank" :href="link" v-for="(link,name) in pub.links" :key="name">{{name}}</a>
        </div>
      </div>
      <a v-if="pub.image" class="pub-image" target="_blank" :href="first_link">
        <img :src="require(`Content/research/${pub.image}`)" alt="">
      </a>
    </li>
</template>
<script>
export default {
  name: 'pub',
  data() {
    return {
    }
  },
  computed: {
    first_link: function() {
      if (this.pub.links) {
        const keys = Object.keys(this.pub.links)
        return this.pub.links[keys[0]]
      }
    },
    venueParts: function() {
      const parts = this.showVenue ? [{ text: this.pub.venue + ' ' + this.pub.year }] : []
      for (const workshop of this.pub.workshops || []) {
        parts.push({ text: 'Workshop on ' + workshop.name, url: workshop.url })
      }
      return parts
    }
  },
  props: {
    pub: Object,
    showVenue: { type: Boolean, default: true }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pub {
  display: flex;
  align-items: flex-start;
  padding: 0.9em 0.2em;
  border-bottom: 1px solid #eee;
  text-align: left;
}
.pub-text {
  flex: 1;
  min-width: 0;
}
.pub-title {
  margin: 0;
  font-size: 1.05em;
  font-weight: 600;
  line-height: 1.35;
  color: #2c3e50;
}
.pub-authors {
  margin-top: 0.25em;
  color: #555;
  line-height: 1.4;
}
.pub-venue {
  margin-top: 0.15em;
  font-size: 0.9em;
  font-style: italic;
  color: #888;
}
.pub-venue a {
  color: inherit;
  text-decoration: underline;
}
.pub-links {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.5em;
}
.pub-links a {
  margin: 0 0.4em 0.3em 0;
  padding: 0.1em 0.75em;
  border: 1px solid var(--text-color);
  border-radius: 999px;
  font-size: 0.8em;
  font-weight: 600;
  color: var(--text-color);
  transition: all 0.2s;
}
.pub-links a:hover {
  background-color: var(--text-color);
  color: #fff;
}
.pub-image {
  flex: 0 0 auto;
  margin-left: 1.25em;
}
.pub-image img {
  display: block;
  width: 150px;
  height: 95px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #eee;
}
@media (max-width: 600px) {
  .pub-image {
    display: none;
  }
}
</style>
