<template>

  <div>
    <div :key="key" v-for="(value, key) in filterArr">
      <div class="card__element">
        <div class="card__content">
          <strong>{{value.name}}</strong>
          <p>Title - {{value.title}}</p>
          <p>Email - {{value.email}}</p>
          <p>Office - {{value.office}}</p>
        </div>
      </div>
    </div>
  </div>
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
  computed: {
    filterArr() { 
      
       return this.$store.getters.getCompany.filter( m =>{
        return m.name.toLowerCase().includes(this.search)
      })
    }
  },

}


</script>

<style scoped>
    .card__element{
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 2px 6px #ccc;
    background-color: white;
    width: 350px;
    min-height: 300px;
    margin: 5px;
    display: inline-block;
  }

   .card__element:hover{
    box-shadow: none;
  }

  .card__content{
    padding: 20px; 
    
  }
  .card__info{
    margin-left: auto;
    margin-right: auto    
  }

  .card__title{
    text-transform: uppercase;
    text-align: center
  }
</style>
