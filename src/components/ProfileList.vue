<template>
    <div>
        <div style="text-align: center">
            <p>Search Here</p>
            <input placeholder=" Name, Title, or Office" v-model="search" type="text">
        </div>
        <br>
        <br>

        <div class="card__element">
            <div >
                <Profile 
                    v-for="(employee, i) in company" 
                    :key="i"
                    :name="employee.name"
                    :title="employee.title"
                    :office="employee.office"
                    :email="employee.email"
                    :isManager=" employee.name "
                    :company="employee.manager"
                    >
                </Profile>
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
        company: {
            type: Array
        }
    },
    components:{
        Profile,
    }
}
</script>
<style scoped>
    .card-list{
        display: flex;
        padding: 20px;
        box-sizing: border-box;
        flex-wrap: wrap ;
        align-items: center;
        justify-content: center;
        max-width: 1200px;
    }
</style>
