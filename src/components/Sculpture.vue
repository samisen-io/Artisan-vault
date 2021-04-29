<template>
  <div>
    <navbar />
    <br />
    <br />
    <br />
    <p>Sculpture page</p>
    <div class="card">
      <div>
        <b-carousel
          id="carousel-fade"
          style="text-shadow: 0px 0px 1px #000"
          fade
          indicators
          img-width="102"
          img-height="20"
        >
          <b-carousel-slide
            caption="First slide"
            img-src="https://picsum.photos/1024/480/?image=15"
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
      </div>
    </div>
    <div>
      <b-jumbotron bg-variant="dark" text-variant="white" border-variant="dark">
        <template #header>Sculpture Page</template>

        <template #lead>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </template>

        <hr class="my-4" />

        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
      </b-jumbotron>
    </div>
    <Footer />
      <br />
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
export default {
  components: { Navbar, Footer },
  name: "Sculpture",
};
</script>

<style>
</style>