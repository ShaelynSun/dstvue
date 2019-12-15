<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-flag" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div id="app1">
      <form @submit.prevent="submit">
        <div class="form-group">
          <input class="form__input" name="username" placeholder="Username" v-model="username"/>
          <br>
          <p>
            <input class="form__input" type="password" name="password" placeholder="Password" v-model="password"/>
          <div style="margin-top: 10px">
            <a href ="/#/signin">Go to log in</a>
          </div>
          <button class="btn btn-primary btn1" type="submit">Register</button>
          <button class="btn2" @click="gotoSign">{{message}} To Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import userservice from '@/services/userservice'
import Vue from 'vue'
import {Vuelidate} from 'vuelidate'
import VueForm from 'vueform'
import VueSweetalert from 'vue-sweetalert'

Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})

Vue.use(Vuelidate)
Vue.use(VueSweetalert)

export default {
  name: 'Register',
  data () {
    return {
      user: {},
      username: '',
      password: '',
      submitStatus: null,
      messagetitle: 'Register',
      message: ''
    }
  },
  methods: {
    submit () {
      console.log('submit!')
      setTimeout(() => {
        this.submitStatus = 'OK'
        var user = {
          username: this.username,
          password: this.password
        }
        this.user = user
        this.userReg(this.user)
      }, 500)
    },
    userReg: function (user) {
      userservice.userRegister(user)
        .then(response => {
          console.log(response)
          var message = response.data.message
          this.message = message
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    gotoSign () {
      this.$router.push('/signin')
    }
  }
}
</script>

<style scoped>
  .btn1 {
    width: 300px;
    color: white;
    background-color: cornflowerblue;
    height: 50px;
    font-size: 16px;
    border-radius: 10px;
    padding: 10px 20px 25px 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-top: 50px;
  }
  .btn2 {
    width: 300px;
    color: white;
    background-color: lightseagreen;
    height: 50px;
    font-size: 16px;
    border-radius: 10px;
    padding: 10px 20px 25px 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-top: 50px;
  }
  .form-group {
    margin-left: 150px;
    width: 550px;
  }
  input {
    border: 1px solid silver;
    border-radius: 4px;
    background: white;
    padding: 5px 10px;
    width: 300px;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 30pt;
    margin-bottom: 10px;
  }
  p {
    margin-top: 20px;
  }
  .typo__p {
    width: 540px;
    font-size: x-large;
  }
</style>
