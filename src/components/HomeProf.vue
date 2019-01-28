<template>
  <article>
    <div class="img-wrapper">
      <img :src="require(`Content/people/${profConf.picPath}`)">
    </div>
    <h3 class="prof-name">
      <a target="_blank" :href="profConf.url">{{profConf.name}}</a>
    </h3>
    <p class="prof-desc" v-html="profConf.description"></p>
    <div style="margin-top:1em;" v-if="profConf.url!=='#'">
      <a target="_blank" :href="profConf.url">
        <el-button size="small">
          Home Page
        </el-button>
      </a>
      <a target="_blank" :href="profConf.labUrl">
        <el-button size="small">
          Lab Page
        </el-button>
      </a>
    </div>
  </article>
</template>

<script>
export default {
  name: 'homelab',
  data() {
    return {
    }
  },
  props: ['profConf']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.prof-desc {
  width: 100%;
  height: 60%;
}
article {
  display: flex;
  flex-direction: column;
  max-width: 22%;
  margin-top: 1em;
  margin-bottom: 1em;
  padding: 1.5em 0.8em 1em 0.8em;

  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background-color: #fafafa;
}
.el-button {
  color: var(--text-color);
  border-color: var(--text-color);
  font-weight: 700;
}
.prof-name:hover {
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
