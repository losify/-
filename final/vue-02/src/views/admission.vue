<template>
  <div class="admission-page">
    <div class="page-header">
      <h1>招生就业</h1>
    </div>

    <div class="content-wrapper">
      <section class="admission-section">
        <h2>招生信息</h2>
        <div class="admission-grid">
          <div class="info-card">
            <h3>本科招生</h3>
            <div class="admission-content">
              <h4>招生计划</h4>
              <ul>
                <li>计划招生人数：3000人</li>
                <li>招生专业：30个</li>
                <li>覆盖省份：全国</li>
              </ul>
              <el-button type="primary">查看详情</el-button>
            </div>
          </div>
          
          <div class="info-card">
            <h3>研究生招生</h3>
            <div class="admission-content">
              <h4>招生类型</h4>
              <ul>
                <li>学术型硕士</li>
                <li>专业型硕士</li>
                <li>博士研究生</li>
              </ul>
              <el-button type="primary">查看详情</el-button>
            </div>
          </div>
        </div>
      </section>

      <section class="employment-section">
        <h2>就业信息</h2>
        <div class="employment-stats">
          <div class="stat-card" v-for="(stat, index) in employmentStats" :key="index">
            <div class="stat-number">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>

        <div class="job-opportunities">
          <h3>最新招聘信息</h3>
          <div class="job-list">
            <div v-for="job in jobs" :key="job.id" class="job-item">
              <div class="job-header">
                <h4>{{ job.title }}</h4>
                <span class="company">{{ job.company }}</span>
              </div>
              <div class="job-details">
                <span>{{ job.location }}</span>
                <span>{{ job.salary }}</span>
              </div>
              <p class="job-description">{{ job.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="guidance-section">
        <h2>就业指导</h2>
        <div class="guidance-content">
          <div class="guidance-item" v-for="guide in guidanceList" :key="guide.id">
            <i :class="guide.icon"></i>
            <h3>{{ guide.title }}</h3>
            <p>{{ guide.content }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdmissionPage',
  data() {
    return {
      employmentStats: [
        { value: '98.6%', label: '就业率' },
        { value: '45%', label: '研究生深造率' },
        { value: '85%', label: '专业对口率' }
      ],
      jobs: [
        {
          id: 1,
          title: '金融分析师',
          company: '某大型银行',
          location: '杭州',
          salary: '15-20k/月',
          description: '负责公司金融产品分析与研究...'
        },
        {
          id: 2,
          title: '会计主管',
          company: '某知名企业',
          location: '上海',
          salary: '12-18k/月',
          description: '负责公司财务管理与会计核算...'
        }
      ],
      guidanceList: [
        {
          id: 1,
          icon: 'fas fa-file-alt',
          title: '简历指导',
          content: '提供专业的简历编写指导，助力求职成功'
        },
        {
          id: 2,
          icon: 'fas fa-comments',
          title: '面试技巧',
          content: '模拟面试训练，提升面试成功率'
        },
        {
          id: 3,
          icon: 'fas fa-chart-line',
          title: '职业规划',
          content: '帮助学生制定合理的职业发展规划'
        }
      ]
    }
  }
}
</script>

<style scoped>
.admission-page {
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
  margin-bottom: 60px;
}

h2 {
  color: #2c3e50;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
  margin-bottom: 30px;
}

.admission-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.info-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 20px;
}

.info-card h3 {
  color: #2c3e50;
  margin-bottom: 20px;
}

.admission-content ul {
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
}

.admission-content li {
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}

.employment-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 40px;
}

.stat-card {
  background: #f8f9fa;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.stat-number {
  font-size: 2rem;
  color: #3498db;
  font-weight: bold;
}

.job-item {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-bottom: 20px;
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.job-details {
  display: flex;
  gap: 20px;
  color: #666;
  margin-bottom: 10px;
}

.guidance-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.guidance-item {
  text-align: center;
  padding: 30px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.guidance-item i {
  font-size: 2.5rem;
  color: #3498db;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .admission-grid,
  .employment-stats,
  .guidance-content {
    grid-template-columns: 1fr;
  }
  
  .job-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .job-details {
    flex-direction: column;
    gap: 5px;
  }
}
</style> 