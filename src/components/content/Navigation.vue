<template>
  <div class="myNavigation">
    <el-row type="flex" :gutter="0">
      <el-col :lg="15" :md="12" :sm="10" :xs="21">
        <div class="logo">
          <img src="~assets/img/logo.png" alt style="width: 50px; height: 50px" />
          <!-- <span></span>Chinbor's Blog -->
        </div>
      </el-col>
      <el-col :lg="9" :md="12" :sm="14" :xs="0">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="/home">首页</el-menu-item>
          <el-menu-item index="/archives">归档</el-menu-item>
          <el-menu-item index="/categories">分类</el-menu-item>
          <el-menu-item index="/tags">标签</el-menu-item>
          <el-menu-item index="/about">关于</el-menu-item>
          <el-menu-item index="/backstage">后台</el-menu-item>
        </el-menu>
      </el-col>
      <el-col class="side-btn" :md="0" :sm="0" :xs="3">
        <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            <button class="side-toggle">
              <span class="btn-bar"></span>
              <span class="btn-bar"></span>
              <span class="btn-bar"></span>
            </button>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="/home">首页</el-dropdown-item>
            <el-dropdown-item command="/archives">归档</el-dropdown-item>
            <el-dropdown-item command="/categories">分类</el-dropdown-item>
            <el-dropdown-item command="/tags">标签</el-dropdown-item>
            <el-dropdown-item command="/about">关于</el-dropdown-item>
            <el-dropdown-item command="/backstage">后台</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
  <!-- <el-container> -->

  <!-- </el-container> -->
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      activeIndex: "/home"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
      this.$router.push(key);
    },
    handleCommand(command) {
      this.$router.push(command);
    }
  }
};
</script>

<style scoped>
.myNavigation {
  position: fixed;
  /* margin:10px auto; */
  height: 50px;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
  padding: 15px;
  background: #fff;
}
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
.logo {
  /* border: 1px solid red; */
  /* border-radius: 4px; */
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04); */
  font-size: 22px;
}
.side-toggle {
  margin-top: 2px;
  padding: 9px 10px;
  background: transparent;
  border: none;
}
.btn-bar {
  display: block;
  width: 22px;
  height: 2px;
  background: #555;
  border-radius: 1px;
}
.btn-bar + .btn-bar {
  margin-top: 4px;
}
.side-btn {
  margin: auto;
}
</style>