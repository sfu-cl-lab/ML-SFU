<template>
  <div>
    <el-carousel height="450px">
      <el-carousel-item v-for="(item,index) in carouselConfs" :key="index">
        <img :src="require(`Content/carousel/${item.picPath}`)" :height="450">
      </el-carousel-item>
    </el-carousel>

    <section class="sayings content-section">
      <div>
        <h2 class="section-title">{{generalConfs.section_one.name}}</h2>
        <div style="display:flex; justify-content:space-around;">
          <el-card class="why-sfu" v-for="(item,index) in generalConfs.section_one.cards" :key="index">
            {{item}}
          </el-card>
        </div>
      </div>
      <a href="../#/seminars"><h2 class="link-title">VCR/AI Seminars</h2></a>
    </section>

    <section class="people content-section">
      <div>
        <h2 class="section-title">PEOPLE</h2>
      </div>
      <div style="display: flex; justify-content: flex-start; flex-wrap: wrap;">
        <homeprof class="prof" :prof-conf="item" v-for="(item,index) in profConfs" :key="index">
        </homeprof>
      </div>
    </section>

    <section class="people content-section">
      <div>
        <h2 class="section-title">AFFILIATED</h2>
      </div>
      <div style="display: flex; justify-content: flex-start; flex-wrap: wrap;">
        <homeprof class="prof" :prof-conf="item" v-for="(item,index) in affiliatedConfs" :key="index">
        </homeprof>
      </div>
    </section>

    <section class="lab content-section">
      <div>
        <h2 class="section-title">LABS</h2>
      </div>
      <div style="display: flex; justify-content: flex-start; flex-wrap: wrap;">
        <homelab class="lab" :lab-conf="item" v-for="(item, index) in labConfs" :key="index">
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
      profConfs: dataConfig.people,
      affiliatedConfs: dataConfig.affiliated,
      generalConfs: dataConfig.general
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
  /* min-height: 450px; */
}
.why-sfu {
  margin: 1em 0.8em 1em 0.8em;
  max-width: 20em;
  text-align: left;
}
.section-title {
  font-weight: 700;
  padding-top: 1.5em;
  border-bottom: solid 5px var(--text-color);
  display: inline-block;
  font-size: 1.6em;
  letter-spacing: 0.2rem;
}
.link-title {
  font-weight: 700;
  padding-top: 0.5em;
  border-bottom: solid 5px var(--text-color);
  display: inline-block;
  font-size: 1.6em;
  letter-spacing: 0.2rem;
}
.content-section {
  margin-bottom: 1em;
}
.prof {
  margin: 0.2em 0.1em 2em 0.1em;
  -webkit-flex: 1 1 13em;
}
.lab {
  margin: 0.7em 0.7em 2em 0.7em;
  -webkit-flex: 1 1 15em;
}
.people-section {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 0.7em 0.7em 2em 0.7em;
}

.people {
  background: url("../assets/texture-bw.png") center center repeat;
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
