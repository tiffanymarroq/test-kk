<template>
  <div class="card__element">
    <div class="card__content">
      <h1 class="card__title">{{title}}</h1>
      <p>{{name}}</p>
      <p>{{office}}</p>
      <p>{{email}}</p>
      <p v-show="isManager">Manager</p>
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
      }
    }
  }

</script>

<style scoped>
  .card__element{
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 2px #ccc;
    background-color: white;
    width: 300px;
  }

  .card__content{
    padding: 20px; 
    text-align: center
    
  }

  .card__title{
    text-decoration: underline;

  }
</style>


