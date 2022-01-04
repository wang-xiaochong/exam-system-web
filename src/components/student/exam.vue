<template>
  <div id="examDetail">
    <!-- exam -->

    <ol>
      <li v-for="item in this.questions" :key="item.id">
        {{ item.info }} <br><br>
        <el-radio-group v-model="item.choice" >
        <el-radio :label="item.id*10 + 1" >{{item.answer.A}}</el-radio>
        <el-radio :label="item.id*10 + 2" >{{item.answer.B}}</el-radio>
        <el-radio :label="item.id*10 + 3" >{{item.answer.C}}</el-radio>
        <el-radio :label="item.id*10 + 4" >{{item.answer.D}}</el-radio>
      </el-radio-group>
      <br><br>
      </li>
    </ol>
  </div>
</template>



<script>
import { getQuestions } from "@/api/student/exam";

export default {
  data() {
    return {
      questions: [],
    };
  },
  created: function () {
    this.getQuestions();
  },
  methods: {

    getQuestions() {
      getQuestions()
        .then((res) => {
          // console.log(res.data)
          for (let index = 0; index < res.data.question.length; index++) {
              this.$set(res.data.question[index] , "choice", "")
          }
          this.questions = res.data.question;
          console.log(this.questions);
        })
        .catch((res) => {
          console.log(res);
        });
    },





  },
};
</script>


<style scoped>
#examDetail {
  position: absolute;
  display: inline-block;
  left: 6%;
  width: 90%;
  top: 10%;
  bottom: 10%;
  /* filter:alpha(Opacity=100);-moz-opacity:1;opacity: 1; */
  /* background: rgb(17, 17, 17); */
}
</style>