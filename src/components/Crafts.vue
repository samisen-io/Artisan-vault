<template>
  <div>
    <Navbar />
    <br />
    <br />
    <br />
    <craftcard />
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
          <b-row v-for="craft in crafts" :key="craft.id">
            <b-col>
              <b-card
                :img-src="craft.artworkUrl"
                size="5rem"
                class="text-center"
                style="max-width: 25rem"
                img-height="250"
              >
                <div class="mb-1">
                  <b-avatar
                    :src="craft.artistProfilePicUrl"
                    size="4rem"
                    class="text-center"
                    style="max-width: 25rem"
                  ></b-avatar>

                  <b-card-text>
                    {{ craft.artworkTitle }}
                  </b-card-text>
                  <hr style="padding: 0" />
                  <b-button
                    block
                    v-bind:href="'/ArtworkDetails?craftArtworkId=' + craft.Id"
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
import Craftcard from "./CraftCard.vue";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "Crafts",
  components: {
    VueSlickCarousel,
    Navbar,
    Footer,
    Craftcard,
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
    crafts() {
      return this.$store.state.crafts;
    },
  },
  created() {
    this.loading = true;
    this.$store.dispatch("fetchCrafts");
  },
};
</script>

