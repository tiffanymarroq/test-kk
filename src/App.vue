<template>
  <div id="app">
    <h1 style="text-align: center; text-transform: uppercase">The Company</h1>
    <div >
          <item
            class="item"
            :model="employees"
            >
    </item>
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
    
  
    }
  },
  components: {
    appProfileList: ProfileList,
    item: Tree
  },
  created(){
    axios.get('/src/assets/FakeOrgJSON.json')
    .then(data => {
      this.employees = data.data
    })
    .catch(err => {;
      console.log(err)
    })
  },
  methods: {
   
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
.bold {
  font-weight: bold;
}
ul {
  padding-left: 5em;
  line-height: 1.5em;
  list-style-type: none;
}
li{
  list-style-type: none;
}

</style>
