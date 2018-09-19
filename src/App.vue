<template>
  <div id="app">
    <h1>Workers</h1>
    <input v-model="inputElement" type="text">
    <div v-for="(employee, i) in filteredItems" :key = "i">
      {{employee.title}}
    </div>
    <app-profile-list :employees= "employees"></app-profile-list>

  </div>
</template>

<script>
import axios from 'axios'
import ProfileList from './components/ProfileList.vue'
export default {
  name: 'app',
  data () {
    return{
      inputElement: '',
      employees: []
      
    }
  },
  components: {
    appProfileList: ProfileList
  },
  created(){
    axios.get('/src/assets/FakeOrgJSON.json')
    .then(data => {
      this.employees = data.data
      console.log(this.employees)
      
    })
  },

    computed: {
    filteredItems() {
      return this.employees.filter(employee => {
         return 
         employee.title.indexOf(this.inputElement.toLowerCase()) > -1 ||
         employee.name.indexOf(this.inputElement.toLowerCase()) > -1 ||
         employee.office.indexOf(this.inputElement.toLowerCase()) > -1 
      })
    }
  
  }
}
</script>

<style>

</style>
