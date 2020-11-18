<template>

  <div>
    <b-navbar toggleable="lg" type="light" variant="info">
      <b-navbar-brand href="/">CPMovieDB</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link to="/">Home</router-link> |
          <router-link to="/movies">Movies</router-link>
        </b-navbar-nav>

        <!-- Right aligned nav items -->


          <!-- <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown> -->
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-navbar-nav align="right">
          <router-link to="/">Sign In</router-link> 
          <router-link to="/movies">Sign Up</router-link>
        </b-navbar-nav>

      </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #7aa3cc;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #7aa3cc;
}

#nav a.router-link-exact-active {
  color: white;
}
b-navbar-nav{
  color: white;
}
</style>
