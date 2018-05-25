<template>
  <div id="app">
    <el-menu class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">
        <div>
          SFU Machine Learning
          <!-- <img class="logo" height="100%" src="https://www.sfu.ca/etc/designs/clf/clientlibs/clf/source/assets/sfu-logo@2x.png"> -->
        </div>
      </el-menu-item>
      <el-menu-item index="2">Publication</el-menu-item>
      <el-menu-item index="3">People</el-menu-item>
    </el-menu>
    <router-view/>
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
}
.logo {
  height: 100%;
}
</style>
