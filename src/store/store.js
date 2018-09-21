import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const createStore = () => {
    return new Vuex.Store({
        state:{
            company:[],
            results: 0 
        },
        mutations:{
            setCompany(state, employee){
                state.company.push(employee)
            },
            setResults(state, length){
                state.results = length
            }
        },
        actions:{
           
        },
        getters: {
            getCompany(state) { 
                return state.company
            },
            getNumberResults(state){
                return state.results
            }
        }
    })
}

export default createStore