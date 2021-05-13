<template>
  <div>
    <section class="carousal-section">
      <b-container>
        <div class="section-title">
          <b-row>
            <b-col col md="10">
              <h3>HighestPaid <span>Artwork</span></h3>
            </b-col>
            <b-col col md="2">
              <a href="/Artwork" style="align: right">View all artworks</a>
            </b-col>
            <br />
          </b-row>
        </div>
        <b-container>
          <b-row>
            <b-col md="12" class="my-1"> </b-col>
          </b-row>
          <center>
            <VueSlickCarousel v-bind="settings">
              <b-row v-for="user in latestart" :key="user.id">
                <b-col>
                  <b-card
                    :img-src="user.Pic"
                    size="5rem"
                    class="text-center"
                    style="max-width: 25rem"
                  >
                    <!-- For Creator photo and name -->
                    <div class="mb-1">
                      <b-avatar
                        :src="user.Authorprofilepic"
                        size="4rem"
                        class="text-center"
                        style="max-width: 25rem"
                      ></b-avatar>

                      <b-card-text>
                        <b>
                          <h3>{{ user.Artistname }}</h3></b
                        >
                      </b-card-text>

                      <hr style="padding: 0" />
                      <!-- For email -->
                      <b-card-text>
                        <b>{{ user.email }}</b>
                      </b-card-text>
                      <!-- For image description -->
                      <b-card-text>
                        {{ user.Title }}
                      </b-card-text>
                      <!-- button -->
                      <b-button block href="/Artwork" variant="outline-primary"
                        >View</b-button
                      >
                    </div>
                  </b-card>
                </b-col>
              </b-row>
            </VueSlickCarousel>
          </center>
        </b-container>
      </b-container>
    </section>
  </div>
</template>



<script>
import latestData from "./latestart.json";
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
      latestart: latestData,

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
</style>
