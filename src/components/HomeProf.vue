<template>
  <article>
    <div>
      <img :src="profConf.pic">
    </div>
    <h3>{{profConf.name}}</h3>
    <p>{{profConf.description}}</p>
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
article {
  display: flex;
  flex-direction: column;
  max-width: 23%;
  margin-top: 1em;
}

article img {
  width: 100%;
  height: 100%;
  border-radius: 40px;
  border: solid 1px #fff;
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

article > div {
  display: inline-block;
  width: 80px;
  height: 80px;
  color: #fff;
  line-height: 80px;

  font-size: 20px;
  margin: 0 auto 0 auto;
}
</style>
