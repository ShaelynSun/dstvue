<template>
  <div id="app">
    <b-navbar toggleable="md" variant="dark" type="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <img src="./assets/logo.png" class="img-circle" height="50" width="50">
      <b-navbar-brand to="/"> Dynamic Story Telling</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/#"><i class="fa fa-home" style="padding: 5px"> Home</i></b-nav-item>
          <b-nav-item to="/stories"><i class="fa fa-list" style="padding: 5px"> Stories</i></b-nav-item>
          <b-nav-item to="/mystories"><i class="fa fa-coffee" style="padding: 5px"> My Stories</i></b-nav-item>
          <b-nav-item to="/story"><i class="fa fa-book" style="padding: 5px"> Add Stories</i></b-nav-item>
          <b-nav-item to="/map"><i class="fa fa-globe" style="padding: 5px"> Map </i></b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/log"><i class="fa fa-sign-in" style="padding: 5px"> Login </i></b-nav-item>
          <b-nav-item to="/logout"><i class="fa fa-sign-out" style="padding: 5px"> Logout </i></b-nav-item>
          <b-nav-item to="/signup"><i class="fa fa-flag" style="padding: 5px"> Sign up </i></b-nav-item>
          <i class="fa fa-pied-piper-alt fa-1x" style="padding: 5px; color: white;"></i>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .btn {
    color: aliceblue;
  }
.VueTables__sortable {
  cursor: pointer;
}
</style>
