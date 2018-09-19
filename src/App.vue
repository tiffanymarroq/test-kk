<template>
  <div id="app">
    <h1 style="text-align: center">The Company</h1>
    <app-profile-list :company= "employees"></app-profile-list>

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
      console.log(data.data)
      return this.employees= data.data
      

    })
    .catch(err => {;
      console.log(err)
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
  },
  methods: {
    arrayValues(){
      Object.keys(this.employees).forEach(function(value, key) {
        console.log(value);
        this.employees[value].forEach(function(v, k) {
          console.log(v.name)
        })
      })
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Lato');

  body{
    padding: 50px 20px;
    font-family: 'Lato', Arial, Helvetica, sans-serif
  }

</style>
