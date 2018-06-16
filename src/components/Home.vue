<template>
  <div>
    <el-carousel height="450px">
      <el-carousel-item v-for="(item,index) in carouselConfs" :key="index">
        <img :src="require(`Content/carousel/${item.picPath}`)">
      </el-carousel-item>
    </el-carousel>

    <section class="sayings content-section">
      <div>
        <h2 class="section-title">WHY SFU</h2>
      </div>
    </section>

    <section class="people content-section">
      <div>
        <h2 class="section-title">PEOPLE</h2>
      </div>
      <div class="people-section">
        <homeprof :prof-conf="item" v-for="(item,index) in profConfs" :key="index">
        </homeprof>
      </div>
    </section>

    <section class="lab content-section">
      <div>
        <h2 class="section-title">LABS</h2>
      </div>
      <div class="people-section">
        <homelab :lab-conf="item" v-for="(item, index) in labConfs" :key="index">
        </homelab>
      </div>
    </section>

  </div>
</template>

<script>
import homeprof from './HomeProf.vue'
import homelab from './HomeLab.vue'
import dataConfig from '../assets/data.json'
export default {
  name: 'home',
  data() {
    return {
      labConfs: dataConfig.labs,
      carouselConfs: dataConfig.carousel,
      profConfs: dataConfig.people
    }
  },
  computed: {
  },
  components: {
    'homeprof': homeprof,
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
  height: 450px;
}
.section-title {
  font-weight: 700;
  padding-top: 2em;
  border-bottom: solid 5px var(--text-color);
  display: inline-block;
  font-size: 1.6em;
  letter-spacing: 0.2rem;
}
.people-section {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 1em 1em 2em 1em;
}

.people > article {
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
