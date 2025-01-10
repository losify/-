<template>
  <div class="home">
    <carousel-component :slides="carouselSlides" />
    
    <section class="school-intro">
      <h2>浙江财经大学简介</h2>
      <div class="intro-content">
        <p>浙江财经大学是一所以经济学、管理学为主，法学、工学、文学、理学等多学科协调发展的特色鲜明的高水平财经大学...</p>
      </div>
    </section>
    
    <section class="quick-links">
      <h2>快速链接</h2>
      <div class="links-grid">
        <div class="link-item" v-for="(link, index) in quickLinks" :key="index">
          <router-link :to="link.path">
            <i :class="link.icon"></i>
            <span>{{ link.title }}</span>
          </router-link>
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
          image: require('@/assets/images/campus1.jpg'),
          title: '美丽校园'
        },
        {
          image: require('@/assets/images/campus2.jpg'),
          title: '教学楼'
        }
      ],
      quickLinks: [
        { title: '教务系统', path: '/education', icon: 'fas fa-book' },
        { title: '图书馆', path: '/library', icon: 'fas fa-book-reader' },
        { title: '招生信息', path: '/admission', icon: 'fas fa-user-graduate' },
        { title: '科研平台', path: '/research', icon: 'fas fa-flask' }
      ]
    }
  }
}
</script>

<style scoped>
.home {
  padding: 20px;
}

.school-intro {
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
}

.quick-links {
  background-color: #f5f5f5;
  padding: 40px 20px;
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.link-item {
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s;
}

.link-item:hover {
  transform: translateY(-5px);
}
</style> 