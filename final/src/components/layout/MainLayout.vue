<template>
  <div class="main-layout">
    <header-component />
    <main class="main-content">
      <router-view></router-view>
    </main>
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from '../common/Header.vue'
import FooterComponent from '../common/Footer.vue'

export default {
  name: 'MainLayout',
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style scoped>
.main-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}
</style> 