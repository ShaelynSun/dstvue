<template>
  <div class="hero">
    <h2 class="vue-title">Dynamic Story Telling</h2>
    <div>
      <p>These days are before the <b>Spring Festival</b>!!!</p>
      <flip-countdown deadline="2020-01-25 00:00:00"></flip-countdown>
    </div>
    <table align="center">
      <tr>
        <td>
          <p class="lead"><b><i>Do you have anything to share ?</i></b>
          <p>Not only a story about songs, myths, or your own stories.</p>
          <p>Just click <a href ="/#/stories">here</a> to go to the Story page</p>
        </td>
        <td>
          <img src="../assets/homer.gif" alt="description here" />
        </td>
      </tr>
    </table>
    <p class="lead">Homepage of <b>DST</b> Web app</p>
  </div>
</template>
<script>
import FlipCountdown from 'vue2-flip-countdown'
export default {
  components: {
    FlipCountdown
  }
}
</script>

<style>
  .hero {
    height: 100vh;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .hero .lead {
    font-weight: 200;
    font-size: 2.5rem;
  }
  #app1 {
    width: 60%;
    margin: 0 auto;
  }
  .vue-title {
    font-size: 50pt;
    margin-bottom: 10px;
  }
</style>
