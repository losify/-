<template>
  <header class="header">
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/images/logo.png" alt="浙江财经大学" />
      </router-link>
    </div>
    <nav class="navigation">
      <ul>
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/about">学校简介</router-link></li>
        <li><router-link to="/academy">学院设置</router-link></li>
        <li><router-link to="/education">教育教学</router-link></li>
        <li><router-link to="/research">科学研究</router-link></li>
        <li><router-link to="/admission">招生就业</router-link></li>
        <li><router-link to="/contact">联系我们</router-link></li>
        <li><router-link to="/profile">个人介绍</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style scoped>
.header {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  height: 60px;
}

.navigation ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navigation li {
  margin: 0 1rem;
}

.navigation a {
  color: #333;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.5rem;
  transition: color 0.3s;
}

.navigation a:hover {
  color: #1e88e5;
}

.navigation a.router-link-active {
  color: #1e88e5;
  font-weight: bold;
}
</style> 