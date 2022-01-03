<template>
  <div>
    choice
    <div>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in subjects"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
          <span style="float: left">{{ item.label }}</span>
          <span style="float: right; color: #8492a6; font-size: 13px">{{
            item.value
          }}</span>
        </el-option>
      </el-select>
      <el-button @click="sendChoice" type="primary" round>确定</el-button>
    </div>
  </div>
</template>

<script>
import { getSubjects } from "@/api/teacher/frontExam";

export default {
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
      this.$router.push({ path: "/teacher/exam" });
    },
  },
};
</script>