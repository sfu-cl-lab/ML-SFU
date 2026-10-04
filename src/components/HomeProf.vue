<template>
  <article>
    <div class="img-wrapper">
      <img :src="require(`Content/people/${profConf.picPath}`)">
    </div>
    <h3 class="prof-name">
      <a target="_blank" :href="profConf.url">{{profConf.name}}</a>
    </h3>
    <p class="prof-desc" v-html="profConf.description"></p>
    <div class="prof-buttons">
      <a target="_blank" :href="profConf.url" v-if="profConf.url">
        <el-button size="small">
          Home Page
        </el-button>
      </a>
      <a target="_blank" :href="profConf.labUrl" v-if="profConf.labUrl">
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
  text-align: left;
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

article img {
  width: 100%;
  height: 100%;
  /* border-radius: 50px; */
  /* border: solid 1px #fff; */
  border-color: var(--text-color);
}

.img-wrapper {
  display: inline-block;
  max-height: 150px;
  color: #fff;

  font-size: 20px;
  margin: 0 auto 0 auto;
}
.prof-buttons {
  margin-top: 1em;
}

/* Phones: one person per row, photo on the left and details on the right */
@media (max-width: 600px) {
  article {
    display: grid;
    grid-template-columns: 88px 1fr;
    column-gap: 1em;
    align-items: start;
    padding: 1em;
    text-align: left;
  }
  .img-wrapper {
    grid-row: 1 / span 3;
    width: 88px;
    height: 88px;
    margin: 0;
  }
  article img {
    width: 88px;
    height: 88px;
    object-fit: cover;
  }
  .prof-name {
    margin: 0;
  }
  .prof-desc {
    height: auto;
    margin: 0.3em 0 0 0;
    line-height: 1.4;
  }
  .prof-buttons {
    margin-top: 0.6em;
  }
}
</style>
