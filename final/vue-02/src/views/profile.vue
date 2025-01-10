<template>
  <div class="profile-page">
    <div class="page-header">
      <h1>个人介绍</h1>
    </div>

    <div class="content-wrapper">
      <div class="profile-grid">
        <section class="personal-info">
          <div class="profile-card">
            <div class="profile-image">
              <img src="@/assets/pic.jpg" alt="个人照片">
            </div>
            <div class="profile-details">
              <h2>基本信息</h2>
              <ul>
                <li><span>姓名：</span>王杰正</li>
                <li><span>性别：</span>男</li>
                <li><span>籍贯：</span>浙江台州</li>
                <li><span>学历：</span>本科在读</li>
                <li><span>专业：</span>软件工程</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="design-intro">
          <h2>网站设计说明</h2>
          <div class="design-content">
            <div class="design-item">
              <h3>设计理念</h3>
              <p>本网站采用现代化的设计风格，以简洁、清晰为主要特点，突出展示浙江财经大学的特色和风采。</p>
            </div>

            <div class="design-item">
              <h3>技术栈</h3>
              <ul class="tech-list">
                <li>
                  <i class="fab fa-vuejs"></i>
                  <span>Vue 3</span>
                  <p>使用Vue 3框架开发，采用组合式API提高代码复用性</p>
                </li>
                <li>
                  <i class="fas fa-route"></i>
                  <span>Vue Router</span>
                  <p>实现前端路由管理，提供流畅的页面导航体验</p>
                </li>
                <li>
                  <i class="fas fa-palette"></i>
                  <span>Element Plus</span>
                  <p>使用Element Plus组件库，确保界面美观统一</p>
                </li>
              </ul>
            </div>

            <div class="design-item">
              <h3>开发心得</h3>
              <div class="experience-content">
                <p>在开发过程中，我注重以下几个方面：</p>
                <ul>
                  <li>响应式设计，确保在各种设备上都有良好的显示效果</li>
                  <li>组件化开发，提高代码复用性和维护性</li>
                  <li>性能优化，确保网站加载速度���运行效率</li>
                  <li>用户体验，注重交互设计和视觉效果</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfilePage'
}
</script>

<style scoped>
.profile-page {
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

.profile-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;
}

h2 {
  color: #2c3e50;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
  margin-bottom: 30px;
}

.profile-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  overflow: hidden;
}

.profile-image {
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 8px 8px 0 0;
}

.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s;
}

.profile-image:hover img {
  transform: scale(1.02);
}

.profile-details {
  padding: 20px;
  background: white;
  border-radius: 0 0 8px 8px;
}

.profile-details ul {
  list-style: none;
  padding: 0;
}

.profile-details li {
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.profile-details li span {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 10px;
}

.design-content {
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.design-item {
  margin-bottom: 30px;
}

.design-item h3 {
  color: #2c3e50;
  margin-bottom: 15px;
}

.tech-list {
  list-style: none;
  padding: 0;
}

.tech-list li {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.tech-list i {
  font-size: 2rem;
  color: #3498db;
  margin-right: 15px;
}

.tech-list span {
  font-weight: bold;
  margin-right: 15px;
  min-width: 100px;
}

.experience-content ul {
  padding-left: 20px;
  margin-top: 10px;
}

.experience-content li {
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .profile-grid {
    grid-template-columns: 1fr;
  }
  
  .tech-list li {
    flex-direction: column;
    text-align: center;
  }
  
  .tech-list i {
    margin: 0 0 10px 0;
  }
  
  .tech-list span {
    margin: 0 0 10px 0;
  }
}
</style> 