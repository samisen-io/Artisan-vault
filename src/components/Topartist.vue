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
                <a v-bind:href="'/viewallartist'" style="align: right"
                  >View all artists</a
                >
              </b-col>
              <br />
            </b-row>
          </div>
        </b-container>
        <center>
          <VueSlickCarousel v-bind="settings">
            <b-row v-for="topartist in topartists" :key="topartist.id">
              <b-col>
                <b-card
                  :img-src="topartist.authorProfilePicUrl"
                  size="5rem"
                  class="text-center"
                  style="max-width: 30rem"
                  img-height="250"
                >
                  <div class="mb-1">
                    <b-card-text>
                      <b>
                        <h3>{{ topartist.artistName }}</h3></b
                      >
                    </b-card-text>
                    <a
                      class="link"
                      href="https://www.google.com"
                      target="_blank"
                      ><h5>@{{ topartist.artistName }}</h5></a
                    >
                    <b-button
                      block
                      href="/Artistdetails"
                      variant="outline-primary"
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
</template>
<script>
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
  computed: {
    topartists() {
      return this.$store.state.topartists;
    },
  },
  created() {
    this.loading = true;
    this.$store.dispatch("fetchTopArtists");
  },
};
</script>
<style>