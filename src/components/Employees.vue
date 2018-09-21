<template>

  <div>
    <div :key="key" v-for="(value, key) in filterArr" >
      <div class="card__element">
        <div class="card__content">
          <strong><p>{{value.title}}</p></strong>
          <p> {{value.name}}</p>
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
    search: String
  },
  computed: {
    filterArr() { 
       return this.$store.getters.getCompany.filter( m =>{
        return (m.name.toLowerCase().includes(this.search.toLowerCase()) ||
          m.title.toLowerCase().includes(this.search.toLowerCase()) ||
          m.office.toLowerCase().includes(this.search.toLowerCase())  ) 
      })
    },

  },
  watch: {
    filterArr(){
      console.log('?')
      console.log(this.filterArr.length)
      this.$store.commit('setResults', this.filterArr.length)
    }
  }
}


</script>

<style scoped>
    .card__element{
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 2px 6px #ccc;
    background-color: white;
    width: 300px;
    min-height: 250px;
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
