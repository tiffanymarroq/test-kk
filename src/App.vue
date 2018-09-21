<template>
  <div id="app">
    <div>
      <h1 style="text-align: center; text-transform: uppercase">The Company</h1>
      <div style="text-align: center">
        <p>Search Here</p>
        <input placeholder=" Name, Title, or Office" v-model="search" type="text">
        <br>
        <p>Found: {{getResults}}</p>
     
      </div>
      <br>
      <br>
      <div >
        <employees class="flex" :model="getArr" :search="search">
        </employees>
      </div>
    </div>
  </div>
</template>



<script>
import axios from 'axios'
import Employees from './components/Employees.vue'
export default {
  name: 'app',
  data () {
    return{
      employees: [],
      search: ''
    
  
    }
  },
  components: {
    employees: Employees
  },
  created(){
    axios.get('/src/assets/FakeOrgJSON.json')
    .then(data => {

      this.setEmployees(data.data)

    })
    .catch(err => {
      console.log(err)
    })
  },
  computed:{
    getArr(){
      return this.$store.getters.getCompany
    },
    getResults(){
      return this.$store.getters.getNumberResults
    }
  },
  methods: {
       setEmployees(arr) {
        for (var a in arr) {
          this.$store.commit('setCompany',{
            name: arr[a].name,
            title: arr[a].title,
            office: arr[a].office,
            email: arr[a].email,
          })
            if (arr[a].manager != null) {
              this.setEmployees(arr[a].manager)
          } 
        }
    },
  }
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');


  body{
    padding: 50px 20px;
    font-family: 'Source Sans Pro', Arial, Helvetica, sans-serif
  }



.item {
  cursor: pointer;
}
.flex{
        display: flex;
        padding: 20px;
        box-sizing: border-box;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        max-width: 1200px;
}
.bold {
  font-weight: bold;
}


</style>
