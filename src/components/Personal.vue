<template>
<div id="app1" class="hero">
  <h3 class="vue-title"><i class="fa fa-smile" style="padding: 3px"></i>{{messagetitle}}</h3>
</div>
</template>

<script>
export default {
  name: 'Personal',
  data () {
    return {
      messagetitle: 'Personal Page'
    }
  }
}
</script>

<style scoped>
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 30pt;
    margin-bottom: 10px;
  }
</style>
