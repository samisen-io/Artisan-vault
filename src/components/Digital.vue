<template>
  <div>
    <!--navbar-->
    <Navbar />
    <br />
    <br />
    <br />
     <Digitalcard />
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
          <b-row v-for="digital in digitals" :key="digital.id">
            <b-col>
              <b-card
                :img-src="digital.Pic"
                size="5rem"
                class="text-center"
                style="max-width: 25rem"
                img-height="250"
              >
                <!-- For Creator photo and name -->
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
                  <!-- For email -->
                  <b-card-text>
                    <b>{{ digital.email }}</b>
                  </b-card-text>
                  <!-- For image description -->
                  <b-card-text>
                    {{ digital.Title }}
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
    <br />
    <!--footer -->
    <Footer />
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import Digitalcard from "./Digitalcard.vue";
import Footer from "./Footer.vue";
import Navbar from "./Navbar.vue";
export default {
  components: { Navbar, Footer, Digitalcard,VueSlickCarousel },
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
    }
  },
  created(){
    this.loading = true;
    this.$store.dispatch('fetchDigitals');
  }
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