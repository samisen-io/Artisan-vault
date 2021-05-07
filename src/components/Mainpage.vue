<template>
  <div>
    <navbar />
    <br />
    <br />
    <br />
    <br />
    <Maincard />
    <!-- Featured Arts Section Begin -->
    <br />
    <Featuredarts />
    <!-- Latestarts Arts Section Begin -->
    <br />
    <Latestarts />
    <br />
    <!-- Highestpaidarts  -->
    <Highestpaidart />
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
import Maincard from "./Maincard.vue";
import Featuredarts from "./Featuredarts.vue";
import Latestarts from "./Latestarts.vue";
import Toparts from "./Toparts.vue";
import Highestpaidart from "./Highestpaidart.vue";

export default {
  components: {
    Navbar,
    Footer,
    Featuredarts,
    Latestarts,
    Toparts,
    Maincard,
    Highestpaidart,
  },

  name: "Mainpage",
  methods: {
    say: function (message) {
      alert(message);
    },
  },
};
</script>

    
<style>
.body{
  background-color: salmon;
}
</style>