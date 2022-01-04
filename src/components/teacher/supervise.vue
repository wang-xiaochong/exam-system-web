<template>
  <div>
    <!-- <el-button @click="resetDateFilter">清除日期过滤器</el-button> -->
    <!-- <el-button @click="clearFilter">清除所有过滤器</el-button> -->

    <el-table ref="filterTable" :data="tableData" style="width: 100%">
      <el-table-column
        prop="id"
        label="学号"
        sortable
        width="180"
        column-key="id"
        :filters="[
          { text: '2016-05-01', value: '2016-05-01' },
          { text: '2016-05-02', value: '2016-05-02' },
          { text: '2016-05-03', value: '2016-05-03' },
          { text: '2016-05-04', value: '2016-05-04' },
        ]"
        :filter-method="filterHandler"
      >
      </el-table-column>

      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="left-time" label="剩余时间"> </el-table-column>

      <el-table-column
        prop="status"
        label="状态"
        width="180"
        :filters="[
          { text: '未进入', value: 'Not entered' },
          { text: '进行中', value: 'Enterd' },
          { text: '已完成', value: 'Finished' },
        ]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.status === 'Not entered' ? 'primary' : 'success'"
            disable-transitions
            >{{ scope.row.status }}</el-tag
          >
        </template>
      </el-table-column>

      <el-table-column label="操作" width="180">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">延时</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">违纪</el-button>
      </template>
    </el-table-column>



    </el-table>

    <!-- <div>
      <el-button @click="getSupervise">test</el-button>
    </div> -->
  </div>
</template>

<script>
// import { getSupervise } from "@/api/teacher/exam";
export default {
    props: ["superviseData"],
  data() {
    return {
      tableData: [],
    };
  },
  watch:{
    superviseData(val){
      this.tableData = val
    }
  },
  // created:function(){
  //   getSupervise()
  // },
  methods: {
    resetDateFilter() {
      this.$refs.filterTable.clearFilter("id");
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter();
    },
    formatter(row, column) {
      return row.left - time;
    },
    filterTag(value, row) {
      return row.status === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      
    // getSupervise() {
    //   // console.log("父组件",this.superviseData)
    //   this.tableData = this.superviseData

    //   // getSupervise()
    //   //   .then((res) => {
    //   //     this.tableData = res.data.info;
    //   //     console.log(res);
    //   //   })
    //   //   .catch((res) => {
    //   //     console.log(res);
    //   //   });

    // },
  },
};
</script>