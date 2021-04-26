<template>
  <div>
    <navbar />
    <br />
    <!-- carousel page -->
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 1px #000"
      fade
      indicators
      img-width="124"
      img-height="48"
    >
      <b-carousel-slide
        caption="First slide"
        img-src="https://picsum.photos/1024/480/?image=10"
      ></b-carousel-slide>
      <b-carousel-slide 
        caption="Second Slide"
        img-src="https://picsum.photos/1024/480/?image=12"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Third Slide"
        img-src="https://picsum.photos/1024/480/?image=22"
      ></b-carousel-slide>
    </b-carousel>
    <!-- card part -->
    <b-card no-body class="overflow-hidden" style="max-width: 540px">
      <b-row no-gutters>
        <b-col md="6">
          <img alt="Vue logo" src="../assets/logo.png" class="rounded-0" />
        </b-col>
        <b-col md="6">
          <b-card-body title="Horizontal Card">
            <b-card-text>
              This is a wider card with supporting text as a natural lead-in to
              additional content. This content is a little bit longer.
            </b-card-text>
            <button class="btn btn-danger">venkat</button>
            <button class="btn btn-danger">venkat</button>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
   
    <Footer />
  </div>
</template>

<script>
import Footer from './Footer.vue';
import Navbar from "./Navbar.vue";
export default {
  components: { Navbar, Footer },
  name: "Mainpage",
};
</script>

<style>

</style>