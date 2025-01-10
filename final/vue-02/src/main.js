import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { ElButton, ElForm, ElFormItem, ElInput, ElMessage } from 'element-plus'
import '@fortawesome/fontawesome-free/css/all.css'

const app = createApp(App)

app.use(router)
app.component('el-button', ElButton)
app.component('el-form', ElForm)
app.component('el-form-item', ElFormItem)
app.component('el-input', ElInput)
app.component('el-message', ElMessage)

app.mount('#app')
