<template>
    <article>
      <a v-if="first_link" target="_blank" :href="first_link"><h3>{{pub.title}}</h3></a>
      <h3 v-else>{{pub.title}}</h3>
      <div>
        <div><b>Authors:</b> {{pub.authors.join(', ')}}</div>
        <div><b>{{pub.venue}} {{pub.year}}</b></div>
      </div>
      <div v-if="pub.workshops">
        <a v-for="(workshop,index) in pub.workshops" :key="index" :href="workshop.url" target="_blank">
            <b>Workshop on {{workshop.name}}</b><br/>
        </a>
      </div>
      <div class="img-wrapper" v-if="pub.image">
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
      if (this.pub.links) {
        const keys = Object.keys(this.pub.links)
        return this.pub.links[keys[0]]
      }
    }
  },
  props: ['pub']
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
article div {
    margin: 0.25em auto 0.25em auto;
}

article img {
  max-height: 350px;
  max-width: 100%;
  border-radius: 10px;
  border: solid 1px #fff;
  border-color: var(--text-color);
}
.img-wrapper {
  /* display: inline-block;
  height: 150px; */
  /* color: #fff;
  font-size: 20px;*/
  margin: 1em auto 1em auto;
}
</style>
