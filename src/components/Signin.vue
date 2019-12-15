<template>
  <div id="app1" class="hero">
  <div><h3 class="vue-title"><i class="fa fa-flag" style="padding: 3px"></i>{{messagetitle}}</h3>
    <form @submit.prevent="submit" v-show="!$store.state.username">
      <div class="form-group">
        <input class="form__input" name="username" placeholder="Username" v-model="username"/>
        <br>
        <p>
        <input class="form__input" type="password" name="password" placeholder="Password" v-model="password"/>
        <div style="margin-top: 10px">
          <a href ="/#/register">Go to register a new account</a>
        </div>
        <div style="margin-top: 10px">{{message}}</div>
        <button class="btn btn-primary btn1" type="submit">Login</button>
        <button v-google-signin-button="clientId" class="google-signin-button"> Sign up by Google</button>
      </div>
    </form>
    <button v-show="$store.state.username" class="btn btn-primary btn1" @click="Personal_page">Check my page</button>
  </div>
  </div>
</template>

<script>
import userservice from '@/services/userservice'
import Cookie from 'js-cookie'
import GoogleLoginWithIdToken from 'vue-google-signin-button-directive'
export default {
  beforeCreate () {
    let username = Cookie.get('username')
    if (username) {
      this.$router.push('/#')
    }
  },
  data () {
    return {
      user: {},
      username: '',
      password: '',
      message: '',
      messagetitle: 'Signin',
      clientId: '827758022600-39rgbiksk05me4fql6sp7v34ee2ljlht.apps.googleusercontent.com'
    }
  },
  methods: {
    OnGoogleAuthSuccess (idToken) {
      // 请求后端接口，对登录信息进行校验
      this.GoogleLoginWithIdToken(idToken)
    },
    OnGoogleAuthFail (error) {
      console.log(error)
    },
    async GoogleLoginWithIdToken (idToken) {
      let res = await GoogleLoginWithIdToken(idToken)
      if (res.code === 0) {
        console.log('Google login success')
        await this.$router.push('/personal')
      }
    },
    submit () {
      console.log('submit!')
      //  this.$v.$touch()
      setTimeout(() => {
        var user = {
          username: this.username,
          password: this.password
        }
        this.user = user
        this.userLog(this.user)
      }, 500)
    },
    userLog: function (user) {
      userservice.userLogin(user)
        .then(response => {
          console.log(response)
          var message = response.data.message
          this.message = message
          this.$store.dispatch('setUsername', response.data.data)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    Personal_page: function () {
      this.$router.push('/personal')
    }
  }
}
</script>

<style scoped>
  .google-signin-button {
    color: white;
    background-color: red;
    height: 50px;
    font-size: 16px;
    border-radius: 10px;
    padding: 10px 20px 25px 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-top: 30px;
    width: 300px;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 30pt;
    margin-bottom: 10px;
  }
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
  p {
    margin-top: 20px;
  }
</style>
