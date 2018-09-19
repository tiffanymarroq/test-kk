<template>
  <div>
    
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

    <Profile class="flex"
        v-for="(employee, i) in company" 
        :key="i"
        :name="employee.name"
        :title="employee.title"
        :office="employee.office"
        :email="employee.email"
        :isManager=" employee.name "
        :company="employee.manager"
        :search="search"
      ></Profile>
  </div>

</template>

<script>
  export default {
    name: 'Profile',
    data() {
      return {
        employees: []
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
      },
      search: {
        type: String
      }
    },
    computed: {
      filteredItems() {
        if (this.company != null) {
          return this.company.filter(employee => {
            if(employee.title.includes(this.search)){
              // console.log(employee.title + ' filtered')
              return true
            }
       
            return false
          })
        }
      },
    },
    methods: {
       find(employee, key)
        {
            for (employed in employee)
            {
                if (employed.name.includes(key) || employed.title.includes(key) || employed.office.includes(key) )
                  console.log(employed.title)
                    return employed;
                if (employed.manager != null)
                {
                    var subresult = find(employed.manager, key);
                    if (subresult)
                        return subresult;
                }
            }
            return employee
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
    flex-wrap: wrap;
    flex-flow: row-reverse  wrap;
    align-content: center; 
    justify-content: center;
    /* float: left; */
    
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


