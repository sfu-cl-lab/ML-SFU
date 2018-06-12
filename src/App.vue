<template>
  <div id="app">
    <header>
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
        <el-menu :default-openeds="['1']" default-active="1" background-color="#2b2925" text-color="#fff" active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <span>People</span>
            </template>
            <el-menu-item-group title="Group One">
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item one</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <span>Labs</span>
          </el-menu-item>
          <el-menu-item index="3">
            <span>Navigator Three</span>
          </el-menu-item>
          <el-menu-item index="4">
            <span>Navigator Four</span>
          </el-menu-item>
        </el-menu>
      </section>
      <section class="router-content">
        <router-view/>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  name: 'App',
  date() {
    return {
      activeIndex: 1
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
header {
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
</style>
