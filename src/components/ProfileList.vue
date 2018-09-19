<template>
    <div>
        <div style="text-align: center">
            <p>Search Here</p>
            <input placeholder=" Name, Title, or Office" v-model="search" type="text">
        </div>
        <br>
        <br>

        <div class="card-list">
            <div v-for="(employee, i) in filterTest" :key="i">
                <app-profile
                    :name="employee.name"
                    :title="employee.title"
                    :office="employee.office"
                    :email="employee.email"
                    :isManager="employee.manager != null"
                    >
                </app-profile>
                
            </div>
            

        </div>
    </div>
</template>
<script>
import Profile from './Profile.vue'
export default {
    data(){
        return{
            search: '',
        }
    },
    props: {
        employees: {
            type: Array,
            required: true
        }
    },
    components:{
        appProfile: Profile
    },
    computed: {
        filteredItems() {
            console.log(Object.keys(this.employees).length + ' - length')
         
            return this.employees.filter(employee => {
                console.log(employee + ' filter')
                return ( employee.title.toLowerCase().indexOf(this.search.toLowerCase()) >= 0 ||
                    employee.name.toLowerCase().indexOf(this.search.toLowerCase()) >= 0 ||
                    employee.office.toLowerCase().indexOf(this.search.toLowerCase()) >= 0   )
            })
        },
        filterTest(){
            return this.employees.filter(employee => {
                // if (employee.manager.length > 1){
                //     for( var i=0; i < employee.manager.length; i ++){
                //         employee.manager[i] = this.filterTest(employee[i]);
                //         if(employee.manager[i].manager.length > 1){
                //             return;
                //         }
                        
                //     }
                // }
                    return ( employee.title.toLowerCase().indexOf(this.search.toLowerCase()) >= 0 ||
                    employee.name.toLowerCase().indexOf(this.search.toLowerCase()) >= 0 ||
                    employee.office.toLowerCase().indexOf(this.search.toLowerCase()) >= 0   )
           
                
            })

        },
        path(){
            return this.employees[0]
        },
        children(){
            return this.employees[this.item]
        },
        childPath(){
            return this.employees.manager.slice(1)
        },
        isPath(){
            return this.employees.manager.length > 1
        }

    },

}
</script>
<style scoped>
    .card-list{
        display: flex;
        padding: 20px;
        box-sizing: border-box;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
</style>
