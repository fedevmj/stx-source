<template>

    <div class="modal">
        <div class="modal-wrap">
            <div class="modal-box">
            <i class="fas fa-laptop-code"></i>
            <h2>이 사이트는 스터디용으로 제작되었으며<br>
                리소스는 원저작자에게 있습니다.</h2>
            <span>본 사이트는 Chrome에 최적화 되어있습니다.</span>

                <ul class="modal-list">
                    <h3><i class="fas fa-bullhorn"></i> <u>이렇게 수정하였습니다</u> :) </h3>
                    <li>1. <b>Favicon</b>을 추가하였습니다.</li>
                    <li>2. Header, Visual, About us 영역을 Container 너비 기준으로 재정렬해서 <b>사용자가 보는 화면의 레이아웃을 일관성있게 재구성</b>하였습니다.</li>
                    <li>3. UX 편의성을 향상시키기 위해 <b>주메뉴 및 서브메뉴에 마우스 롤오버시 포커스 유지</b> 기능을 추가하였습니다. </li>    
                </ul>
            </div>

            <button class="modal-close" @click="closeModal"><i class="fas fa-times"></i></button>
        </div>
    </div>

</template>

<script>
    import {
        getCurrentInstance
    } from 'vue';
    export default {
        emits: ['close-modal'],
        setup() {
            const {
                emit
            } = getCurrentInstance();
            const closeModal = () => {
                emit('close-modal');
            }
            return {
                closeModal
            }
        }
    }
</script>

<style>
/* 모달창 */
.modal{
    position: fixed;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);

    z-index: 9999;
}

.modal-wrap{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 430px;
    background-color: #fff;
    border-radius: 20px;

    padding: 40px;
    text-align: center;

    background-color: #f1faee;
}

.modal-wrap > i{
    margin-top: 10px;
}

.modal-wrap h2{
    font-size: 16px;
    color: #1d3557;
    font-weight: 500;
    line-height: 1.6;

    padding-top: 20px;
    padding-bottom: 10px;

}

.modal-wrap span{
    font-size: 14px;
    color: #666;
}

.modal-box h3 i{
    display: inline-block;
    font-size: 18px;
}

.modal-box{
    position: relative;
    display: block;
}

.modal-list{
    position: relative;
    display: block;
    margin-top: 20px;
}

.modal-list h3{
    display: inline-block;
    font-size: 16px;
    color: #1d3557;
    font-weight: 500;
    line-height: 1.6;
}

.modal-list li{
    padding-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    word-break: keep-all;
}

.modal-list li b{
    color: #333;
    font-weight: 700;
}

.modal i{
    display: block;
    text-align: center;
    font-size: 40px;
}

.modal-close{
    position: absolute;
    right: 30px;
    top: 30px;
    border: 0;
    background-color: transparent;
    cursor: pointer;
}

.modal-close i{
    display: block;
    text-align: center;
    font-size: 30px;
}
</style>