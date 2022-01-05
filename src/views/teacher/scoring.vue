<template>
  <div>
    <el-descriptions title="学生信息">
      <el-descriptions-item label="学号">{{
        studentInfo.id
      }}</el-descriptions-item>
      <el-descriptions-item label="姓名">{{
        studentInfo.name
      }}</el-descriptions-item>
    </el-descriptions>
    <div id="grade-scoring">
      <Scoring></Scoring>
    </div>
  </div>
</template>



<script>
import Scoring from "@/components/teacher/scoring";

export default {
  props: ["studentInfo"],
  components: {
    Scoring,
  },
  methods: {},
};
</script>