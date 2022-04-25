<template>
    <header class="header" :class="[gnb_active ? 'header-active': '']" ref="ref_header">
        <!-- ref=""는 vanilla javascript X Vue 전용 속성 -->
        <!-- "" 안에 적는 이름은 class명과 동일하면 X -->
        <div class="container">

            <!-- <a href="index.html" title="STX 건설" class="logo" @click.prevent="click_logo">
                <img :src="require('@/assets/images/logo.png')" alt="STX 건설">
            </a> -->

            <!-- a link 를 router로 변환 -->
            <router-link :to="{name: 'Home'}" title="STX 건설" class="logo">
                <img :src="require('@/assets/images/logo.png')" alt="STX 건설">
            </router-link>

            <div class="language">
                <ul class="language-list">
                    <li>
                        <a href="#" class="language-no">eng</a>
                    </li>
                    <li>
                        <a href="#">kor</a>
                    </li>
                </ul>
            </div>

        </div>

        <nav class="nav">
            <div class="container">
                <ul class="gnb" ref="ref_gnb" @mouseenter="overFn" @mouseleave="leaveFn" v-html="menu_html">

                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
    // import $ from 'jquery';
    // jQuery 사용 시  선입력 -> onMounted(() => {})에서 원래 사용하던 방식대로 jQuery 사용.
    import {
        onMounted,
        ref,
    } from 'vue'

    import $ from 'jquery';

    import { useRouter } from 'vue-router';

    export default {

        setup() {
            // header 태그를 참조해서 저장해 둔다.
            const ref_header = ref(null);
            //gnb 태그를 참조해서 저장해 둔다.
            const ref_gnb = ref(null);
            // gnb에 mouseover 되었는지 여부 저장
            const gnb_active = ref(false);
            // gnb에 mouseenter 시 실행할 함수
            const overFn = () => {
                gnb_active.value = true;
            };
            // gnb에 mouseleave 시 실행할 함수
            const leaveFn = () => {
                gnb_active.value = false;
            };
            // 동적 menu html 보관
            const menu_html = ref('');

            const router = useRouter();

            // const click_logo = () => {
            //     router.push({
            //         name: 'Home'
            //     })
            // }

            // const main_0 = ref(null);

            onMounted(() => {

                // console.log(ref_header.value);
                // console.log(ref_gnb.value);

                // 메뉴를 작성하는 코드
                // 1. 메뉴를 위한 사용자 객체 생성자 함수
                function MakeMenu(_mainmenu, _mainlink, _submenu, _sublink) {
                    this.mainmenu = _mainmenu;
                    this.mainlink = _mainlink;
                    this.submenu = _submenu;
                    this.sublink = _sublink;
                }

                let menu_data = [
                    new MakeMenu('회사소개', 'Company', '인사말,STX건설,기업문화,STX건설연혁,조직안내,윤리경영,안전·환경·품질경영,찾아오시는 길',
                        '#,#,#,#,#,#,#,#'),
                    new MakeMenu('사업분야', 'Business', '건축사업,주택사업,토목사업,플랜트/공작기계사업,해외사업', '#,#,#,#,#'),
                    new MakeMenu('사회공헌', 'Cb', '나눔의생각,주요활동분야,활동현황', '#,#,#'),
                    new MakeMenu('홍보센터', 'Ad', '홍보동영상,홍보브로슈어,STX건설뉴스', '#,#,#'),
                    new MakeMenu('고객지원', 'Cs', '자주묻는질문, 고객문의', '#,#'),
                    new MakeMenu('채용정보', 'Job', '채용안내, 채용공고, 채용FAQ', '#,#,#')
                    // new MakeMenu('회사소개', '#', '인사말,STX건설,기업문화,STX건설연혁,조직안내,윤리경영,안전·환경·품질경영,찾아오시는 길',
                    //     '#,#,#,#,#,#,#,#'),
                    // new MakeMenu('사업분야', '#', '건축사업,주택사업,토목사업,플랜트/공작기계사업,해외사업', '#,#,#,#,#'),
                    // new MakeMenu('사회공헌', '#', '나눔의생각,주요활동분야,활동현황', '#,#,#'),
                    // new MakeMenu('홍보센터', '#', '홍보동영상,홍보브로슈어,STX건설뉴스', '#,#,#'),
                    // new MakeMenu('고객지원', '#', '자주묻는질문, 고객문의', '#,#'),
                    // new MakeMenu('채용정보', '#', '채용안내, 채용공고, 채용FAQ', '#,#,#')
                ];

                // 2. 총 메뉴의 개수를 저장한다.
                let menu_total = menu_data.length;

                // 3. li 를 만들어야 한다.
                let menu_li = '';

                for (let i = 0; i < menu_total; i++) {
                    menu_li += '<li>';
                    // 주메뉴 넣기
                    let temp = menu_data[i];
                    // let cate = `<a href="${temp.mainlink}">${temp.mainmenu}</a>`;
                    // let cate = `<router-link :to="{name:'${temp.mainlink}'}" class="gnb-link">${temp.mainmenu}</router-link>`;
                    let cate = `<a href="${temp.mainlink}" class="menutag">${temp.mainmenu}</a>`;
                    

                    // 서브메뉴 만들기
                    cate += `<ul class="submenu">`
                    // 서브메뉴 항목들
                    let temp_sub = (temp.submenu).split(',');
                    let temp_sub_link = (temp.sublink).split(',');
                    // 최종 li 문구를 저장한다.
                    let temp_sub_lis = '';

                    for (let j = 0; j < temp_sub.length; j++) {

                        temp_sub_lis += `<li><a href="${temp_sub_link[j]}">${temp_sub[j]}</a></li>`

                    }
                    cate += temp_sub_lis;
                    cate += `</ul>`
                    menu_li += cate;
                    menu_li += '</li>';

                }

                // 최종출력
                menu_html.value = menu_li;
                $('.gnb').html(menu_li);
                //메뉴태그연결
                $.each($('.menutag'), function(){
                    $(this).click(function(event){
                        event.preventDefault();
                        let name = $(this).attr('href');
                        console.log(name);

                        router.push({
                            name
                        });
                    })
                })
                console.log($('.menutag'))

                // console.log(ref_gnb.value.firstChild);
                // 위의 코드는 jQuery 입력했을 때만 작동.

                // console.log(ref_gnb.value);
                // console.log(typeof ref_gnb.value)
                // console.log(ref_gnb.value.children);

                // for (let i=0; i< ref_gnb.value.length; i++) { 
                //     console.log(ref_gnb.value[i]); 
                // }

                // for ( const item of ref_gnb.value) {
                // console.log(item)
                // }

                // const gnb_li = ref([]);

                // for (const item of gnb_li.value){
                //     console.log(item);
                // }


                // gnb 기능  
                // 1. gnb 를 저장한다.
                // let gnb = $('.gnb');
                // 2. header 를 저장한다.
                // let header = $('.header');
                // 3. gnb 에 마우스 오버를 하면 .header 가 늘어난다.
                // gnb.mouseenter(function () {
                //     header.addClass('header-active');
                // });
                // 4. gnb 에 마우스 아웃을 하면 .header 가 줄어든다.
                // gnb.mouseleave(function () {
                //     header.removeClass('header-active');
                // });

                // 메뉴를 작성하는 코드
                // 1. 메뉴를 위한 사용자 객체 생성자 함수
                // function MakeMenu(_mainmenu, _mainlink, _submenu, _sublink) {
                //     this.mainmenu = _mainmenu;
                //     this.mainlink = _mainlink;
                //     this.submenu = _submenu;
                //     this.sublink = _sublink;
                // }

                // let menu_data = [
                //     new MakeMenu('회사소개', '#', '인사말,STX건설,기업문화,STX건설연혁,조직안내,윤리경영,안전·환경·품질경영,찾아오시는 길',
                //         '#,#,#,#,#,#,#,#'),
                //     new MakeMenu('사업분야', '#', '건축사업,주택사업,토목사업,플랜트/공작기계사업,해외사업', '#,#,#,#,#'),
                //     new MakeMenu('사회공헌', '#', '나눔의생각,주요활동분야,활동현황', '#,#,#'),
                //     new MakeMenu('홍보센터', '#', '홍보동영상,홍보브로슈어,STX건설뉴스', '#,#,#'),
                //     new MakeMenu('고객지원', '#', '자주묻는질문, 고객문의', '#,#'),
                //     new MakeMenu('채용정보', '#', '채용안내, 채용공고, 채용FAQ', '#,#,#')
                // ];

                // 2. 총 메뉴의 개수를 저장한다.
                // let menu_total = menu_data.length;

                // 3. li 를 만들어야 한다.
                // let menu_li = '';

                // for (let i = 0; i < menu_total; i++) {
                //     menu_li = menu_li + '<li></li>';
                // }

                // gnb.html(menu_li);

                // 4. .gnb > li 를 찾아서 저장한다.
                // let menu_lis = gnb.find('>li');
                // console.log(menu_lis);

                // 5. 주메뉴를 출력하자.
                // $.each(menu_lis, function (index) {
                // console.log(index);
                // console.log(item);
                // let temp = menu_data[index];

                // let cate = '<a href=';
                // cate = cate + temp.mainlink;
                // cate = cate + '>';

                // cate = cate + temp.mainmenu;
                // cate = cate + '</a>';

                // cate = cate + '<ul class=submenu>';
                // submenu 의 li 를 만든다.
                // 서브메뉴 글자들에게서 , 를 기준으로 분리한다.
                // let temp_sub = (temp.submenu).split(',');
                // console.log(temp_sub);

                // 서브메뉴 링크들을 , 를 기준으로 분리한다.
                // let temp_sub_link = ('#,#,#,#,#,#').split(',');
                // let temp_sub_link = (temp.sublink).split(',');
                // console.log(temp_sub_link);

                // 최종 li 문구를 저장한다.
                //     let temp_sub_lis = '';

                //     for (let i = 0; i < temp_sub.length; i++) {
                //         temp_sub_lis = temp_sub_lis + '<li>';

                //         temp_sub_lis = temp_sub_lis + '<a href=';
                //         temp_sub_lis = temp_sub_lis + temp_sub_link[i];
                //         temp_sub_lis = temp_sub_lis + '>';

                //         temp_sub_lis = temp_sub_lis + temp_sub[i];
                //         temp_sub_lis = temp_sub_lis + '</a>';
                //         temp_sub_lis = temp_sub_lis + '</li>';
                //     }
                //     cate = cate + temp_sub_lis;
                //     cate = cate + '</ul>';

                //     $(this).html(cate);
                // });

            });

            return {
                ref_header,
                ref_gnb,
                gnb_active,
                overFn,
                leaveFn,
                menu_html,
                // menuclick
                // click_logo
            }
        }
    }
</script>

<style>
    /* scoped를 해두면 addClass가 먹히지 않는다. */
    /* 상단 */
    .header {
        position: fixed;
        left: 0;
        top: 0;

        display: block;
        width: 100%;

        height: 80px;

        z-index: 999;
        overflow: hidden;

        transition: height 0.3s;

        box-shadow: 0px 0px 7px 0px rgb(0 0 0 / 20%);
        -webkit-box-shadow: 0px 0px 7px 0px rgb(0 0 0 / 20%);

    }

    .header-active {
        height: 410px;
    }

    .header>.container {
        height: 80px;
    }

    .header>.container::before {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 0;
        width: 100vw;
        height: 80px;
        background-color: #fff;
        border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    }

    .logo {
        position: absolute;
        right: 100%;
        top: 50%;
        /* 보이는 내용물만 옮겨라. */
        transform: translate(-150px, -50%);
        display: block;
    }

    .nav {
        position: absolute;
        left: 0;
        top: 80px;
        display: block;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.6);
    }

    .gnb {
        position: relative;
        display: block;
        text-align: center;

        /* 줄내림 하지 마라. */
        white-space: nowrap;
        letter-spacing: 0;
        font-size: 0;
        margin-top: -80px;
    }

    .gnb>li {
        position: relative;
        display: inline-block;
        padding: 0 35px;

        vertical-align: top;

        text-align: left;

        width: 178px;
    }

    /* router 사용 시 a link 없어서 깨지므로 .gnb-link를 하나 만들어줌 */
    .gnb-link{
        position: relative;
        display: block;
        font-size: 19px;
        font-weight: 500;
        color: #000;

        line-height: 80px;

        /* 추가됨 */
        cursor: pointer; 
    }

    .gnb>li>a {
        position: relative;
        display: block;
        font-size: 19px;
        font-weight: 500;
        color: #000;

        line-height: 80px;
    }

    .submenu {
        position: relative;
        display: block;
        padding-top: 40px;
        padding-bottom: 70px;
    }

    .submenu li {
        position: relative;
        display: block;

        line-height: 28.8px;
    }

    .submenu li a {
        position: relative;
        display: block;
        font-size: 15px;
        color: #fff;
    }

    .gnb>li a:hover {
        color: #ed1c24;
    }

    /* 주메뉴 포커스 유지 */
    .gnb>li:hover>.gnb-link{
        color: #ed1c24;

    }

    /* 주메뉴 포커스 유지 */
    .gnb>li:hover>a {
        color: #ed1c24;
    }

    .language {
        position: absolute;
        left: 100%;
        top: 50%;
        transform: translate(150px, -50%);
        display: block;

        margin-right: -290px;
    }

    .language-list {
        position: relative;
        display: block;

        white-space: nowrap;
        font-size: 0;
    }

    .language-list li {
        position: relative;
        display: inline-block;
        margin-left: 24px;
    }

    .language-list li:first-child {
        margin-left: 0;
    }

    .language-list li:last-child::before {
        content: '';
        position: absolute;
        left: -12px;
        top: 50%;
        transform: translateY(-50%);

        display: block;
        width: 1px;
        height: 11px;
        background-color: #999;
    }

    .language-list li a {
        position: relative;
        display: block;

        font-size: 15px;
        color: #000;
        font-weight: 500;
        text-transform: uppercase;
    }

    .language-no {
        color: #888 !important;
    }
</style>