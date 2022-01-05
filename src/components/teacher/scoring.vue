<template>
  <div>
    scoring

    <div id="answer-details" style="width:100px display:inline-block">
      <ol>
        <li v-for="(item,index) in this.answers" :key="item.serialNumber">
          {{ item.question }}<br />{{ item.answer }} <br /><br />
          <el-button @click="judgeGrade(item.serialNumber)">打分</el-button> {{item.grade}}

          <div>
            <!-- <el-button type="text" @click="centerDialogVisible = true">点击打开 Dialog</el-button> -->
            <el-dialog
              title="答题详情"
              :visible.sync="centerDialogVisible"
              width="30%"
              center
            >
              <span>{{item.serialNumber}}</span>
              <span>{{ item.question }}</span
              ><br /><br />
              <span>{{ item.answer }}{{index}}</span
              ><br /><br />
              <el-button size="mini" @click="changeGrade(0)">0</el-button
              ><el-button size="mini" @click="changeGrade(1)">1</el-button
              ><el-button size="mini" @click="changeGrade(2)">2</el-button
              ><el-button size="mini" @click="changeGrade(3)">3</el-button
              ><el-button size="mini" @click="changeGrade(4)">4</el-button
              ><el-button size="mini" @click="changeGrade(5)">5</el-button
              ><el-button size="mini" @click="changeGrade(6)">6</el-button
              ><el-button size="mini" @click="changeGrade(7)">7</el-button
              ><el-button size="mini" @click="changeGrade(8)">8</el-button
              ><el-button size="mini" @click="changeGrade(9)">9</el-button
              ><el-button size="mini" @click="changeGrade(10)">10</el-button
              ><el-button size="mini" @click="changeGrade(11)">11</el-button
              ><el-button size="mini" @click="changeGrade(12)">12</el-button>

              <span slot="footer" class="dialog-footer">
                <el-button @click="centerDialogVisible = false"
                  >取 消</el-button
                >
                <el-button type="primary" @click="laterGrade(item,index)"
                  >确 定</el-button
                >
              </span>
            </el-dialog>
          </div>

          <br /><br />
        </li>
      </ol>
    </div>
  </div>
</template>



<script>
import { getStudentAnswer } from "@/api/teacher/exam";

export default {
  data() {
    return {
      answers: [],
      centerDialogVisible: false,
      grade:"",
    };
  },
  watch:{
    answers(val){
      console.log(val)
    }
  },
  created: function () {
    this.getStudentAnswer();
  },
  methods: {
    getStudentAnswer() {
      getStudentAnswer()
        .then((res) => {
          console.log(res.data);
          this.answers = res.data.info[0].answer;
          //   for (let index = 0; index < res.data.question.length; index++) {
          //       this.$set(res.data.question[index] , "choice", "")
          //   }
          //   this.questions = res.data.question;
          //   console.log(this.questions);
        })
        .catch((res) => {
          console.log(res);
        });
    },
    judgeGrade(serialNumber) {
      this.centerDialogVisible = true;
      console.log(serialNumber);
    },
    changeGrade(value){
      this.grade = value
    },
    laterGrade(item,index){
      this.answers[index].grade = this.grade
      this.centerDialogVisible = false

    }
  },
};
</script>

