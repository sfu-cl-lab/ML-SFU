<template>
  <article>
    <div></div>
    <h3>{{labConf.labName}}</h3>
    <p>{{labConf.description}}</p>
  </article>
</template>

<script>
export default {
  name: 'homelab',
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
  border-radius: 40px;
  border: solid 1px #fff;
  font-size: 20px;
  border-color: #38a7bb;
  margin: 0 auto 0 auto;
}
</style>
