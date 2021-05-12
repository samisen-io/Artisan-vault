<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light" fixed="top">
      <h3 style="padding-right: 25px">Artisan</h3>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse v-model="isCollapseOpen" id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link tag="li" class="col" class-active="active" to="/" exact
            >Allarts</router-link
          >
          <router-link
            tag="li"
            class="col"
            class-active="active"
            to="/Crafts"
            exact
            >Crafts</router-link
          >
          <router-link
            tag="li"
            class="col"
            class-active="active"
            to="/Drawing"
            exact
            >Drawing</router-link
          >
          <router-link
            tag="li"
            class="col"
            class-active="active"
            to="/Photography"
            exact
            >Photography</router-link
          >
          <router-link
            tag="li"
            class="col"
            class-active="active"
            to="/Drawing"
            exact
            >Drawing</router-link
          >
          <router-link
            tag="li"
            class="col"
            class-active="active"
            to="/Sculpture"
            exact
            >Sculpture</router-link
          >
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-button variant="outline-primary" href="/Login">
            <b-icon icon="person-fill"></b-icon> Login
          </b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style>
nav li:hover,
nav li.router-link-active,
nav li.router-link-exact-active {
  color: red;
  cursor: pointer;
  list-style-type: none;
}
nav li {
  list-style-type: none;
}
</style>