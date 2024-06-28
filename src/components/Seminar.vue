<template>
  <article>
    <!-- <div class="img-wrapper">
      <img :src="require(`Content/seminars/speakers/${speaker.speakerPhoto}`)">
    </div> -->
    <h3>{{seminar.date}} <span v-if="seminar.location">({{seminar.location}})</span></h3>
    <h3 class="speaker-name">
      <b>Speaker</b>: <a target="_blank" :href="seminar.speakerUrl">{{seminar.speaker}}</a>
      <br/>
      {{seminar.speakerInfo}}
    </h3>
    <div>
        <div v-if="seminar.title"><b>Title:</b> {{seminar.title}}</div>
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
  width: 100%;
  height: 100%;
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

.img-wrapper {
  display: inline-block;
  width: 100px;
  height: 150px;
  color: #fff;

  font-size: 20px;
  margin: 0 auto 0 auto;
}
</style>
