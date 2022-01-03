import Vue from 'vue'
import Vuex from 'vuex'

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
    state: {
        //存放的键值对就是所要管理的状态
        name: 'helloVueX',
        //         token:sessionStorage.getItem(`token`)||``,
        //   userInfo:JSON.parse(sessionStorage.getItem(`userInfo`))||{},
        token: JSON.parse(sessionStorage.getItem(`token`)) || [],
        
    },

    
    mutations: {
        //es6语法，等同edit:funcion(){...}
        edit(state, payload) {
            state.name = payload.name
        },
        setToken(state, token) {
            sessionStorage.setItem(`token`, JSON.stringify(token))
            state.token = token
        },
    },
    actions: {
        aEdit(context, payload) {
            setTimeout(() => {
                context.commit('edit', payload)
            }, 2000)
        },
        updateToken(context, value) {
            // console.log(value)
            context.commit('setToken', value)
        },
    }
})

export default store
