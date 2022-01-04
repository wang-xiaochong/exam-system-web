<template>
  <div>
    <!-- choice -->
    <div>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in subjects"
          :key="item.value"
          :label="item.value"
          :value="item.value"
        >
          <span style="float: left">{{ item.label }}</span>
          <span style="float: right; color: #8492a6; font-size: 13px">{{
            item.value
          }}</span>
        </el-option>
      </el-select>
      <el-button @click="sendChoice" type="primary" round>确定</el-button>
      <!-- {{ subjectDetail }} -->
    </div>
  </div>
</template>

<script>
import { getSubjects } from "@/api/teacher/frontExam";
import { getSuperviseData } from "@/api/teacher/exam";
import { getStudentList } from "@/api/teacher/exam";


export default {
  props: ["subjectDetail"],
  data() {
    return {
      subjects: [],
      value: "",
    };
  },
  created: function () {
    this.getSubjects();
  },
  methods: {
    getSubjects() {
      getSubjects()
        .then((res) => {
          console.log(res.data.subject);
          this.subjects = res.data.subject;
        })
        .catch((res) => {
          console.log(res);
        });
    },
    sendChoice() {
      console.log(this.value);
      if (this.value == "") {
        this.$alert('请选择科目', '提示', {
          confirmButtonText: '确定',
        });
      } else{

        switch (this.subjectDetail) {
        case 1: {
          // 请求在线监督数据,携带参数 科目和监督
          getSuperviseData({subject:this.value,label:"Supervise"}).then(res=>{
             this.$emit("getSuperviseData", res.data.info);

          })
          .catch(res=>{

          })

          break;
        }
        case 2: {
           getStudentList({subject:this.value,label:"StudentList"}).then(res=>{
             this.$emit("getStudentList", res.data.info);

          })
          .catch(res=>{})
          // console.log("22");
          break;
        }
        
        default : {

        }
      }

      }
      

      // this.$router.push({ path: "/teacher/exam" });
    },
  },
};
</script>