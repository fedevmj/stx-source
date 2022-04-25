<template>

<div class="main">

<VisualView/>
<PartView/>
<NewsView/>
<CustomerView/>
<AboutView/>

</div>

</template>

<script>
import AboutView from '@/components/AboutView.vue'
import CustomerView from '@/components/CustomerView.vue'
import NewsView from '@/components/NewsView.vue'
import PartView from '@/components/PartView.vue'
import VisualView from '@/components/VisualView.vue'
export default {
    components:{
        AboutView,
        CustomerView,
        NewsView,
        PartView,
        VisualView
    }
}
</script>

<style scoped>

/* 메인 */
.main {
    position: relative;
    display: block;
    /* 상단의 header가 fixed 이므로 높이를 강제 반영 */
    padding-top: 80px;
}

</style>