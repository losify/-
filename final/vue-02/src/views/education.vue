<template>
  <div class="education-page">
    <div class="page-header">
      <h1>教育教学</h1>
    </div>

    <div class="content-wrapper">
      <section class="teaching-philosophy">
        <h2>教学理念</h2>
        <div class="philosophy-content">
          <div class="philosophy-item">
            <i class="fas fa-user-graduate"></i>
            <h3>以学生为中心</h3>
            <p>注重学生个性化发展，培养创新思维和实践能力</p>
          </div>
          <div class="philosophy-item">
            <i class="fas fa-chalkboard-teacher"></i>
            <h3>理论实践结合</h3>
            <p>强化理论与实践的结合，培养应用型人才</p>
          </div>
          <div class="philosophy-item">
            <i class="fas fa-globe"></i>
            <h3>国际化视野</h3>
            <p>培养具有国际视野和竞争力的财经人才</p>
          </div>
        </div>
      </section>

      <section class="curriculum">
        <h2>课程设置</h2>
        <div class="course-categories">
          <div v-for="(category, index) in courseCategories" 
               :key="index" 
               class="course-category">
            <h3>{{ category.name }}</h3>
            <ul>
              <li v-for="course in category.courses" 
                  :key="course">{{ course }}</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="achievements">
        <h2>教学成果</h2>
        <div class="achievement-list">
          <div v-for="(achievement, index) in achievements" 
               :key="index" 
               class="achievement-item">
            <h3>{{ achievement.title }}</h3>
            <p>{{ achievement.description }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EducationPage',
  data() {
    return {
      courseCategories: [
        {
          name: '公共基础课程',
          courses: ['高等数学', '大学英语', '思想政治理论', '计算机基础']
        },
        {
          name: '专业核心课程',
          courses: ['经济学原理', '会计学基础', '金融学', '统计学']
        },
        {
          name: '实践教学',
          courses: ['专业实习', '毕业论文', '创新创业实践', '学科竞赛']
        }
      ],
      achievements: [
        {
          title: '国家级教学成果奖',
          description: '获得多项国家级教学成果奖，教学质量得到广泛认可'
        },
        {
          title: '精品课程建设',
          description: '建设多门国家级和省级精品课程，打造优质教学资源'
        },
        {
          title: '教学改革创新',
          description: '推进教学方法改革，实施混合式教学模式创新'
        }
      ]
    }
  }
}
</script>

<style scoped>
.education-page {
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

.philosophy-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  text-align: center;
}

.philosophy-item {
  padding: 30px;
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.philosophy-item i {
  font-size: 2.5rem;
  color: #3498db;
  margin-bottom: 20px;
}

.course-categories {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.course-category {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.course-category h3 {
  color: #2c3e50;
  margin-bottom: 15px;
}

.course-category ul {
  list-style: none;
  padding: 0;
}

.course-category li {
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}

.achievement-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.achievement-item {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.achievement-item h3 {
  color: #2c3e50;
  margin-bottom: 15px;
}

@media (max-width: 768px) {
  .philosophy-content,
  .course-categories,
  .achievement-list {
    grid-template-columns: 1fr;
  }
}
</style> 