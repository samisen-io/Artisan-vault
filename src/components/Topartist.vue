<template>
  <div>
    <section class="carousal-section">
      <b-container>
        <b-container>
          <div class="section-title">
            <b-row>
              <b-col col md="10">
                <h3>Top <span>Artist</span></h3>
              </b-col>
              <b-col col md="2">
                <a href="" style="align: right">View all artists</a>
              </b-col>
              <br />
            </b-row>
          </div>
        </b-container>
        <center>
          <VueSlickCarousel v-bind="settings">
            <b-row v-for="user in topart" :key="user.id">
              <b-col>
                <b-card
                  :img-src="user.Authorprofilepic"
                  size="5rem"
                  class="text-center"
                  style="max-width: 25rem"
                >
                  <div class="mb-1">
                    <b-card-text>
                      <b>
                        <h3>{{ user.Authorname }}</h3></b
                      >
                    </b-card-text>

                    <a
                      class="link"
                      href="https://www.google.com"
                      target="_blank"
                      ><h5>@{{ user.Authorname }}</h5></a
                    >

                    <b-button block href="" variant="outline-primary"
                      >View</b-button
                    >
                  </div>
                </b-card>
              </b-col>
            </b-row>
          </VueSlickCarousel>
        </center>
      </b-container>
    </section>
  </div>
  <!-- Featured Arts Section End -->
</template>
<script>
import Topartist from "./Topartist.json";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      topart: Topartist,
      settings: {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
};
</script>
<style>
.slick-prev::before,
.slick-next::before {
  color: rgba(0, 0, 0, 0.2);
  font-size: 2.5rem;
}

.slick-prev,
.slick-next {
  width: 2.5rem;
  height: 2.5rem;
  padding-right: -50%;
  z-index: 2;
}

.slick-list {
  width: 100%;
  margin: 0 auto;
}

.slick-prev {
  left: 0;
}

.slick-next {
  right: 0;
}
</style>