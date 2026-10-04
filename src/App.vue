<template>
  <div id="app">
    <header class="header">
      <a href="https://www.sfu.ca/" target="_blank">
        <img class="sfu-logo" src="./assets/sfu-logo.png" alt="Simon Fraser University">
      </a>
      <div class="header-title">
        <a class="header-sub-title" :href="general.sub_title_link">{{general.sub_title}}</a>
        <a class="header-main-title" href="#/">{{general.main_title}}</a>
      </div>
      <div class="header-links">
        <a v-for="(item,index) in general.links" :key="index" :href="item.url" target="_blank" :title="item.name" :aria-label="item.name">
          <img :src="require('./assets/icons/' + item.icon + '.svg')" :alt="item.name"/>
        </a>
      </div>
    </header>
    <div class="header-divider">
    </div>
    <!-- Only shown on small screens, where the side menu is collapsed -->
    <button class="menu-toggle" @click="menuOpen = !menuOpen">
      {{ menuOpen ? '✕' : '☰' }} Menu
    </button>

    <el-container class="main-container" style="overflow-x:hidden;">
      <el-aside width="20%" class="menu-col" :class="{ 'menu-open': menuOpen }">
        <section class="menu">
          <el-menu :default-openeds="[]" default-active="1" background-color="#2b2925" text-color="#fff" active-text-color="#ffd04b">
            <a href="../#/home"><el-menu-item index="home" router="true">
              <template slot="title">
                <span>Home</span>
              </template>
            </el-menu-item></a>
            <a href="../#/seminars"><el-menu-item index="seminars" router="true">
              <template slot="title">
                <span>Seminars</span>
              </template>
            </el-menu-item></a>
            <a href="../#/news"><el-menu-item index="news" router="true">
              <template slot="title">
                <span>News</span>
              </template>
            </el-menu-item></a>
            <a href="../#/pubs"><el-menu-item index="publications" router="true">
              <template slot="title">
                <span>Publications</span>
              </template>
            </el-menu-item></a>
            <el-submenu index="1">
              <template slot="title">
                <span>People</span>
              </template>
              <a v-for="(people, index) in people" :key="'people'+index" :href="people.url" target="_blank">
                <el-menu-item :index="'people'+index">{{people.name}}
                  <img style="height:20%;margin-left:0.2em;" src="./assets/icons/external-link-alt.svg">
                </el-menu-item>
              </a>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <span>Related Labs</span>
              </template>
              <a v-for="(lab,index) in labs" :key="'lab'+index" title="" :href="lab.url" target="_blank">
                <el-menu-item :index="'lab-'+index"> {{lab.labName}}
                  <img style="height:20%;margin-left:0.2em;" src="./assets/icons/external-link-alt.svg">
                </el-menu-item>
              </a>
            </el-submenu>
          </el-menu>
        </section>
      </el-aside>
      <el-aside width="80%" class="content-col">
        <router-view/>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import dataConfig from './assets/data.json'
export default {
  name: 'App',
  data() {
    return {
      activeIndex: 1,
      menuOpen: false,
      labs: dataConfig.labs,
      people: dataConfig.people,
      seminars: dataConfig.seminars,
      general: dataConfig.general
    }
  },
  watch: {
    $route() {
      // Close the mobile menu after navigating
      this.menuOpen = false
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style>
body {
  background: #a6192e url(./assets/textured-red-01-small.png) top left repeat;
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
  --text-color: #38a7bb;
  --text-desc-color: #656565;
}
.logo {
  height: 100%;
}
/* Header follows the layout of SFU's own sites (e.g. sfu.ca/computing) */
.header {
  text-align: left;
  display: flex;
  align-items: center;
  padding: 16px 24px;
}
/* The logo file is a 2x image (520x120): show it at half size so it stays sharp */
.sfu-logo {
  display: block;
  height: 60px;
}
.header-title {
  display: flex;
  flex-direction: column;
  margin-left: 2em;
  line-height: 1.25;
}
.header-sub-title {
  font-size: 0.8em;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #555;
}
.header-main-title {
  font-size: 1.6em;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #333;
}
.header-links {
  display: flex;
  align-items: center;
  margin-left: auto;
}
.header-links a {
  margin-left: 1.1em;
  opacity: 0.75;
  transition: opacity 0.2s;
}
.header-links a:hover {
  opacity: 1;
}
.header-links img {
  display: block;
  height: 26px;
}

.content {
  display: flex;
}
.content section {
  flex-grow: 1;
}
.menu {
  background-color: #2b2925;
  text-align: left;
  /* position: fixed; */
}
.menu-col {
  background-color: #2b2925;
}
.content > .router-content {
  width: 85%;
  height: 100%;
  overflow: auto;
}
h1 {
  font-weight: 700;
  font-size: 1.2em;
}
.header-divider {
  height: 6px;
  background-color: #a6192e;
}
a {
  text-decoration: none;
  color: inherit;
}
a:active {
  text-decoration: none;
  color: inherit;
}
ul.list {
  list-style: inside;
  line-height: 1.5;
  text-align: left;
}
.menu-toggle {
  display: none;
}

/* Small screens: stack the menu above the content instead of beside it */
@media (max-width: 900px) {
  .header {
    flex-wrap: wrap;
    padding: 12px 16px;
  }
  .sfu-logo {
    height: 44px;
  }
  /* Title moves to its own row under the logo and icons */
  .header-title {
    order: 3;
    width: 100%;
    margin: 0.7em 0 0 0;
  }
  .header-main-title {
    font-size: 1.35em;
  }
  .menu-toggle {
    display: block;
    width: 100%;
    padding: 0.8em 1em;
    border: none;
    background-color: #2b2925;
    color: #fff;
    font: inherit;
    font-weight: 700;
    text-align: left;
    cursor: pointer;
  }
  .main-container {
    flex-direction: column;
  }
  .main-container > .el-aside {
    width: 100% !important;
  }
  .menu-col {
    display: none;
  }
  .menu-col.menu-open {
    display: block;
  }
}
</style>
