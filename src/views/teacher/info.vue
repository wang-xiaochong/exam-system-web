<template>
  <div>
    <el-descriptions class="margin-top" :column="3" border>
      <!-- <template slot="extra">
        <el-button type="primary" size="small">操作</el-button>
      </template> -->
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-user"></i>
          用户名
        </template>
        {{ tableData.name }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-mobile-phone"></i>
          手机号
        </template>
        {{ tableData.phone }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-location-outline"></i>
          居住地
        </template>
        {{ tableData.address }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-tickets"></i>
          任课专业
        </template>
        <el-tag size="small">{{ tableData.major }}</el-tag>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-office-building"></i>
          办公地址
        </template>
        {{ tableData.workplace }}
      </el-descriptions-item>
    </el-descriptions>

    <el-button type="primary" size="small" @click="edit">编辑</el-button>
    <el-button type="primary" size="small" @click="updatePassword"
      >修改密码</el-button
    >

    <el-dialog title="更改" :visible.sync="dialogVisible" width="30%">
      <span
        ><el-form
          :label-position="labelPosition"
          label-width="80px"
          :model="tableData"
        >
          <el-form-item label="用户名">
            <el-input v-model="tableData.name"></el-input>
          </el-form-item>
          <el-form-item label="手机号">
            <el-input v-model="tableData.phone"></el-input>
          </el-form-item>
          <el-form-item label="居住地">
            <el-input v-model="tableData.address"></el-input>
          </el-form-item>
          <el-form-item label="任课专业">
            <el-input v-model="tableData.major"></el-input>
          </el-form-item>
          <el-form-item label="办公地址">
            <el-input v-model="tableData.workplace"></el-input>
          </el-form-item>
        </el-form>
      </span>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateUser">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog title="更改密码" :visible.sync="dialogVisibleP" width="30%">
      <span>请输入旧密码:</span><br />
      <el-input style="width: 100%"></el-input>
      <span>请输入新密码:</span><br />
      <el-input style="width: 100%"></el-input>
      <span>请再次输入新密码:</span><br />
      <el-input style="width: 100%"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisibleP = false">取 消</el-button>
        <el-button type="primary" @click="sendUpdate">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>


<script>
export default {
  data() {
    return {
      labelPosition: "right",
      dialogVisible: false,
      dialogVisibleP: false,
      tableData: {
        name: "王小帅",
        phone: 15030077897,
        address: "河北省邯郸市丛台区",
        major: "Math",
        workplace: "信息与电气工程学院16号楼305",
      },
    };
  },
  methods: {
    edit() {
      this.dialogVisible = true;
    },
    updateUser() {
      this.dialogVisible = false;
      console.log("update");
    },
    updatePassword() {
      this.dialogVisibleP = true;
    },
    sendUpdate() {
      this.dialogVisibleP = false;
    },
  },
};
</script>