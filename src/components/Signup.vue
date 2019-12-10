<template>
  <div>
    <button v-google-signin-button="clientId" class="google-signin-button"> Sign up by Google</button>
  </div>
</template>

<script>
import GoogleLoginWithIdToken from 'vue-google-signin-button-directive'
export default {
  name: 'Signup',
  data () {
    return {
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
      }
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
    margin-top: 50px;
  }
</style>
