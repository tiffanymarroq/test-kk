<template>
  <div id="app">
    <h1 style="text-align: center; text-transform: uppercase">The Company</h1>
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
      employees: []  
    }
  },
  components: {
    appProfileList: ProfileList
  },
  created(){
    axios.get('/src/assets/FakeOrgJSON.json')
    .then(data => {
      this.createArr(data.data)
    })
    .catch(err => {;
      console.log(err)
    })
  },
  methods: {
    createArr(arr){
      console.log(arr)
       for(var i in arr){
      console.log(arr[i] + 'arr')
         
          this.employees.push(i)
          if(i.manager != null){
              this.recursiveArr(context, i.manager)
          }
      }
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
