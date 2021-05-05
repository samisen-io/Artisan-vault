<template>
  <div>
    <navbar />
    <!-- carousel page -->
    <carousel />
    <!-- Featured Arts Section Begin -->
    <br />
    <Featuredarts />
    <!-- Latestarts Arts Section Begin -->
    <br />
    <Latestarts />
    <!-- Top Arts Section End -->
    <br />
    <Toparts />
    <!--Footer -->
    <Footer />
    <br />
  </div>
</template>
 
<script>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
import Carousel from "./Carousel.vue";
import Featuredarts from "./Featuredarts.vue";
import Latestarts from "./Latestarts.vue";
import Toparts from "./Toparts.vue";

export default {
  components: { Navbar, Footer, Carousel, Featuredarts, Latestarts, Toparts },
  name: "Mainpage",
  methods: {
    say: function (message) {
      alert(message);
    },
  },
};
</script>

    
<style>
</style>