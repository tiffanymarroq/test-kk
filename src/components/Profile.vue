<template>
  <div>
      
    <Profile  class="flex"  
        v-for="(employee, i) in filteredItems" 
        :key="i"
        :name="employee.name"
        :title="employee.title"
        :office="employee.office"
        :email="employee.email"
        :isManager=" employee.name "
        :company="employee.manager"
      ></Profile>
    <div class="card__element">
      <div class="card__content">
        <h2 class="card__title">{{title}}</h2>
        <div class="card__info">
          <p>Name - {{name}}</p>
          <p>Office - {{office}}</p>
          <p>Email - {{email}}</p>
          <!-- <p v-show="isManager">Manager</p> -->
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'Profile',
    data() {
      return {
        search: ''
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
        type: String,
        required: true
      },
      company: {
        type: Array
      }


    },
    computed: {
      filteredItems() {
        console.log(this.company == null)
        if (this.company != null) {
          return this.company.filter(employee => {
            console.log(employee.title + ' filter')
            return employee.title.toLowerCase().includes(this.search.toLowerCase())
            // employee.name.toLowerCase().indexOf(this.search) >= -1 ||
            // employee.office.toLowerCase().indexOf(this.search.toLowerCase()) >= -1   )
          })
        }
      },
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
  .col{
    width: 33.33%;
    display: block;
  }
  .flex{
    display: flex;
        /* padding: 20px; */
        box-sizing: border-box;
        flex-wrap: wrap ;
        align-content: center;
        justify-content: center;
        /* max-width: 800px; */
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


