<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light" fixed="top">
      <h3 style="padding-right: 25px">Artisan</h3>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse v-model="isCollapseOpen" id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item @click="closeNavCollapse" href="/">All Arts</b-nav-item>
          <b-nav-item href="/Crafts">Crafts</b-nav-item>
          <b-nav-item class="closeNavCollapse" href="/Digital"
            >Digital</b-nav-item
          >
          <b-nav-item href="/Drawing">Drawing</b-nav-item>
          <b-nav-item href="/Photography">Photography</b-nav-item>
          <b-nav-item @click="closeNavCollapse" href="/Sculpture">Sculpture</b-nav-item>
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
export default {
  name: "Navbar",
  data() {
    return {
      isCollapseOpen: false,
    };
  },
  methods: {
    closeNavCollapse() {
      if (this.isCollapseOpen) {
        this.$root.$emit("bv::toggle::collapse", "nav-collapse");
      }
    },
  },
};
</script>

<style>
.nav-item {
  padding: 5px;
}
.nav-item {
  color: #fff;
}
.nav-item :hover{
    background: red;
}
.nav-item :active{
  background: red;
}


.btn {
  border: none;
  outline: none;
  padding: 10px 16px;
  background-color: #f1f1f1;
  cursor: pointer;
  font-size: 18px;
}

/* Style the active class, and buttons on mouse-over */
.active,
.btn:hover {
  background-color: #666;
  color: white;
}
</style>