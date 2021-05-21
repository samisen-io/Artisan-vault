<template>
  <div>
    <section class="carousal-section">
      <b-container>
        <b-container>
          <div class="section-title">
            <b-row>
              <b-col col md="10">
                <h3>Top <span>Artists</span></h3>
              </b-col>
              <b-col col md="2">
                <a v-bind:href="'/ViewAllArtists'" style="align: right"
                  >View all Artists</a
                >
              </b-col>
              <br />
            </b-row>
          </div>
        </b-container>
        <center>
          <VueSlickCarousel v-bind="settings">
            <b-row v-for="topArtist in topArtists" :key="topArtist.id">
              <b-col>
                <b-card
                  :img-src="topArtist.authorProfilePicUrl"
                  size="5rem"
                  class="text-center"
                  style="max-width: 30rem"
                  img-height="250"
                >
                  <div class="mb-1">
                    <b-card-text>
                      <b>
                        <h3>{{ topArtist.artistName }}</h3></b
                      >
                    </b-card-text>
                    <a
                      class="link"
                      href="https://www.google.com"
                      target="_blank"
                      ><h5>@{{ topArtist.artistName }}</h5></a
                    >
                    <b-button
                      block
                      v-bind:href="'/Artistdetails?ArtistId=' + topartist.Id"
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
    topArtists() {
      return this.$store.state.topArtists;
    },
  },
  created() {
    this.loading = true;
    this.$store.dispatch("fetchtopArtists");
  },
};
</script>
<style>