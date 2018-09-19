<template>
    <div>
        <div style="text-align: center">
            <p>Search Here</p>
            <input placeholder=" Name, Title, or Office" v-model="search" type="text">
            <br>
        {{search}}
        </div>
        <br>
        <br>
        <Profile class="flex"
            v-for="(employee, i) in company" 
            :key="i"
            :name="employee.name"
            :title="employee.title"
            :office="employee.office"
            :email="employee.email"
            :isManager=" employee.name "
            :company="employee.manager"
            :search="search"
            >
        </Profile>
    </div>
</template>
<script>
import Profile from './Profile.vue'
export default {
    data(){
        return{
            search: '',
            employees: []
        }
    },
    props: {
        company: {
            type: Array
        }
    },
    components:{
        Profile,
    },
     computed: {
      filteredItems() {
        if (this.company != null) {
          return this.company.filter(employee => {
              if(employee.title.toLowerCase().includes(this.search.toLowerCase()) || 
                employee.name.toLowerCase().includes(this.search.toLowerCase()) || 
                employee.office.toLowerCase().includes(this.search.toLowerCase())){
                    console.log(employee.name)
                    return true
                }
            return false
          })
        }
      },

    },
    methods: {
      
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
        max-width: 600px;
    }

    .flex{
        display: flex;
        /* padding: 20px; */
        box-sizing: border-box;
        flex-wrap: wrap;
        flex-flow: row-reverse  wrap;
        align-content: center; 
        justify-content: center;
        /* float: left; */
        
        /* max-width: 800px; */
    }
</style>
