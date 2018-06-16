<template>
  <div id="app">
    <header class="header">
      <div>
        <img src="//www.sfu.ca/etc/designs/clf/clientlibs/clf/source/assets/sfu-logo@2x.png">
      </div>
      <div class="header-title">
        <div>
          <div>Computer Science</div>
          <div style="font-size:1.3em;font-weight:700;color:#444;">Machine Learning Website</div>
        </div>
      </div>
    </header>
    <div class="header-divider">
    </div>
    <article class="content">
      <section class="menu">
        <el-menu :default-openeds="['1','2']" default-active="1" background-color="#2b2925" text-color="#fff" active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <span>People</span>
            </template>
            <a v-for="(people, index) in people" :key="'people'+index" :href="people.url" target="_blank">
              <el-menu-item :index="'people'+index">{{people.name}}</el-menu-item>
            </a>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <span>Labs</span>
            </template>
            <a v-for="(lab,index) in labs" :key="'lab'+index" title="" :href="lab.url" target="_blank">
              <el-menu-item :index="'lab-'+index"> {{lab.labName}} </el-menu-item>
            </a>
          </el-submenu>
        </el-menu>
      </section>
      <section class="router-content">
        <router-view/>
      </section>
    </article>
  </div>
</template>

<script>
import dataConfig from './assets/data.json'
export default {
  name: 'App',
  data() {
    return {
      activeIndex: 1,
      labs: dataConfig.labs,
      people: dataConfig.people
    }
  }
}
</script>

<style>
body {
  background: #a6192e
    url(//www.sfu.ca/etc/designs/clf/clientlibs/clf/source/assets/textured-red-01-small.png)
    top left repeat;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1520px;
  margin: 0 auto 0 auto;
  background: #fff;
}
.logo {
  height: 100%;
}
.header {
  text-align: left;
  display: flex;
}

.content {
  display: flex;
}
.content section {
  flex-grow: 1;
}
.content > .menu {
  width: 20%;
  background-color: #2b2925;
  text-align: left;
}
.content > .router-content {
  width: 85%;
}
h1 {
  font-weight: 700;
  font-size: 1.2em;
}
.header-divider {
  clear: left;
  height: 10px;
  width: 100%;
  background: #3d3935
    url(//www.sfu.ca/etc/designs/clf/clientlibs/clf/source/assets/bg-small.png) -70px
    0 no-repeat;
}
.header-title {
  margin: 0 auto 0.5em 2em;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  line-height: 150%;
}
a {
  text-decoration: none;
  color: inherit;
}
a:active {
  text-decoration: none;
  color: inherit;
}
</style>
