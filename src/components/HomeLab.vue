<template>
  <article>
    <div class="image-container">
      <img :src="require(`Content/lab/${labConf.picPath}`)">
    </div>
    <h3>{{labConf.labName|toUpper}}</h3>
    <p>{{labConf.description}}</p>
    <el-button>
      <a target="_blank" :href="labConf.url">MORE DETAILS</a>
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
  filters: {
    toUpper: function (name) {
      return name.toUpperCase()
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
  margin-bottom: 2em;
}

article h3 {
  color: var(--text-color);
  font-weight: 700;
  margin: 0.5em auto 0.5em auto;
  font-size: 1.1em;
}

.el-button {
  color: var(--text-color);
  border-color: var(--text-color);
  font-weight: 700;
}

article img {
  width: 100%;
  min-height: 12em;
  object-fit: cover;
}
article p {
  text-align: left;
  margin-bottom: 0.5em;
  color: var(--text-desc-color);
}
a {
  text-decoration: none;
}
</style>
