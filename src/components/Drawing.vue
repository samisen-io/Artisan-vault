<template>
  <div>
   
    <navbar />
     <br />
    <br />
     <br />
    <br />
    <drawingcard />
     <br />
    <cardwith-pagination />
    <Footer />
  </div>
</template>

<script>
import CardwithPagination from "./CardwithPagination.vue";
import Drawingcard from './Drawingcard.vue';

import Footer from "./Footer.vue";
import Navbar from "./Navbar.vue";
export default {
  components: { Navbar, CardwithPagination, Footer, Drawingcard },
};
</script>

<style>
</style>