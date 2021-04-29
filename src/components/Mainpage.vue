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
    <!-- Featured Arts Section Begin -->
    <br />
    <br />
    <section class="carousal-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title">
              <h3>Featured <span>Artwork</span></h3>
            </div>
          </div>
        </div>
      </div>
      <br />
      <center>View All Featured Artwork</center>
    </section>
    <!-- Featured Arts Section End -->

    <!-- Latest Arts Section Begin -->
    <br />
    <br />
    <section class="carousal-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title">
              <h3>Latest <span>Artwork</span></h3>
            </div>
          </div>
        </div>
      </div>
      <br />
      <center>View All Latest Artwork</center>
    </section>

    <!-- Latest Arts Section End -->
    <Footer />
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
export default {
  components: { Navbar, Footer },
  name: "Mainpage",
};
</script>

<style>
.carousal-section {
  margin-bottom: 70px;
}

.section-title {
  position: relative;
  padding-bottom: 16px;
  margin-bottom: 30px;
}

.section-title.sidebar-title:before {
  height: 2px;
}

.section-title.sidebar-title:after {
  height: 2px;
}

.section-title.sidebar-title h5 {
  font-size: 20px;
  color: #151618;
  font-weight: 500;
}

.section-title:before {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 70px;
  background: #dd1515;
  content: "";
  z-index: 1;
}

.section-title:after {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 100%;
  background: #f2f2f2;
  content: "";
}

.section-title h3 {
  font-size: 28px;
  color: #151618;
  font-weight: 300;
}

.section-title h3 span {
  font-weight: 700;
}
</style>