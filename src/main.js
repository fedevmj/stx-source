import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index.js'
// Vue 개발에서 상태를 관리해 주는 기능을 제공해 주는 것이 Vuex이고 어플리케이션의 모든 컴포넌트들에 대한 중앙 집중식 저장소의 역할 및 관리 를 담당
// http://ccambo.github.io/Dev/Vue/5.what-is-the-store-in-vuex/ 참고

// import ('./assets/css/reset.css')
// import ('./assets/css/style.css')

// createApp(App).use(router).use(store).mount('#app')
createApp(App).use(store).use(router).mount('#app')