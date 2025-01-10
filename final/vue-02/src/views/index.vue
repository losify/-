<template>
  <div class="home-page">
    <!-- 轮播图部分 -->
    <carousel-component :slides="carouselSlides" />
    
    <!-- 学校简介部分 -->
    <section class="school-intro">
      <div class="content-wrapper">
        <h2>浙江财经大学简介</h2>
        <div class="intro-content">
          <div class="intro-text">
            <p>浙江财经大学是一所以经济学、管理学为主，经、管、法、工、文、理等多学科协调发展的特色鲜明的高水平财经大学。学校坐落于历史文化名城、电子商务之都杭州，是浙江省重点建设高校。</p>
            <el-button type="primary" @click="$router.push('/about')">了解更多</el-button>
          </div>
          <div class="intro-image">
            <img src="@/assets/gym.jpg" alt="校园风光">
          </div>
        </div>
      </div>
    </section>

    <!-- 新闻动态部分 -->
    <section class="news-section">
      <div class="content-wrapper">
        <h2>新闻动态</h2>
        <div class="news-grid">
          <div v-for="news in newsItems" 
               :key="news.id" 
               class="news-card">
            <div class="news-image">
              <img :src="news.image" :alt="news.title">
            </div>
            <div class="news-content">
              <h3>{{ news.title }}</h3>
              <p>{{ news.summary }}</p>
              <span class="news-date">{{ news.date }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 快速链接部分 -->
    <section class="quick-links">
      <div class="content-wrapper">
        <h2>快速通道</h2>
        <div class="links-grid">
          <div v-for="link in quickLinks" 
               :key="link.id" 
               class="link-card"
               @click="$router.push(link.path)">
            <i :class="link.icon"></i>
            <h3>{{ link.title }}</h3>
            <p>{{ link.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 学校特色部分 -->
    <section class="features">
      <div class="content-wrapper">
        <h2>学校特色</h2>
        <div class="features-grid">
          <div v-for="feature in schoolFeatures" 
               :key="feature.id" 
               class="feature-item">
            <div class="feature-icon">
              <i :class="feature.icon"></i>
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CarouselComponent from '@/components/common/Carousel.vue'

export default {
  name: 'HomePage',
  components: {
    CarouselComponent
  },
  data() {
    return {
      carouselSlides: [
        {
          image: require('@/assets/library.jpg'),
          title: '美丽校园'
        },
        {
          image: require('@/assets/jz.jpg'),
          title: '学术讲座'
        },
        {
          image: require('@/assets/activity.jpg'),
          title: '校园活动'
        }
      ],
      newsItems: [
        {
          id: 1,
          title: '我校举办2024年学术研讨会',
          summary: '来自全国各地的专家学者齐聚浙江财经大学，共同探讨经济发展新趋势...',
          image: require('@/assets/yth.jpg'),
          date: '2024-03-15'
        },
        {
          id: 2,
          title: '浙江财经大学获省级教学成果奖',
          summary: '我校教师团队在教育教学改革方面取得重大突破...',
          image: require('@/assets/teach.jpg'),
          date: '2024-03-10'
        },
        {
          id: 3,
          title: '2024年春季校��招聘会圆满举行',
          summary: '超过200家企业参加，为毕业生提供优质就业机会...',
          image: require('@/assets/jobseek.jpg'),
          date: '2024-03-05'
        }
      ],
      quickLinks: [
        {
          id: 1,
          title: '教务系统',
          description: '课程管理、成绩查询',
          icon: 'fas fa-book',
          path: '/education'
        },
        {
          id: 2,
          title: '图书馆',
          description: '馆藏查询、电子资源',
          icon: 'fas fa-book-reader',
          path: '/library'
        },
        {
          id: 3,
          title: '招生信息',
          description: '招生简章、报考指南',
          icon: 'fas fa-user-graduate',
          path: '/admission'
        },
        {
          id: 4,
          title: '就业服务',
          description: '就业指导、招聘信息',
          icon: 'fas fa-briefcase',
          path: '/admission'
        }
      ],
      schoolFeatures: [
        {
          id: 1,
          title: '一流学科',
          description: '拥有多个国家级重点学科',
          icon: 'fas fa-star'
        },
        {
          id: 2,
          title: '师资力量',
          description: '汇聚海内外优秀教师团队',
          icon: 'fas fa-chalkboard-teacher'
        },
        {
          id: 3,
          title: '国际交流',
          description: '与多所国际名高校合作',
          icon: 'fas fa-globe'
        },
        {
          id: 4,
          title: '创新创业',
          description: '完善的创新创业教育体系',
          icon: 'fas fa-lightbulb'
        }
      ]
    }
  }
}
</script>

<style scoped>
.home-page {
  min-height: 100vh;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

section {
  padding: 60px 0;
}

h2 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 40px;
  font-size: 2rem;
}

/* 学校简介样式 */
.school-intro {
  background: #f8f9fa;
}

.intro-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}

.intro-text {
  font-size: 1.1rem;
  line-height: 1.8;
}

.intro-text p {
  margin-bottom: 20px;
}

.intro-image img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  object-fit: cover;
  height: 400px;
}

/* 新闻动态样式 */
.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.news-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.news-card:hover {
  transform: translateY(-5px);
}

.news-image {
  height: 200px;
  overflow: hidden;
}

.news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s;
}

.news-image:hover img {
  transform: scale(1.05);
}

.news-content {
  padding: 20px;
}

.news-content h3 {
  margin-bottom: 10px;
  color: #2c3e50;
}

.news-date {
  color: #666;
  font-size: 0.9rem;
}

/* 快速链接样式 */
.quick-links {
  background: #f8f9fa;
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.link-card {
  background: white;
  padding: 30px 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: transform 0.3s;
}

.link-card:hover {
  transform: translateY(-5px);
}

.link-card i {
  font-size: 2.5rem;
  color: #3498db;
  margin-bottom: 15px;
}

/* 学校特色样式 */
.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.feature-item {
  text-align: center;
  padding: 20px;
}

.feature-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  background: #3498db;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-icon i {
  font-size: 2rem;
  color: white;
}

.feature-item h3 {
  margin-bottom: 10px;
  color: #2c3e50;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .links-grid,
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .intro-content,
  .news-grid {
    grid-template-columns: 1fr;
  }
  
  .links-grid,
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  section {
    padding: 40px 0;
  }
}
</style> 