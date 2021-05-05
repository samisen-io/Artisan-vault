<template>
  <div>
    <br />
    <br />
    <navbar />
    <carousel />
    <br />
    <cardwith-pagination />
    <Footer />
  </div>
</template>

<script>
import CardwithPagination from './CardwithPagination.vue'
import Carousel from './Carousel.vue'
import Footer from './Footer.vue'
import Navbar from './Navbar.vue'
export default {
  components: { Navbar, Carousel, CardwithPagination, Footer },

}
</script>

<style>

</style>