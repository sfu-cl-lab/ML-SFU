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
article img {
  width: 100%;
  height: 100%;
  /* border-radius: 50px; */
  /* border: solid 1px #fff; */
  border-color: var(--text-color);
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
