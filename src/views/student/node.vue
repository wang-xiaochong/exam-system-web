<template>
  <div class="node">
    <div class="title">
      <h1>考试须知</h1>
    </div>
    <div class="main">
      <h3>1. 坚守诚信原则，学生本人全程独立完成测试。</h3>
      <h3>
        2.测试过程中，桌椅上（内）不能有任何与考试内容相关的参考资料，学生不得使用其它电子设备（用作考试的手机除外）。
      </h3>
      <h3>
        3.测试开始后，考试后台将不定时抓拍作答界面，学生不得切换测试页面；切换次数累计超过一定值，将被认定为成绩无效。
      </h3>
      <h3>
        4.测试过程中如遇设备故障导致考试中断，学生可立即通过学习通
        APP的“班级群聊”联系监考老师说明情况，并立即重启设备继续 完成测试。
      </h3>
      <h3>
        5.学生应自觉维护本人的考试信息和权益，对测试页面不拍照、不截图、不进行录音录像等任何违反考试纪律的行为。
      </h3>
    </div>
    <div class="footer">
      &#12288; &#12288; &#12288; &#12288; &#12288; &#12288; &#12288; &#12288;
      <el-checkbox v-model="checked">我已阅读考试须知</el-checkbox>
      &#12288;&#12288; &#12288; &#12288; &#12288; &#12288; &#12288; &#12288;
      &#12288; &#12288; &#12288; &#12288; &#12288; &#12288;
      <el-button @click="enterExam">进入考试</el-button>
    </div>




  </div>
</template>


<script>
export default {
  data() {
    return {
      checked: false,
     
    };
  },
  methods: {
    enterExam() {
      if (this.checked) {
          this.$router.push({path:"/student"})
      } else {
          this.$alert('请先阅读考试须知', '提示', {
          confirmButtonText: '确定',
        });
      }
    },

    
  },
};
</script>






<style scoped>
.node {
  position: absolute;
  display: inline-block;
  height: 91%;
  top: 50px;
  left: 50px;
  width: 95%;
  overflow: hidden;
  border-radius: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  /* background: rgba(15, 11, 11, 0.3); */
  /* opacity:0.7; */
  /* filter:alpha(Opacity=60);-moz-opacity:0.6;opacity: 0.6; */
  /* background-color: lawngreen; */
}
.title {
  position: relative;
  width: 100%;
  left: 40%;
  top: 2%;
  margin: 50px;
}
.main {
  position: relative;
  width: 100%;
  left: 5%;
  top: 2%;
  margin: 50px;
}
.footer {
  position: relative;
  width: 100%;
  left: 5%;
  top: 40%;
  margin: 50px;
}
</style>
