<template>
  <div>
  
    <el-table
      ref="filterTable"
      :data="
        tableData.filter((data) => !search || (data.name + '').includes(search))
      "
      style="width: 100%"
    >
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

      <el-table-column>
        <div slot="header" slot-scope="scope">
          <el-tag v-show="false">
            {{ scope.row }}
          </el-tag>
          <div>
            <el-input
              v-model="search"
              style="width: 50%"
              size="mini"
              placeholder="输入关键字搜索"
            ></el-input>
          </div>
        </div>
      </el-table-column>

      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >判分</el-button
          >
          <!-- <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >违纪</el-button
          > -->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>



<script>
// import { getSupervise } from "@/api/teacher/exam";
export default {
  props: ["studentList"],
  data() {
    return {
      search: "",
      tableData: [],
    };
  },
  watch: {
    studentList(val) {
      this.tableData = val;
    },
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
      this.$router.push({ path: "/teacher/scoring" });
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