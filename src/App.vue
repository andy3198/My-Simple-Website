<template>
    <div class="navbar navbar-dark bg-primary">
        <a class="navbar-brand" href="#">Sample</a>
        <ul class="nav">
            <li class="nav-item">
                <router-link class="nav-link text-white" to="/">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link text-white" to="/portfolio">Portfolio</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link text-white" to="/about">About</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link text-white" to="/contact">Contact</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link text-white" to="/login">Log in</router-link>
            </li>
        </ul>
    </div>
    <div>
        <router-view />
    </div>
    <footer id="mu-footer" role="contentinfo">
        <div class="container">
          <div class="mu-footer-area">
            <p class="mu-copy-right">&copy; Copyright <a rel="nofollow" href="https://www.facebook.com/profile.php?id=100009303482365">Click Me To Know more about me</a>. All right reserved.</p>
          </div>
        </div>
  
      </footer>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>

