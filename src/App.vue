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
      <div class="flex">
        <item class="item" :model="getArr" :search="search">
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

      this.findElement(data.data)

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
       findElement(arr) {

        for (var a in arr) {
          console.log(arr[a].name)
          this.$store.commit('setCompany',{
            name: arr[a].name,
            title: arr[a].title,
            office: arr[a].office,
            email: arr[a].email,
          })
            if (arr[a].manager != null) {
              this.findElement(arr[a].manager)
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
  flex-wrap: wrap;
  justify-content: center;
  align-content: center
}
.bold {
  font-weight: bold;
}
ul {
  padding-left: 3em;
  line-height: 1.5em;
  list-style-type: none;
}
li{
  list-style-type: none;
}

</style>
