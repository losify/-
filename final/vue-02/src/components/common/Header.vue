<template>
  <header class="header">
    <div class="header-content">
      <!-- LOGO部分 -->
      <div class="logo">
        <router-link to="/">
          <img src="../../assets/logo.png" alt="浙江财经大学">
        </router-link>
      </div>

      <!-- 导航菜单部分 -->
      <nav class="nav-menu">
        <ul>
          <li v-for="item in menuItems" 
              :key="item.path"
              :class="{ active: isActive(item.path) }">
            <router-link :to="item.path">
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </nav>

      <!-- 移动端菜单按钮 -->
      <div class="mobile-menu-btn" @click="toggleMobileMenu">
        <i class="fas fa-bars"></i>
      </div>
    </div>

    <!-- 移动端菜单 -->
    <div class="mobile-menu" :class="{ 'show': isMobileMenuOpen }">
      <ul>
        <li v-for="item in menuItems" 
            :key="item.path"
            :class="{ active: isActive(item.path) }"
            @click="closeMobileMenu">
          <router-link :to="item.path">
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      isMobileMenuOpen: false,
      menuItems: [
        { name: '首页', path: '/' },
        { name: '学校简介', path: '/about' },
        { name: '学院设置', path: '/academy' },
        { name: '教育教学', path: '/education' },
        { name: '科学研究', path: '/research' },
        { name: '招生就业', path: '/admission' },
        { name: '联系我们', path: '/contact' },
        { name: '个人介绍', path: '/profile' }
      ]
    }
  },
  methods: {
    isActive(path) {
      return this.$route.path === path
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false
    }
  },
  watch: {
    '$route'() {
      this.closeMobileMenu()
    }
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* LOGO样式 */
.logo a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #2c3e50;
}

.logo img {
  height: 50px;
  width: auto;
  object-fit: contain;
}

/* 导航菜单样式 */
.nav-menu ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-menu li {
  margin: 0 15px;
}

.nav-menu a {
  text-decoration: none;
  color: #2c3e50;
  font-size: 1.1rem;
  padding: 10px 0;
  position: relative;
}

.nav-menu a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #3498db;
  transition: width 0.3s;
}

.nav-menu li.active a::after,
.nav-menu a:hover::after {
  width: 100%;
}

/* 移动端菜单按钮 */
.mobile-menu-btn {
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #2c3e50;
}

/* 移动端菜单 */
.mobile-menu {
  display: none;
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background: white;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transform: translateY(-100%);
  transition: transform 0.3s;
}

.mobile-menu.show {
  transform: translateY(0);
}

.mobile-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mobile-menu li {
  margin: 10px 0;
}

.mobile-menu a {
  display: block;
  padding: 10px;
  text-decoration: none;
  color: #2c3e50;
  font-size: 1.1rem;
}

.mobile-menu li.active a {
  color: #3498db;
  background: #f8f9fa;
  border-radius: 4px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }

  .mobile-menu-btn {
    display: block;
  }

  .mobile-menu {
    display: block;
  }

  .logo-text {
    font-size: 1.2rem;
  }
}
</style> 