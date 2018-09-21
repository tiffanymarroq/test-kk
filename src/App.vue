<template>
  <div id="app">
    <div>
      <h1 style="text-align: center; text-transform: uppercase">The Company</h1>
      <div style="text-align: center">
        <p>Search Here</p>
        <input placeholder=" Name, Title, or Office" v-model="search" type="text">
        <br> {{search}}
      </div>
      <br>
      <br>
      <div >
        <item class="flex" :model="getArr" :search="search">
        </item>
      </div>
    </div>
  </div>
</template>



<script>
import axios from 'axios'
import ProfileList from './components/ProfileList.vue'
import Tree from './components/Tree.vue'
export default {
  name: 'app',
  data () {
    return{
      employees: [],
      search: ''
    
  
    }
  },
  components: {
    appProfileList: ProfileList,
    item: Tree
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
@import url('https://fonts.googleapis.com/css?family=Lato');

  body{
    padding: 50px 20px;
    font-family: 'Lato', Arial, Helvetica, sans-serif
  }

  body {
  font-family: Menlo, Consolas, monospace;
  color: #444;
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
