<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>联系方式</h3>
        <p>地址：浙江省杭州市下沙高教园区学源街18号</p>
        <p>邮编：310018</p>
        <p>电话：0571-87557555</p>
      </div>
      
      <div class="footer-section">
        <h3>友情链接</h3>
        <ul>
          <li><a href="#">教育部</a></li>
          <li><a href="#">浙江省教育厅</a></li>
          <li><a href="#">杭州市教育局</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h3>关注我们</h3>
        <div class="social-links">
          <a href="#" title="微信"><i class="fab fa-weixin"></i></a>
          <a href="#" title="微博"><i class="fab fa-weibo"></i></a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 浙江财经大学 版权所有</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
.footer {
  background-color: #2c3e50;
  color: #fff;
  padding: 40px 0 20px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 0 20px;
}

.footer-section h3 {
  margin-bottom: 20px;
  font-size: 1.2rem;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 10px;
}

.footer-section a {
  color: #fff;
  text-decoration: none;
}

.footer-section a:hover {
  color: #3498db;
}

.social-links a {
  font-size: 24px;
  margin-right: 15px;
}

.footer-bottom {
  text-align: center;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
</style> 