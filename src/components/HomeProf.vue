<template>
  <article>
    <div>
      <img :src="require(`Content/people/${profConf.picPath}`)">
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
  max-width: 20%;
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
  width: 100px;
  height: 150px;
  color: #fff;
  /* line-height: 80px; */

  font-size: 20px;
  margin: 0 auto 0 auto;
}
</style>
