<template>
  <div class="base-info">
    <select-edition :edition.sync="edition"></select-edition>
    <el-row>
      <el-col :span="8">
        <div class="label">合同编号</div>
        <div class="val"></div>
      </el-col>
      <el-col :span="8">
        <div class="label">租金模式</div>
        <div class="val"></div>
      </el-col>
    </el-row>
    <!-- 甲方和乙方信息 -->
    <el-row class="info">
      <el-row>
        <el-col :span="8">
          <div class="label">甲方</div>
          <div class="val"></div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <div class="label">乙方</div>
          <div class="val"></div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <div class="label">联系人</div>
          <div class="val"></div>
        </el-col>
        <el-col :span="8">
          <div class="label">联系电话</div>
          <div class="val"></div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <div class="label">证件类型</div>
          <div class="val"></div>
        </el-col>
        <el-col :span="8">
          <div class="label">证件号码</div>
          <div class="val"></div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <div class="label">地&nbsp;&nbsp;址</div>
          <div class="val"></div>
        </el-col>
      </el-row>
    </el-row>
    <!-- 合同具体信息 -->
    <resources-info></resources-info>
    <!-- 人员信息 -->
    <el-row>
      <el-col :span="8">
        <div class="label">责任营运专员</div>
        <div class="val"></div>
      </el-col>
      <el-col :span="8">
        <div class="label">经办人</div>
        <div class="val"></div>
      </el-col>
      <el-col :span="8">
        <div class="label">签署日期</div>
        <div class="val"></div>
      </el-col>
    </el-row>
    <!-- 附件 -->
    <div class="enclosure">
      <h5 class="enclosure-title">查看附件</h5>
      <ol class="enclosure-list">
        <li class="enclosure-item">
          <div class="icon">这里是图标</div>
          <p class="text">test</p>
        </li>
      </ol>
    </div>
    <!-- 人员信息 -->
    <el-row>
      <el-row>
        <el-col :span="8">
          <div class="label">合同创建人</div>
          <div class="val"></div>
        </el-col>
        <el-col :span="8">
          <div class="label">创建时间</div>
          <div class="val"></div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <div class="label">合同审核人</div>
          <div class="val"></div>
        </el-col>
        <el-col :span="8">
          <div class="label">审核时间</div>
          <div class="val"></div>
        </el-col>
      </el-row>
    </el-row>
    <!-- 合同变更记录 -->
    <change-record></change-record>
   
  </div>
</template>
<script>
export default {
  components: {
    selectEdition: () => import("../components/selectEdition"),
    changeRecord: () => import("../components/changeRecord"),
    resourcesInfo: () => import("./components/resourcesInfo"),
  },
  data() {
    return {
      edition: "1"
    };
  }
};
</script>
<style lang="scss">
.base-info {
  font-size: 14px;
  line-height: 40px;
  .enclosure {
    display: flex;
    .enclosure-title {
      margin-right: 20px;
      flex: none;
      font-weight: 900;
    }
    .enclosure-list {
      flex: none;
    }
  }
}
</style>