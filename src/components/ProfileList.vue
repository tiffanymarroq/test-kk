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
            :company="company">
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
                
                return employee.title.toLowerCase().includes(this.search.toLowerCase()) || 
                    employee.name.toLowerCase().includes(this.search.toLowerCase()) || 
                    employee.office.toLowerCase().includes(this.search.toLowerCase())
                 
             
          })
        }
      }
    },
    methods: {
      searchTree(members, key){
          console.log(members)
        var temp=[]
          for( var m in members){
              if(members[m].name.includes(key) 
              || members[m].title.includes(key) 
              || members[m].office.includes(key) ){
                  console.log('in')
                  return temp.concat(members[m])
              }else if( members[m].manager != null){
                  var m = searchTree(members[m].manager);
                  if(m!=null){
                      temp.concat(m)
                  }
              }else{
                  console.log("nope")
                  return null;
              }
          }
      }
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
