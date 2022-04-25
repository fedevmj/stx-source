import {createRouter, createWebHistory} from 'vue-router';
// createRouter는 router 생성 && createWebHistory는 뒤로가기
import HomeIndex from '@/page/HomeIndex.vue'

const router = createRouter({
    history: createWebHistory(),
    // routes의 name은 router.push 할 때 사용
    routes: [ 
        {
            path: '/stx-demo/',
            name: 'Home',
            component: HomeIndex
        }, 
        {
            path: '/stx-demo/company',
            name: 'Company',
            component: HomeIndex
        }, 
        {
            path: '/stx-demo/business',
            name: 'Business',
            component: HomeIndex
        }, 
        {
            path: '/stx-demo/cb',
            name: 'Cb',
            component: HomeIndex
        }, 
        {
            path: '/stx-demo/ad',
            name: 'Ad',
            component: HomeIndex
        }, 
        {
            path: '/stx-demo/cs',
            name: 'Cs',
            component: HomeIndex
        }, 
        {
            path: '/stx-demo/job',
            name: 'Job',
            component: HomeIndex
        }]
    // routes는 링크 주소
});

export default router