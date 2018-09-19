<template>
    <div class="card-list">
        <app-profile
            v-for="(employee, i) in employees"
            :key = "i"
            :name="employee.name"
            :title="employee.title"
            :office="employee.office"
            :email="employee.email"
            :isManager="employee.manager != null">
        </app-profile>

        
    </div>

</template>
<script>
import Profile from './Profile.vue'
export default {
    data(){
        return{

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
