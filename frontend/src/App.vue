<template class = 'gray'>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">homepage</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/BR" class="nav-link">巴西</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/CA" class="nav-link">加拿大</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/DE" class="nav-link">德國</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/FR" class="nav-link">法國</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/GB" class="nav-link">英國</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/IN" class="nav-link">印度</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/JP" class="nav-link">日本</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/KR" class="nav-link">韓國</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/MX" class="nav-link">墨西哥</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/RU" class="nav-link">俄羅斯</router-link>
        </li>



      </div>
    </nav>
    
    <div class = 'temp'>
      <router-view />
    </div>
  </div>
  
</template>

<script>
export default {
  name: "app"
};
</script>



<style>
.temp{
  padding-top:20px;
  padding-left:50px;
  width:auto;
  background-color:antiquewhite;
}


</style>
<!--

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
-->

