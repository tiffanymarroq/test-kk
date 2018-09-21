<template>
    <li>
        <div>       
        <!-- <span v-if="isFolder">[{{ open ? '-' : '+' }}]</span> -->
        <!-- <h1>YEP</h1> -->
         <div  :key = "key" v-for="(value, key) in model">
             <strong>{{value.name}}</strong> - {{value.title}}
             <p>Email - {{value.email}}</p>
             <p>Office - {{value.office}}</p>
             
        </div>

        <!-- <h1>{{model.name}}</h1> -->
        </div>
        <ul >
        <item
            class="item"
            v-for="(model, index) in model"
            :key="index"
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

  },
  data: function () {
    return {
      open: false
    }
  },
  computed: {
    isFolder: function () {
      return this.model.manager &&
        this.model.manager.length
    },
    filterArr(){
        var tmp = []
        console.log(this.model.name)
        if(this.model.name.includes('')){
            tmp.push(this.model)
        }
        console.log(tmp)
        return tmp  

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
    
</style>
