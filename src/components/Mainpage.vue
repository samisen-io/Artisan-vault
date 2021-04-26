<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="">All Arts</b-navbar-brand>
      <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> -->
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/Crafts">Crafts</b-nav-item>
          <b-nav-item href="/Digital">Digital</b-nav-item>
          <b-nav-item href="/Drawing">Drawing</b-nav-item>
          <b-nav-item href="/Photography">Photography</b-nav-item>
          <b-nav-item href="/Sculpture">Sculpture</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <br />
    <!-- carousel page -->
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 1px #000"
      fade
      indicators
      img-width="1024"
      img-height="480"
    >
   <b-carousel-slide>
        
        <b-card-body title="Horizontal Card">
          <b-card-text>
            This is a wider card with supporting text as a natural lead-in to additional content.
            This content is a little bit longer.
          </b-card-text>
          <button class="btn btn-danger">venkat</button>
           <button class="btn btn-danger">venkat</button>
        </b-card-body>
     
      </b-carousel-slide>
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
      <b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <!-- <b-card-img src="../assets/logo.png" alt="Image" class="rounded-0"></b-card-img> -->
        <img alt="Vue logo" src="../assets/logo.png" class="rounded-0">
      </b-col>
      <b-col md="6">
        <b-card-body title="Horizontal Card">
          <b-card-text>
            This is a wider card with supporting text as a natural lead-in to additional content.
            This content is a little bit longer.
          </b-card-text>
          <button class="btn btn-danger">venkat</button>
           <button class="btn btn-danger">venkat</button>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
  </div>
</template>

<script>
export default {
  name: "Mainpage",
};
</script>

<style>
.nav-item {
  padding: 20px;
}
.b-navbar-fixed {
  top: 0;
  z-index: 100;
  position: fixed;
  width: 100%;
}
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}
</style>