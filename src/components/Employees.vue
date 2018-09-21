<template>
  <div>
    <div :key="key" v-for="(value, key) in filterArr" >
      <div class="card__element">
        <div class="card__content">
          <p class="card__title">{{value.title}}</p>
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
  name: 'employees',
  data() {
    return {

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

  .card__title{
    text-transform: uppercase;
    text-align: center;
    font-weight: 700;
    font-size: 1.3rem
  }
</style>
