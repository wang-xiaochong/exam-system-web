<template>
  <div>
    <h2>请选择考试科目</h2>
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
    </div>

    <div>
      <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
        <span
          >确定后即进入考试，计时开始。进入考试后中途离开或退出计时继续，时间截止后将自动交卷</span
        >
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="enterStudentExam">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { getSubjects } from "@/api/student/frontExam";

export default {
  data() {
    return {
      subjects: [],
      value: "",
      dialogVisible: false,
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

    enterStudentExam() {
      this.dialogVisible = false;
      this.$router.push({ path: "/student/"+this.value+"exam" });
    },
    sendChoice() {
      console.log(this.value);
      if (this.value != "") {
        this.dialogVisible = true;
      } else {
         this.$alert('请选择科目', '提示', {
          confirmButtonText: '确定',
        });
      }
    },
  },
};
</script>