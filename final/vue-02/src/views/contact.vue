<template>
  <div class="contact-page">
    <div class="page-header">
      <h1>联系我们</h1>
    </div>

    <div class="content-wrapper">
      <div class="contact-grid">
        <section class="contact-info">
          <h2>联系方式</h2>
          <div class="info-list">
            <div class="info-item">
              <i class="fas fa-map-marker-alt"></i>
              <div class="info-content">
                <h3>地址</h3>
                <p>浙江省杭州市下沙高教园区学源街18号</p>
              </div>
            </div>
            
            <div class="info-item">
              <i class="fas fa-phone"></i>
              <div class="info-content">
                <h3>电话</h3>
                <p>招生办：0571-87557555</p>
                <p>教务处：0571-87557666</p>
              </div>
            </div>
            
            <div class="info-item">
              <i class="fas fa-envelope"></i>
              <div class="info-content">
                <h3>邮箱</h3>
                <p>admission@zufe.edu.cn</p>
              </div>
            </div>
          </div>
        </section>

        <section class="contact-form">
          <h2>在线留言</h2>
          <el-form ref="form" :model="form" :rules="rules" label-width="80px">
            <el-form-item label="姓名" prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="form.email"></el-input>
            </el-form-item>
            
            <el-form-item label="主题" prop="subject">
              <el-input v-model="form.subject"></el-input>
            </el-form-item>
            
            <el-form-item label="留言内容" prop="message">
              <el-input type="textarea" v-model="form.message" rows="4"></el-input>
            </el-form-item>
            
            <el-form-item>
              <el-button type="primary" @click="submitForm">提交</el-button>
              <el-button @click="resetForm">重置</el-button>
            </el-form-item>
          </el-form>
        </section>
      </div>

      <section class="map-section">
        <h2>校园地图</h2>
        <div class="map-container">
          <img src="@/assets/map.jpg" alt="校园地图">
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
        ],
        subject: [
          { required: true, message: '请输入主题', trigger: 'blur' }
        ],
        message: [
          { required: true, message: '请输入留言内容', trigger: 'blur' },
          { min: 10, message: '留言内容不能少于10个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          // 这里添加提交表单的逻辑
          this.$message.success('提交成功！');
        } else {
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.form.resetFields();
    }
  }
}
</script>

<style scoped>
.contact-page {
  padding: 20px;
}

.page-header {
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
              #2c3e50;
  background-size: cover;
  background-position: center;
  color: white;
  padding: 60px 20px;
  text-align: center;
  margin-bottom: 40px;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 60px;
}

h2 {
  color: #2c3e50;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
  margin-bottom: 30px;
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.info-item i {
  font-size: 2rem;
  color: #3498db;
}

.info-content h3 {
  margin-bottom: 10px;
  color: #2c3e50;
}

.contact-form {
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  width: 100%;
}

.el-form {
  width: 90%;
  margin: 0 auto;
}

.el-form-item {
  margin-bottom: 25px;
}

.el-form-item:last-child {
  text-align: center;
  margin-top: 30px;
}

.el-button {
  min-width: 120px;
  margin: 0 10px;
}

.map-container {
  width: 100%;
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-top: 20px;
}

.map-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s;
}

.map-container:hover img {
  transform: scale(1.02);
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
  
  .info-item {
    flex-direction: column;
    text-align: center;
  }
  
  .info-item i {
    margin-bottom: 10px;
  }
}
</style> 