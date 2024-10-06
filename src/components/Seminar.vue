<template>
  <article>
    <div>
      <img v-if="seminar.speakerPhoto" :src="require(`Content/seminars/speakers/${seminar.speakerPhoto}`)" class="speaker-image" style="float: left;">
      <h3>{{seminar.date}} <span v-if="seminar.location">({{seminar.location}})</span></h3>
      <h3 class="speaker-name">
        <a target="_blank" :href="seminar.speakerUrl"><b>Speaker</b>: {{seminar.speaker}}</a>
        <br/>
        <a target="_blank" :href="seminar.speakerUrl">{{seminar.speakerInfo}}</a>
      </h3>
      <img v-if="seminar.talkImage" :src="require(`Content/seminars/speakers/${seminar.talkImage}`)" style="float: right;">
      <div v-if="seminar.title"><b>Title:</b> {{seminar.title}}</div>
    </div>
    <div>
        <br/>
        <div class="text" v-if="seminar.abstract"><b>Abstract:</b> {{seminar.abstract}}</div>
        <br/>
        <div class="text" v-if="seminar.bio"><b>Speaker info:</b> {{seminar.bio}}</div>
    </div>
    <div style="margin-top:1em;" v-if="seminar.video">
      <a target="_blank" :href="seminar.video">
        <el-button size="small">
          Video
        </el-button>
      </a>
    </div>
  </article>
</template>

<script>
export default {
  name: 'seminar',
  data() {
    return {
    }
  },
  props: ['seminar']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
article {
  display: flex;
  flex-direction: column;
  max-width: 90%;
  margin-top: 1em;
  margin-bottom: 1em;
  padding: 1.5em 0.8em 1.5em 0.8em;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background-color: #fafafa;
}
.el-button {
  color: var(--text-color);
  border-color: var(--text-color);
  font-weight: 700;
}
.speaker-name:hover {
  color: var(--text-color);
  transition: color 0.3s;
}
article img {
  /* border-radius: 50px; */
  /* border: solid 1px #fff; */
  border-color: var(--text-color);
}
div.text {
  text-align: justify;
}
article > p {
  color: var(--text-desc-color);
}
article > h3 {
  font-weight: 700;
  margin-top: 0.8em;
  margin-bottom: 0.2em;
}

.speaker-image {
  max-width: 100px;
  max-height: 100px;
  border-radius: 50%;
  border: 3px solid var(--text-color);
}
</style>
