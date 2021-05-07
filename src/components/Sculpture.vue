<template>
  <div>
   
    <navbar />
    <br />
    <br /> 
    <br />
    <sculpturecard />
    <br />
    <cardwith-pagination />
    <Footer />
  </div>
</template>

<script>
import CardwithPagination from './CardwithPagination.vue'

import Footer from './Footer.vue'
import Navbar from './Navbar.vue'
import Sculpturecard from './Sculpturecard.vue'
export default {
  components: { Navbar,  CardwithPagination, Footer, Sculpturecard },

}
</script>

<style>

</style>