<template>
  <div>
    <!--navbar-->
    <Navbar />
    <br />
    <br />
    <br />
    <craftcard />
    <!-- carfts slider -->
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
                :img-src="craft.Pic"
                size="5rem"
                class="text-center"
                style="max-width: 25rem"
                img-height="250"
              >
               
                <div class="mb-1">
                  <b-avatar
                    :src="craft.Authorprofilepic"
                    size="4rem"
                    class="text-center"
                    style="max-width: 25rem"
                  ></b-avatar>

                  <b-text>
                    <b>
                      <h3>{{ craft.Artistname }}</h3></b
                    >
                  </b-text>

                  <hr style="padding: 0" />
                 
                  <b-card-text>
                    <b>{{ craft.email }}</b>
                  </b-card-text>
                 
                  <b-card-text>
                    {{ craft.Title }}
                  </b-card-text>
                 
                  <b-button block 
                 
                   v-bind:href="'/Artwork?craftArtworkId=' + craft.Id"
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
    <!--footer -->
    <Footer />
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
import Craftcard from "./Craftcard.vue";
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
      loading:false,
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
      return this.$store.state.crafts
    }
  },
  created(){
    this.loading = true;
    this.$store.dispatch('fetchCrafts');
  }
};
</script>

