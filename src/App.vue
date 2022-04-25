<template>

    <ModalView v-if="modal_active" @close-modal="hide_modal" />

    <div class="wrap">
        <HeaderView />
        <router-view />
        <FooterView />

    </div>
</template>
<script>
    import HeaderView from '@/components/HeaderView.vue'
    import ModalView from '@/components/ModalView.vue'
    import FooterView from '@/components/FooterView.vue'
    import {
        ref
    } from 'vue'
    export default {
        components: {
            HeaderView,
            ModalView,
            FooterView
        },
        setup() {
            const modal_active = ref(true);
            const hide_modal = () => {
                modal_active.value = false
            }
            return {
                modal_active,
                hide_modal
            }
        }
    }
</script>

<style>
    @charset 'utf-8';
    @import url('@/assets/css/reset.css');
    @import url("@/assets/css/notosanskr/NotoSansKR.css");

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /* outline-style: none; */
    }

    a {
        color: #333;
        text-decoration: none;
    }

    li {
        list-style: none;
    }

    img {
        border: 0;
        vertical-align: middle;
    }

    html {
        font-size: 16px;
        overflow-x: hidden;
    }


    body {
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 1rem;
        font-weight: 200;
        line-height: 1.15;
        letter-spacing: 0px;
        color: #444;
        word-break: break-all;
    }

    /* 공통 요소 */
    .container {
        position: relative;
        display: block;
        width: 1200px;
        margin: 0 auto;
    }

    .wrap {
        position: relative;
        display: block;
        min-width: 1200px;
    }
</style>