<template>
  <div id="app">
    <header-component />
    <main class="main-content">
      <router-view></router-view>
    </main>
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from '@/components/common/Header.vue'
import FooterComponent from '@/components/common/Footer.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  margin-top: 80px; /* 为固定定位的header留出空间 */
}

/* 全局样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
               'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
  color: #333;
}
</style>
