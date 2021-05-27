<template>
  <div>
    <!--navbar-->
    <Navbar />
    <br />
    <br />
    <br />
    <sculpturecard />
    <!-- sculpture slider -->
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
          <b-row v-for="sculpture in sculptures" :key="sculpture.id">
            <b-col>
              <b-card
                :img-src="sculpture.artworkUrl"
                size="5rem"
                class="text-center"
                style="max-width: 25rem"
                img-height="250"
              >
                <div class="mb-1">
                  <b-avatar
                    :src="sculpture.artistProfilePicUrl"
                    size="4rem"
                    class="text-center"
                    style="max-width: 25rem"
                  ></b-avatar>

                  <b-text>
                    <b>
                      <h3>{{ sculpture.authorName }}</h3></b
                    >
                  </b-text>

                  <hr style="padding: 0" />

                  <b-card-text>
                    {{ sculpture.artworkTitle }}
                  </b-card-text>

                  <b-button
                    block
                    v-bind:href="'/ArtworkDetails?sculptureArtworkId=' + sculpture.Id"
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
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import Sculpturecard from "./SculptureCard.vue";

export default {
  name: "Sculpture",
  components: {
    VueSlickCarousel,
    Navbar,
    Footer,
    Sculpturecard,
  },
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
    sculptures() {
      return this.$store.state.sculptures;
    },
  },
  created() {
    this.loading = true;
    this.$store.dispatch("fetchSculptures");
  },
};
</script>

