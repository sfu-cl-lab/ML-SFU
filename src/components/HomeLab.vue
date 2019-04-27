<template>
  <article>
    <div class="image-container">
      <img :src="require(`Content/lab/${labConf.picPath}`)">
    </div>
    <a target="_blank" :href="labConf.url">
      <h3>{{labConf.labName|toUpper}}</h3>
    </a>
    <p class="lab-desc">{{labConf.description}}</p>
    <a target="_blank" :href="labConf.url">
      <el-button>
        MORE DETAILS
      </el-button>
    </a>
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
.lab-desc {
  width: 100%;
  height: 60%;
  text-align: left;
}
article {
  display: flex;
  flex-direction: column;
  max-width: 28%;
  margin-bottom: 2em;
  border: 1px solid #eee;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 1em;
  margin-left: 0.3em;
  margin-right: 0.3em;
}

article h3 {
  font-weight: 700;
  margin: 0.5em auto 0.5em auto;
  font-size: 1.1em;
  transition: all 0.3s;
}

article h3:hover {
  color: var(--text-color);
}

.el-button {
  color: var(--text-color);
  border-color: var(--text-color);
  font-weight: 700;
}

article img {
  width: 100%;
  height: 12em;
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
