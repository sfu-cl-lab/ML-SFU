<template>
  <div id="app">
    <el-menu class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">
        <h1>
          SFU Machine Learning
          <!-- <img class="logo" height="100%" src="https://www.sfu.ca/etc/designs/clf/clientlibs/clf/source/assets/sfu-logo@2x.png"> -->
        </h1>
      </el-menu-item>
      <el-menu-item index="2">Publication</el-menu-item>
      <el-menu-item index="3">People</el-menu-item>
    </el-menu>
    <article class="content">
      <section class="menu">
        <el-menu default-active="2">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>Navigator One</span>
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
            <i class="el-icon-menu"></i>
            <span>Navigator Two</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span>Navigator Three</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span>Navigator Four</span>
          </el-menu-item>
        </el-menu>
      </section>
      <section>
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1520px;
  margin: 0 auto 0 auto;
  /* background: #a6192e
    url(http://www.sfu.ca/etc/designs/clf/clientlibs/clf/source/assets/textured-red-01-small.png)
    top left repeat; */
}
.logo {
  height: 100%;
}
.branding {
  width: 337px;
  height: 46px;
  /* background: transparent
    url(http://www.sfu.ca/etc/designs/clf/clientlibs/clf/source/assets/sfu-logo.png)
    top left no-repeat; */
  background-size: contain;
}
.site-title {
  color: #3d3935;
  clear: left;
  margin-left: 98px;
}
.content {
  display: flex;
}
.content section {
  flex-grow: 1;
}
.content > .menu {
  width: 30%;
}
</style>
