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

    <el-container class="main-container">
      <el-aside width="20%" class="menu-col" :class="{ 'menu-open': menuOpen }">
        <nav class="side-nav">
          <router-link to="/" :class="{ active: section === 'home' }">Home</router-link>
          <router-link to="/seminars" :class="{ active: section === 'seminars' }">Seminars</router-link>
          <router-link to="/news" :class="{ active: section === 'news' }">News</router-link>
          <router-link to="/pubs" :class="{ active: section === 'pubs' }">Publications</router-link>
          <button class="nav-group" :class="{ open: openGroup === 'people' }" @click="toggleGroup('people')">People</button>
          <div class="nav-sub" v-show="openGroup === 'people'">
            <a v-for="(person, index) in people" :key="'people' + index" :href="person.url" target="_blank">{{ person.name }}</a>
          </div>
          <button class="nav-group" :class="{ open: openGroup === 'labs' }" @click="toggleGroup('labs')">Related Labs</button>
          <div class="nav-sub" v-show="openGroup === 'labs'">
            <a v-for="(lab, index) in labs" :key="'lab' + index" :href="lab.url" target="_blank">{{ lab.labName }}</a>
          </div>
        </nav>
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
      menuOpen: false,
      openGroup: null,
      labs: dataConfig.labs,
      people: dataConfig.people,
      seminars: dataConfig.seminars,
      general: dataConfig.general
    }
  },
  computed: {
    // Which menu item to highlight for the current page
    section() {
      const path = this.$route.path
      if (path.startsWith('/seminar')) {
        return 'seminars'
      } else if (path.startsWith('/news')) {
        return 'news'
      } else if (path.startsWith('/pubs')) {
        return 'pubs'
      }
      return 'home'
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
    toggleGroup(name) {
      this.openGroup = this.openGroup === name ? null : name
    }
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
.main-container {
  overflow-x: hidden;
}
/* clip (unlike hidden) lets the side menu stay in view while scrolling */
@supports (overflow-x: clip) {
  .main-container {
    overflow-x: clip;
  }
}

/* Side menu, styled like the side navigation on SFU's own sites */
.el-aside.menu-col {
  overflow: visible;
  background-color: #f5f5f5;
  border-right: 1px solid #e2e2e2;
}
.side-nav {
  position: sticky;
  top: 0;
  max-height: 100vh;
  overflow-y: auto;
  padding: 1em 0;
  text-align: left;
}
.side-nav > a,
.nav-group {
  display: block;
  width: 100%;
  padding: 0.8em 1.4em;
  border: none;
  border-left: 4px solid transparent;
  border-bottom: 1px solid #e2e2e2;
  background: none;
  font: inherit;
  font-size: 1.1em;
  font-weight: 600;
  color: #333;
  text-align: left;
  cursor: pointer;
}
.side-nav > a:hover,
.nav-group:hover {
  color: #a6192e;
}
.side-nav > a.active {
  border-left-color: #a6192e;
  background-color: #fff;
  color: #a6192e;
}
/* Small triangle that turns down when the group is open */
.nav-group::after {
  content: "";
  display: inline-block;
  margin-left: 0.5em;
  border-top: 0.3em solid transparent;
  border-bottom: 0.3em solid transparent;
  border-left: 0.35em solid currentColor;
  vertical-align: middle;
  transition: transform 0.2s;
}
.nav-group.open::after {
  transform: rotate(90deg);
}
.nav-sub {
  padding: 0.4em 0 0.7em 0;
  border-bottom: 1px solid #e2e2e2;
}
.nav-sub a {
  display: block;
  padding: 0.35em 1.4em 0.35em 2.2em;
  color: #555;
}
.nav-sub a:hover {
  color: #a6192e;
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
    border-bottom: 1px solid #e2e2e2;
    background-color: #f5f5f5;
    color: #333;
    font: inherit;
    font-size: 1.1em;
    font-weight: 600;
    text-align: left;
    cursor: pointer;
  }
  .el-aside.menu-col {
    border-right: none;
  }
  .side-nav {
    position: static;
    max-height: none;
    padding: 0;
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
