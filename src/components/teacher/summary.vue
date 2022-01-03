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
  </el-table>

  <el-button @click="getStudentGrade">grade</el-button>


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
    methods: {
        getStudentGrade(){
          getStudentGrade().then(res => {
            console.log(res)
            this.tableData = res.data.info
          })
          .catch(res => {
            console.log(res)
          })


        },
      
    }
  };
</script>