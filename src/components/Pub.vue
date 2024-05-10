<template>
    <article>
      <h3>{{pub.title}}</h3>
      <div>
        <div><b>Authors:</b> {{pub.authors.join(', ')}}</div>
        <div><b>{{pub.venue}} {{pub.year}}</b></div>
      </div>
      <div class="img-wrapper">
        <a target="_blank" :href="first_link"><img :src="require(`Content/research/${pub.image}`)"></a>
      </div>
      <div>
        <a target="_blank" :href="link" v-for="(link,name) in pub.links" :key="name">
            <el-button size="small">{{name}}</el-button>
        </a>
      </div>
    </article>
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
      const keys = Object.keys(this.pub.links)
      return this.pub.links[keys[0]]
    }
  },
  props: ['pub']
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
.title:hover {
  color: var(--text-color);
  transition: color 0.3s;
}
article img {
  max-height: 350px;
  max-width: 100%;
  border-radius: 10px;
  border: solid 1px #fff;
  border-color: var(--text-color);
}
div.text {
  text-align: justify;
}
article div {
  margin: 0.25em auto 0.25em auto;
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
  /* display: inline-block;
  height: 150px; */
  /* color: #fff;
  font-size: 20px;*/
  margin: 1em auto 1em auto;
}
</style>
