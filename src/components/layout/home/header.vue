<template>
  <div class="myHeader">
    <img class="logo" :src="require('@/assets/logo.png')">
    <h3 class="title">教师在线监督判分平台</h3>

  <div>
    <img class="exit" @click="goToFront()" :src="require('@/assets/exit.png')">
  </div>
  </div>
</template>



<style scoped>
.myHeader {
  display: flex;
  flex-direction: row;
  align-items: center;
  background: rgba(0, 0, 0, 0.15);
}
.title {
  padding: 0;
  margin: 0;
  font-size: 16px;
  color: #fff;
}
.logo {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  margin-left: 5px;
}
.exit {
  position: absolute;
  width: 30px;
  height: 30px;
  right: 30px;
  top: 10px;
  margin-right: 10px;
  margin-left: 5px;
  cursor: pointer
}
</style>

<script>
export default {
  methods:{
     goToFront() {
      console.log("toFront");
      this.$router.push("/");
    },
  }
  
}
</script>
