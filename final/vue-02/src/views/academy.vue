<template>
  <div class="academy-page">
    <div class="page-header">
      <h1>学院设置</h1>
    </div>

    <div class="content-wrapper">
      <div class="academy-grid">
        <div v-for="academy in academies" :key="academy.id" class="academy-card">
          <div class="academy-header">
            <h2>{{ academy.name }}</h2>
          </div>
          <div class="academy-content">
            <p>{{ academy.description }}</p>
            <h3>主要专业</h3>
            <ul>
              <li v-for="major in academy.majors" :key="major">{{ major }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AcademyPage',
  data() {
    return {
      academies: [
        {
          id: 1,
          name: '会计学院',
          description: '会计学院是浙江财经大学历史最悠久的学院之一，拥有会计学等多个国家级特色专业...',
          majors: ['会计学', '财务管理', '审计学']
        },
        {
          id: 2,
          name: '金融学院',
          description: '金融学院致力于培养具有扎实理论基础和实践能力的金融专业人才...',
          majors: ['金融学', '投资学', '保险学']
        },
        {
          id: 3,
          name: '经济学院',
          description: '经济学院拥有经济学一级学科硕士点，是浙江省重点学科建设单位...',
          majors: ['经济学', '国际经济与贸易', '财政学']
        },
        {
          id: 4,
          name: '信息技术与人工智能学院',
          description: '信息技术与人工智能学院致力于培养具有扎实计算机理论基础和实践能力的复合型人才，注重人工智能、大数据等新兴技术的研究与应用...',
          majors: [
            '计算机科学与技术',
            '软件工程',
            '人工智能',
            '数据科学与大数据技术'
          ]
        }
        // 可以继续添加更多学院
      ]
    }
  }
}
</script>

<style scoped>
.academy-page {
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

.academy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 20px;
}

.academy-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: transform 0.3s;
}

.academy-card:hover {
  transform: translateY(-5px);
}

.academy-header {
  background: #2c3e50;
  color: white;
  padding: 20px;
  text-align: center;
}

.academy-content {
  padding: 20px;
}

.academy-content h3 {
  margin: 15px 0;
  color: #2c3e50;
}

.academy-content ul {
  list-style: none;
  padding: 0;
}

.academy-content li {
  background: #f8f9fa;
  margin: 5px 0;
  padding: 8px 15px;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .academy-grid {
    grid-template-columns: 1fr;
  }
}
</style> 