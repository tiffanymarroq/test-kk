<template>
    <div>
        <div style="text-align: center">
            <p>Search Here</p>
            <input placeholder=" Name, Title, or Office" v-model="search" type="text">
        </div>
        <br>
        <br>
        <div class="card-list">
            <app-profile
                v-for="(employee, i) in filteredItems" :key="i"
                :name="employee.name"
                :title="employee.title"
                :office="employee.office"
                :email="employee.email"
                :isManager="employee.manager != null"
                >
            </app-profile>

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
            return this.employees.filter(employee => {
                console.log(employee)
                return ( employee.title.toLowerCase().indexOf(this.search.toLowerCase()) >= 0 ||
                    employee.name.toLowerCase().indexOf(this.search.toLowerCase()) >= 0 ||
                    employee.office.toLowerCase().indexOf(this.search.toLowerCase()) >= 0   )
            })
        }
    }
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
