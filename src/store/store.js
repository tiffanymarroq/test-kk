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
            recursiveArr(context, arr){
                for(var i in arr){
                    context.dispatch('setCompany', i)
                    if(i.manager != null){
                        recursiveArr(context, i.manager)
                    }
                }
            }
        },
        getters: {
            getCompany(state) { 
                return state.company
            }

        }
    })
}

export default createStore