<template>
  <div>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <el-menu-item index="0" @click="choiceIndex(0)">
        <i class="el-icon-menu"></i>
        <span slot="title"  >主页</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">数据管理</span>
        </template>
        <el-menu-item-group>
          <!-- <span slot="title">分组一</span> -->
          <el-menu-item index="1-1" @click="choiceIndex(1)"
            >在线监督</el-menu-item
          >
          <el-menu-item index="1-2" @click="choiceIndex(2)"
            >卷面判分</el-menu-item
          >
          <el-menu-item index="1-3" @click="choiceIndex(3)"
            >成绩汇总</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>

      <el-menu-item index="2" @click="choiceIndex(4)">
        <i class="el-icon-s-check" ></i>
        <span slot="title" >教师信息</span>
      </el-menu-item>
    </el-menu>

  </div>
</template>


<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 400px;
  /* min-height: 100%; */
}
</style>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      choice: 0,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    choiceIndex(value) {
      this.choice = value;
      this.$emit("choiceIndex", this.choice);
    },
  },
};
</script>