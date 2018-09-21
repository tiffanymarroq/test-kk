import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const createStore = () => {
    return new Vuex.Store({
        state:{
            company:[],
        },
        mutations:{
            setCompany(state, employee, depth){
                state.company.push(employee, depth)
            }
        },
        actions:{
            recursiveArr(context, arr){
                var depth = 0;
                for(var i in arr){
                    console.log('in')
                    console.log(arr[i])
                    context.commit('setCompany', arr[i], depth)
                    if(i.manager != null){
                        this.recursiveArr(context, i.manager,depth)
                        depth = depth + 1
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