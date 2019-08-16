<template>
  <div class="relevant-enclosure">
    <h3 class="title">相关附件</h3>
    <el-row>
      <el-upload class="avatar-uploader" :show-file-list="false">
        <!-- <img v-if="imageUrl" :src="imageUrl" class="avatar" /> -->
        <!-- <i v-else class="el-icon-plus avatar-uploader-icon"></i> -->
        <i class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </el-row>
    <p>图片文件，不超过200KB，格式JPG/PNG，最多可上传三张</p>
  </div>
</template>
<script>
export default {};
</script>
<style lang="">
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>