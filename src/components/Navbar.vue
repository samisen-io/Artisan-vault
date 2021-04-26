<template>
  <div>
    
    <b-navbar toggleable="lg" type="waring" variant="light">
        <!-- <img alt="Vue logo" src="../assets/artisan.png" class="rounded-0" width="150" height="50" /> -->
      <h3 style="padding-right:25px">Artisan</h3>
      <b-navbar-brand href="/">All Arts</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/Crafts">Crafts</b-nav-item>
          <b-nav-item href="/Digital">Digital</b-nav-item>
          <b-nav-item href="/Drawing">Drawing</b-nav-item>
          <b-nav-item href="/Photography">Photography</b-nav-item>
          <b-nav-item href="/Sculpture">Sculpture</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/Sculpture">Login</b-nav-item>
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
</style>