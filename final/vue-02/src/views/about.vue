<template>
  <div class="about-page">
    <div class="page-header">
      <h1>学校简介</h1>
    </div>

    <div class="content-wrapper">
      <section class="history-section">
        <h2>学校历史</h2>
        <div class="history-content">
          <img src="@/assets/his.jpg" alt="学校历史照片">
          <p>浙江财经大学创建于1974年，是一所以经济学、管理学为主，经、管、法、工、文、理等多学科协调发展的特色鲜明的高水平财经大学...</p>
        </div>
      </section>

      <section class="motto-section">
        <h2>校训校风</h2>
        <div class="motto-content">
          <div class="motto-item">
            <h3>校训</h3>
            <p>诚信求是 励学致用</p>
          </div>
          <div class="motto-item">
            <h3>校风</h3>
            <p>勤朴务实 开放创新</p>
          </div>
        </div>
      </section>

      <section class="honors-section">
        <h2>学校荣誉</h2>
        <div class="honors-list">
          <ul>
            <li>国家级特色专业建设点</li>
            <li>省级重点学科</li>
            <li>省级一流学科建设单位</li>
            <li>省级示范性高等学校</li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped>
.about-page {
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

section {
  margin-bottom: 50px;
}

h2 {
  color: #2c3e50;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.history-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  align-items: center;
}

.history-content img {
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  height: 300px;
  transition: transform 0.3s;
}

.history-content img:hover {
  transform: scale(1.02);
}

.motto-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  text-align: center;
}

.motto-item {
  background: #f8f9fa;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.motto-item h3 {
  color: #2c3e50;
  margin-bottom: 15px;
}

.motto-item p {
  font-size: 1.2rem;
  color: #3498db;
}

.honors-list ul {
  list-style: none;
  padding: 0;
}

.honors-list li {
  background: #f8f9fa;
  margin-bottom: 10px;
  padding: 15px 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

@media (max-width: 768px) {
  .history-content {
    grid-template-columns: 1fr;
  }
  
  .motto-content {
    grid-template-columns: 1fr;
  }
}
</style> 