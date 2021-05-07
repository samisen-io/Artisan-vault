<template>
  <div>
  
   
    <navbar />
      <br />
    <br />
      <br />
    <br />
    <Digitalcard />
     <br />
    <cardwith-pagination />
    <Footer />
  </div>
</template>

<script>

import CardwithPagination from './CardwithPagination.vue'
import Digitalcard from './Digitalcard.vue'

import Footer from './Footer.vue'
import Navbar from './Navbar.vue'
export default {
  components: { Navbar, CardwithPagination, Footer, Digitalcard},

}
</script>

<style>

</style>