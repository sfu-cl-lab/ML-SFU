<template>
    <article>
      <h4>{{item.date}}</h4>
      <h3 class="title" v-if="item.url"><a :href="item.url" target="_blank">{{item.title}}</a></h3>
      <h3 class="title" v-else>
        <!-- <router-link :to="{ name: 'pubs-year-venue', params: { year: item.year, venue: item.venue, title: item.title }}">{{item.title}}</router-link> -->
        <router-link :to="{ name: 'news-item', params: { id: id }}">{{item.title}}</router-link>
      </h3>
      <div class="img-wrapper" v-if="item.image">
        <img :src="require(`Content/research/${item.image}`)">
      </div>
      <!-- <div v-if="item.description">
        <p>{{item.description}}</p>
      </div> -->
    </article>
</template>
<script>
export default {
  name: 'item',
  data() {
    return {
    }
  },
  props: ['item', 'id']
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
  width: 100%;
  height: 100%;
  /* border-radius: 50px; */
  /* border: solid 1px #fff; */
  border-color: var(--text-color);
}
div.text {
  text-align: justify;
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
