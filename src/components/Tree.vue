<template>
    <li>
        <div>       
         <div  :key = "key" v-for="(value, key) in model">
             <strong>{{value.name}}</strong> - 
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
        </item>
        <!-- <li class="add" @click="addChild">+</li> -->
        </ul   >

    </li>
</template>


<script>
export default {
 name: 'item',
 data(){
     name: ''
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
      var temp = []
      if (this.model != null) {
        return this.model.filter(m => {
          console.log(this.search)
          if (m.name.includes(this.search)) {
            console.log(m.name)
            return true
          }
          return false
        })
      }
    }
  },    
  methods: {
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
    .item {
      display: flex;
      /* padding: 20px; */
      box-sizing: border-box;
      flex-wrap: wrap;
      /* flex-flow: row-reverse  wrap; */
      align-content: center;
      justify-content: center;
      /* float: left; */
      /* max-width: 800px; */
    }

</style>
