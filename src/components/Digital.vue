<template>
  <div>
    <Navbar />
    <br />
    <br />
    <br />
    <Digitalcard />

    <br />
    <br />
    <br />
    <br />
    <b-container>
      <b-row>
        <b-col md="12" class="my-1"> </b-col>
      </b-row>
      <center>
        <VueSlickCarousel v-bind="settings">
          <b-row v-for="digital in digitals" :key="digital.id">
            <b-col>
              <b-card
                :img-src="digital.Pic"
                size="5rem"
                class="text-center"
                style="max-width: 25rem"
                img-height="250"
              >
                <div class="mb-1">
                  <b-avatar
                    :src="digital.Authorprofilepic"
                    size="4rem"
                    class="text-center"
                    style="max-width: 25rem"
                  ></b-avatar>

                  <b-text>
                    <b>
                      <h3>{{ digital.Artistname }}</h3></b
                    >
                  </b-text>

                  <hr style="padding: 0" />

                  <b-card-text>
                    <b>{{ digital.email }}</b>
                  </b-card-text>

                  <b-card-text>
                    {{ digital.Title }}
                  </b-card-text>

                  <b-button
                    block
                    v-bind:href="'/Artwork?digitalArtworkId=' + digital.Id"
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
    <br />

    <Footer />
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import Digitalcard from "./DigitalCard.vue";
import Footer from "./Footer.vue";
import Navbar from "./Navbar.vue";
export default {
  components: { Navbar, Footer, Digitalcard, VueSlickCarousel },
  data() {
    return {
      loading: false,
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
    digitals() {
      return this.$store.state.digitals;
    },
  },
  created() {
    this.loading = true;
    this.$store.dispatch("fetchDigitals");
  },
};
</script>

