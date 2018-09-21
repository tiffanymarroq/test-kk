import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const createStore = () => {
    return new Vuex.Store({
        state:{
            company:[],
        },
        mutations:{
            setCompany(state, employee){
                state.company.push(employee)
            }
        },
        actions:{
           
        },
        getters: {
            getCompany(state) { 
                return state.company
            }
        }
    })
}

export default createStore