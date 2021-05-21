<template>
  <div>
    <b-container>
      <div class="section-title">
        <b-row>
          <b-col col md="10">
            <h3>Featured <span>Artwork</span></h3>
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
            <b-row v-for="featured in featureds" :key="featured.id">
              <b-col>
                <b-card
                  :img-src="featured.artworkUrl"
                  size="5rem"
                  class="text-center"
                  style="max-width: 25rem"
                  img-height="200"
                >
                  <div class="mb-1">
                    <b-avatar
                      :src="featured.artistProfilePicUrl"
                      size="4rem"
                      class="text-center"
                      style="max-width: 25rem"
                    ></b-avatar>

                    <b-card-text>
                      <b>
                        <h3>{{ featured.artistName }}</h3></b
                      >
                    </b-card-text>
                    <hr style="padding: 0" />

                    <!-- For image description -->
                    <b-card-text>
                      {{ featured.artworktitle }}
                    </b-card-text>
                    <!-- button -->
                    <b-button
                      block
                      v-bind:href="'/Artwork?featureartworkid=' + featured.Id"
                      variant="outline-primary"
                      >View</b-button
                    >
                  </div>
                  <br />
                </b-card>
              </b-col>
            </b-row>
          </VueSlickCarousel>
        </center>
      </b-container>
      <br />
    </b-container>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "Crafts",
  components: {
    VueSlickCarousel,
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
    featureds() {
      console.log(this.$store.state.featureds);
      return this.$store.state.featureds;
    },
  },
  created() {
    this.loading = true;
    this.$store.dispatch("fetchFeatureds");
  },
};
</script>
