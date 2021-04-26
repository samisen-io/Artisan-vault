<template>
  <div>
    <navbar />
    <p> Drawing page</p>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue"
export default {
  components: { Navbar,Footer },
  name: "Drawing",
};
</script>

<style>
</style>