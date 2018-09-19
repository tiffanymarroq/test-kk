<template>
  <div class="card__element">
    <div class="card__content">
      <h2 class="card__title">{{title}}</h2>
      <div class="card__info">
        <p>Name - {{name}}</p>
        <p>Office - {{office}}</p>
        <p>Email - {{email}}</p>
        <p v-show="isManager">Manager</p>
      </div>

    </div>
  </div>
 
</template>
<script>
  export default {
    data() {
      return {

      }
    },
    props: {
      name: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      office: {
        type: String,
        required: true
      },
      isManager: {
          type: Boolean,
          required: true
      },
      manager: {
        type: String
      }
    }
  }

</script>

<style scoped>
  .card__element{
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 1px 2px 3px #ccc;
    background-color: white;
    width: 300px;
    min-height: 300px;
    margin: 5px;
    
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


