<template>
  <div class="hero">
    <h1 class="vue-title">Homer for President !!</h1>

    <table align="center">
      <tr>
        <td>
          <p class="lead"><b><i>Do you have anything to share ?</i></b>
          <p>Not only a story about songs, myths, or your own stories.</p>
          <p>Just click <a href ="/#/stories">here</a> to go to</p>
          <p>the Story page and make a story</p>
        </td>
        <td>
          <img src="../assets/homer.gif" alt="description here" />
        </td>
      </tr>
    </table>

    <p></p>
    <p class="lead">This is the homepage of your <b>MEVN</b> Web app</p>
  </div>
</template>

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
    font-size: 70pt;
    margin-bottom: 10px;
  }
</style>
