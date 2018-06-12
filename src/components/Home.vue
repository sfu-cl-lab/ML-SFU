<template>
  <div>
    <el-carousel height="450px">
      <el-carousel-item v-for="(item,index) in carouselConfs" :key="index">
        <img :src="require(`Content/carousel/${item.picPath}`)">
      </el-carousel-item>
    </el-carousel>

    <section class="sayings">
      <div>
        <h2>WHY SFU</h2>
      </div>
    </section>

    <section class="labs">
      <homelab :lab-conf="item" v-for="(item,index) in labConfs" :key="index">
      </homelab>
    </section>

  </div>
</template>

<script>
import homelab from './HomeLab.vue'
import dataConfig from '../assets/data.json'
export default {
  name: 'home',
  data() {
    return {
      labConfs: dataConfig.labs,
      carouselConfs: dataConfig.carousel
    }
  },
  computed: {
  },
  components: {
    'homelab': homelab
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sayings {
  background: url("https://themes.gohugo.io/theme/hugo-universal-theme/img/texture-bw.png")
    center center repeat;
  /* margin-top: 3em; */
  height: 450px;
}
.sayings h2 {
  font-weight: 700;
  padding-top: 2em;
  border-bottom: solid 5px #38a7bb;
  display: inline-block;
  font-size: 1.6em;
  letter-spacing: 0.2rem;
}
.labs {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 2em;
  margin-bottom: 2em;
}

.labs > article {
  margin-top: 2em;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
