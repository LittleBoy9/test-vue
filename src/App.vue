<template>
  <div id="app">
      <!-- navbar -->
      <div class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
        <div class="container">
        <router-link to="/" class="navbar-brand">Home</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav">
      
            <li class="nav-item">
              <router-link class="nav-link" to="/blog">Blog</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/blog1">Blog1</router-link>
            </li>
             <li class="nav-item">
              <router-link class="nav-link" to="/blog2">Blog2</router-link>
            </li>
             <li class="nav-item">
              <router-link class="nav-link" to="/blog3">Blog3</router-link>
            </li>
             <li class="nav-item">
              <router-link class="nav-link" to="/blog4">Blog4</router-link>
            </li>
             <li class="nav-item">
              <router-link class="nav-link" to="/blog5">Blog5</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/blog6">Blog6</router-link>
            </li>
             <li class="nav-item">
              <router-link class="nav-link" to="/blog7">Blog7</router-link>
            </li>
             <li class="nav-item">
              <router-link class="nav-link" to="/blog8">Blog8</router-link>
            </li>
             <li class="nav-item">
              <router-link class="nav-link" to="/blog9">Blog9</router-link>
            </li>
             <li class="nav-item">
              <router-link class="nav-link" to="/blog10">Blog10</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/blog11">Blog11</router-link>
            </li>
             <li class="nav-item">
              <router-link class="nav-link" to="/blog12">Blog12</router-link>
            </li>
             <li class="nav-item">
              <router-link class="nav-link" to="/blog13">Blog13</router-link>
            </li>
           
           
            <li class="nav-item">
            <router-link class="nav-link" to="/services">Services</router-link>
            </li>
            <li class="nav-item">
             <router-link class="nav-link" to="/contact">contact</router-link>
            </li>
          </ul>
        </div>
        </div>
      </div>
      <div class="container">
       <transition name="moveInUp">
         <router-view/>
       </transition>
        
      </div>
    
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
.moveInUp-enter-active{
  animation: fadeIn 2s ease-in;
}
@keyframes fadeIn{
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
}

.moveInUp-leave-active{
  animation: moveInUp .3s ease-in;
}
@keyframes moveInUp{
 0%{
  transform: translateY(0);
 }
  100%{
  transform: translateY(-400px);
 }
}
</style>
