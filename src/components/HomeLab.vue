<template>
  <article>
    <div>
      <img :src="labConf.pic">
    </div>
    <h3>{{labConf.labName}}</h3>
    <p>{{labConf.description}}</p>
    <el-button>
      <a target="_blank" :href="labConf.url">Go to Lab home page</a>
    </el-button>
  </article>
</template>

<script>
export default {
  name: 'lab',
  data() {
    return {
    }
  },
  props: ['labConf']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
article {
  display: flex;
  flex-direction: column;
  max-width: 30%;
  margin-top: 1em;
}
article img {
  width: 100%;
}
article p {
  text-align: left;
}
a{
  text-decoration: none;
}
</style>
