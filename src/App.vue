<template>
  <div id="app">
    <h1>Workers</h1>
    <input type="text">Search for
    <div v-for="i in employees">
      <h1>{{i.title}}</h1>
      <p>{{i.name}}</p>
      <p>{{i.email}}</p>
      <p>{{i.office}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'app',
  data () {
    return{
      employees: []
      
    }
  },
  created(){
    axios.get('/src/assets/FakeOrgJSON.json')
    .then(data => {
      this.employees = data.data
    })
  }
}
</script>

<style>

</style>
