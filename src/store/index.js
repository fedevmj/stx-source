import { createStore } from 'vuex';
export default createStore({
    // modules 사용할 때
    modules: {
        notice: {
            state: {
                notice: [{
                    id: Date.now,
                    title: 'STX건설주식회사 M&A 관련 기본사항 안내',
                    link: '#'
                },
                {
                    id: Date.now,
                    title: '회생회사 STX건설주식회사 M&A 공고',
                    link: '#'
                },
                {
                    id: Date.now,
                    title: '2021년도 협력업체 모집공고',
                    link: '#'
                },
                {
                    id: Date.now,
                    title: 'STX건설 상호 사용 관련 안내',
                    link: '#'
                }]
            },
            mutations: {},
            actions: {},
            getters: {}
        },
        news: {
            state: {
                news: [{
                    id: Date.now,
                    title: `STX건설, 춘천 레고랜드 테마파크 시공사 '선정'`,
                    link: '#'
                },
                {
                    id: Date.now,
                    title: `STX건설, 2018년 성장 '청신호'`,
                    link: '#'
                }
            ]
            },
            mutations: {},
            actions: {},
            getters: {}
        }
    },


    // 접근할 때 store.state.notice
    // state: {
    //     notice: [{
    //         id: Date.now,
    //         title: 'STX건설주식회사 M&A 관련 기본사항 안내',
    //         link: '#'
    //     },
    //     {
    //         id: Date.now,
    //         title: '회생회사 STX건설주식회사 M&A 공고',
    //         link: '#'
    //     },
    //     {
    //         id: Date.now,
    //         title: '2021년도 협력업체 모집공고',
    //         link: '#'
    //     },
    //     {
    //         id: Date.now,
    //         title: 'STX건설 상호 사용 관련 안내',
    //         link: '#'
    //     }]
    // },
    mutations: {},
    actions: {},
    getters: {}
});