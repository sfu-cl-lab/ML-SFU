<template>
  <div>
    <el-carousel style="margin-top:1em;" height="450px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>

    <section class="labs">
      <homelab :num="item" v-for="(item,index) in 6" :key="index">
      </homelab>
    </section>

    <section class="sayings">
      <div>
        <h2>TESTIMONIALS</h2>
      </div>
    </section>

  </div>
</template>

<script>
import homelab from './HomeLab.vue'
export default {
  name: 'home',
  data() {
    return {
    }
  },
  components: {
    'homelab': homelab
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sayings {
  background: url("https://themes.gohugo.io/theme/hugo-universal-theme/img/texture-bw.png")
    center center repeat;
  margin-top: 3em;
  height: 450px;
}
.sayings h2 {
  font-weight: 700;
  padding-top: 2em;
  border-bottom: solid 5px #38a7bb;
  display: inline-block;
  font-size: 1.6em;
}
.labs {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
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
