<template>
    <li>
        <div >       
         <div :key = "key" v-for="(value, key) in filterArr">
          
             <strong>{{value.name}}</strong>  
             <p>Title - {{value.title}}</p>
             <p>Email - {{value.email}}</p>
             <p>Office - {{value.office}}</p>
           
             
        </div>

        <!-- <h1>{{model.name}}</h1> -->
        </div>
        <ul >
        <item
            class="item"
            v-for="(model, index) in filterArr"
            :key="index"
            :search="search"
            :model="model.manager"> 
            <h1>hi</h1>
        </item>
        <!-- <li class="add" @click="addChild">+</li> -->
        </ul   >

    </li>
</template>


<script>
export default {
  name: 'item',
  data() {
    return {
      name: '',
      company: []
    }

  },
  props: {
    model: Array,
    search: String

  },
  data: function () {
    return {
      open: false
    }
  },
  computed: {
    filterArr() {

      if (this.model != null) {
              this.findElement(this.model,this.search)
        // for (var m in this.model){
        //   console.log(this.model[m].manager)
        //   if (this.model[m].name.includes(this.search)) {
        //     console.log(this.model[m].name)
        //     temp.push({
        //       name: this.model[m].name,
        //       title: this.model[m].title,
        //       office: this.model[m].office,
        //       email: this.model[m].email
        //     })
        //   }
        //   if(this.model[m].manager > 1){

        //     temp.push({
        //       name: this.model[m].name,
        //       title: this.model[m].title,
        //       office: this.model[m].office,
        //       email: this.model[m].email
        //     })
        //   }
        // }
        // var found = this.findElement(this.model, this.search)
        // if(found != null){
        //   for( var f in found){
        //     temp.push({
        //       name: found[f].name,
        //       title: found[f].title,
        //       office: found[f].office,
        //       email: found[f].email,
        //     })
        //   }

        // }
       
      }

      return this.temp
    }
  },

  methods: {
    findElement(arr, value) {
      // var temp = []
      for (var a in arr) {
        if (arr[a].name.includes(value)) {
          this.temp.push({
            name: arr[a].name,
            title: arr[a].title,
            office: arr[a].office,
            email: arr[a].email,
          })

        }
        if (arr[a].manager != null) {
          this.findElement(arr[a].manager, value)
        }
      }
      console.log(this.temp)
      return this.temp


    },
    toggle: function () {
      if (this.isFolder) {
        this.open = !this.open
      }
    },
    changeType: function () {
      if (!this.isFolder) {
        Vue.set(this.model, 'manager', [])
        this.addChild()
        this.open = true
      }
    },
    addChild: function () {
      this.model.push({
        name: 'new stuff'
      })
    }
  }
}


</script>

<style scoped>
    /* .item {
      display: flex;
      padding: 20px;
      box-sizing: border-box;
      flex-wrap: wrap;
      align-content: center;
      justify-content: center;
      float: left;
      max-width: 800px;
    } */

</style>
