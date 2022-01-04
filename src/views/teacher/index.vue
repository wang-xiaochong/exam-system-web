<template>

  <div>
    
    <div class="header">
      <Header></Header>
    </div>

    <div class="aside" :style="{ width: '280px' }">
      <Aside @choiceIndex="getIndex"></Aside>
    </div>

    <div class="main" :style="{ left: '200px' }">
      

      <div class="home" v-show="this.choice == 0">
        <home></home>
      </div>
      <div class="exam" v-show="this.choice == 1">
        <exam :superviseData="this.superviseData"></exam>
      </div>
      <div class="scoring" v-show="this.choice == 2">
        <scoring :studentList="this.studentList"></scoring>
      </div>
      <div class="summary" v-show="this.choice == 3">
        <Summary></Summary>
      </div>
      <div class="info" v-show="this.choice == 4">
        <info></info>
      </div>
      <div class="choice" v-show="this.choice == 5">
        <Choice
          @getSuperviseData="getSuperviseData"
          @getStudentList="getStudentList"
          :subjectDetail="this.tempChoice"
        ></Choice>
      </div>
      <div class="list" v-show="this.choice == 6">
        <SList :studentList="this.studentList"></SList>
      </div>

      <!-- <el-button @click="getSuperviseData">123</el-button> -->
    </div>
  </div>
</template>




<script>
import Choice from "@/components/teacher/choice";
import Aside from "@/components/layout/home/aside.vue";
import Header from "@/components/layout/home/header.vue";
import scoring from "./scoring.vue";
import home from "./home.vue";
import exam from "./exam.vue";
import info from "./info.vue";
import Summary from "./summary.vue";
import SList from "./studentList.vue";

export default {
  components: {
    Header,
    Aside,
    Choice,
    scoring,
    home,
    exam,
    info,
    Summary,
    SList,
  },
  data() {
    return {
      choice: 0,
      tempChoice: 0,
      superviseData: [],
      studentList: [],
    };
  },
  methods: {
    getIndex(index) {
      if (index > 0 && index < 3) {
        this.tempChoice = index;
        this.choice = 5;
      } else {
        this.choice = index;
      }
    },

    getSuperviseData(payload) {
      this.choice = 1;
      this.superviseData = payload;
    },
    getStudentList(payload) {
      this.choice = 6;
      this.studentList = payload;
    },
  },
};
</script>









<style scoped>
/* 头部样式 */
.header {
  position: absolute;
  line-height: 50px;
  top: 0px;
  left: 0px;
  right: 0px;
  /* background-color: #2d3a4b; */
}

/* 左侧样式 */
.aside {
  position: absolute;
  /* width: 230px; */
  top: 50px; /* 距离上面50像素 */
  left: 0px;
  bottom: 0px;
  overflow-y: auto; /* 当内容过多时y轴出现滚动条 */
  /* background-color: #545c64; */
}

/* 主区域 */
.main {
  position: absolute;
  top: 50px;
  /* left: 230px; */
  bottom: 0px;
  right: 0px; /* 距离右边0像素 */
  padding: 10px;
  overflow-y: auto; /* 当内容过多时y轴出现滚动条 */
  /* background-color: red; */
}
/* .home {
  background-image: url("../../assets/computer.jpg");
  width: 100%;
  height: 100%;
  position: fixed;
  padding: 25px;
  background-size: 100% 100%;
} */
</style>