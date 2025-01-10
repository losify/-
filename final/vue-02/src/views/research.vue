<template>
  <div class="research-page">
    <div class="page-header">
      <h1>科学研究</h1>
    </div>

    <div class="content-wrapper">
      <section class="research-news">
        <h2>科研动态</h2>
        <div class="news-list">
          <div v-for="news in researchNews" 
               :key="news.id" 
               class="news-item">
            <div class="news-date">{{ news.date }}</div>
            <div class="news-content">
              <h3>{{ news.title }}</h3>
              <p>{{ news.summary }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="research-achievements">
        <h2>科研成果</h2>
        <div class="achievement-grid">
          <div v-for="achievement in achievements" 
               :key="achievement.id" 
               class="achievement-card">
            <h3>{{ achievement.title }}</h3>
            <p>{{ achievement.description }}</p>
            <div class="achievement-stats">
              <span>发表时间：{{ achievement.publishDate }}</span>
              <span>引用次数：{{ achievement.citations }}</span>
            </div>
          </div>
        </div>
      </section>

      <section class="research-projects">
        <h2>在研项目</h2>
        <div class="project-list">
          <div v-for="project in projects" 
               :key="project.id" 
               class="project-item">
            <div class="project-header">
              <h3>{{ project.name }}</h3>
              <span class="project-type">{{ project.type }}</span>
            </div>
            <p>{{ project.description }}</p>
            <div class="project-info">
              <span>负责人：{{ project.leader }}</span>
              <span>起止时间：{{ project.period }}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResearchPage',
  data() {
    return {
      researchNews: [
        {
          id: 1,
          date: '2024-03-15',
          title: '我校获批多项国家自然科学基金项目',
          summary: '2024年度国家自然科学基金项目评审结果公布，我校共获批20项...'
        },
        {
          id: 2,
          date: '2024-03-10',
          title: '第三届金融科技创新研讨会顺利召开',
          summary: '来自全国多所高校的专家学者齐聚我校，共同探讨金融科技发展...'
        }
      ],
      achievements: [
        {
          id: 1,
          title: '数字经济发展研究',
          description: '在数字经济发展领域取得重要突破，发表多篇高水平论文...',
          publishDate: '2024-01',
          citations: 45
        },
        {
          id: 2,
          title: '金融科技创新研究',
          description: '在金融科技领域开展深入研究，提出创新性解决方案...',
          publishDate: '2023-12',
          citations: 38
        }
      ],
      projects: [
        {
          id: 1,
          name: '区块链技术在金融领域的应用研究',
          type: '国家级项目',
          description: '探索区块链技术在金融领域的创新应用...',
          leader: '张教授',
          period: '2024-2026'
        },
        {
          id: 2,
          name: '数字经济发展与监管研究',
          type: '省部级项目',
          description: '研究数字经济发展过程中的监管问题...',
          leader: '李教授',
          period: '2023-2025'
        }
      ]
    }
  }
}
</script>

<style scoped>
.research-page {
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

.news-item {
  display: flex;
  margin-bottom: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  overflow: hidden;
}

.news-date {
  background: #2c3e50;
  color: white;
  padding: 20px;
  display: flex;
  align-items: center;
  min-width: 120px;
  justify-content: center;
}

.news-content {
  padding: 20px;
  flex: 1;
}

.achievement-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.achievement-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.achievement-stats {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  color: #666;
  font-size: 0.9rem;
}

.project-item {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-bottom: 20px;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.project-type {
  background: #3498db;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.9rem;
}

.project-info {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  color: #666;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .news-item {
    flex-direction: column;
  }
  
  .news-date {
    padding: 10px;
  }
  
  .achievement-grid {
    grid-template-columns: 1fr;
  }
  
  .project-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .project-type {
    margin-top: 10px;
  }
  
  .project-info {
    flex-direction: column;
    gap: 5px;
  }
}
</style> 