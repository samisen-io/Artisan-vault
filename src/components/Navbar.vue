<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light" fixed="top">
      <h3 style="padding-right: 25px">Artisan</h3>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link tag="li" class="col" class-active="active" to="/" exact
              >All Arts</router-link
            ></b-nav-item
          >

          <b-nav-item>
            <router-link
              tag="li"
              class="col"
              class-active="active"
              to="/Crafts"
              exact
              >Crafts</router-link
            ></b-nav-item
          >

          <b-nav-item>
            <router-link
              tag="li"
              class="col"
              class-active="active"
              to="/Digital"
              exact
              >Digital</router-link
            ></b-nav-item
          >

          <b-nav-item>
            <router-link
              tag="li"
              class="col"
              class-active="active"
              to="/Photography"
              exact
              >Photography</router-link
            ></b-nav-item
          >
          <b-nav-item>
            <router-link
              tag="li"
              class="col"
              class-active="active"
              to="/Drawing"
              exact
              >Drawing</router-link
            ></b-nav-item
          >

          <b-nav-item>
            <router-link
              tag="li"
              class="col"
              class-active="active"
              to="/Sculpture"
              exact
              >Sculpture</router-link
            ></b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

   
<style>
.nav-item {
  padding: 5px;
}
.nav-item {
  color: #fff;
}

.btn {
  border: none;
  outline: none;
  padding: 10px 16px;
  background-color: #f1f1f1;
  cursor: pointer;
  font-size: 18px;
}

.active,
.btn {
  background-color: #666;
  color: white;
}

nav li.router-link-active {
  color: red;
  cursor: pointer;
  list-style-type: none;
}
nav li {
  list-style-type: none;
}
</style>