<template>
<div>
 <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="id"
      label="ID"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名">
    </el-table-column>
    <el-table-column
      prop="Chinese"
      sortable
      label="Chinese">
    </el-table-column>
    <el-table-column
      prop="Math"
      sortable
      label="Math">
    </el-table-column>
    <el-table-column
      prop="English"
      sortable
      label="English">
    </el-table-column>
      <el-table-column
      prop="Average"
      sortable
      label="Average">
    </el-table-column>
  </el-table>

  <!-- <el-button @click="getStudentGrade">grade</el-button> -->


</div>
 
</template>

<script>
import { getStudentGrade } from "@/api/teacher/exam";
  export default {
    data() {
      return {
       tableData:[]
      };
    },
    created:function(){
      this.getStudentGrade()
    },
    methods: {
        getStudentGrade(){
          getStudentGrade().then(res => {
            console.log(res)
            this.tableData = res.data.info
            console.log(res.data.info)
            for (let index = 0; index < this.tableData.length; index++) {
              this.$set(this.tableData[index],"Average",((this.tableData[index].Chinese+this.tableData[index].Math+this.tableData[index].English)/3.0).toFixed(2))
            }

          })
          .catch(res => {
            console.log(res)
          })


        },
      
    }
  };
</script>