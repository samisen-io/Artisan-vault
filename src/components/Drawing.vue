<template>
  <div>
    <Navbar />
    <br />
    <br />
    <br />

    <drawingcard />

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
          <b-row v-for="drawing in drawings" :key="drawing.id">
            <b-col>
              <b-card
                :img-src="drawing.Pic"
                size="5rem"
                class="text-center"
                style="max-width: 25rem"
                img-height="250"
              >
                <!-- For Creator photo and name -->
                <div class="mb-1">
                  <b-avatar
                    :src="drawing.Authorprofilepic"
                    size="4rem"
                    class="text-center"
                    style="max-width: 25rem"
                  ></b-avatar>
                  <b-text-area>
                    <b>
                      <h3>{{ drawing.Artistname }}</h3></b
                    >
                  </b-text-area>
                  <hr />

                  <b-card-text>
                    <b>{{ drawing.email }}</b>
                  </b-card-text>

                  <b-card-text>
                    {{ drawing.Title }}
                  </b-card-text>

                  <b-button
                    block
                    v-bind:href="'/Artwork?drawingArtworkId=' + drawing.Id"
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
import Drawingcard from "./DrawingCard.vue";

export default {
  name: "Drawings",
  components: {
    VueSlickCarousel,
    Navbar,
    Footer,

    Drawingcard,
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
    drawings() {
      return this.$store.state.drawings;
    },
  },
  created() {
    this.loading = true;
    this.$store.dispatch("fetchDrawings");
  },
};
</script>
<style>
.slick-prev::before,
.slick-next::before {
  color: red;
  font-size: 3rem;
}

.slick-prev {
  width: 1px;
  z-index: 1;
  padding: 0;
}

.slick-next {
  width: 3rem;
  z-index: 1;
  padding: 0;
}

.slick-list {
  width: 100%;
}

.body {
  background-color: salmon;
}
.section-title {
  position: relative;
  padding-bottom: 16px;
  margin-bottom: 30px;
}

.section-title.sidebar-title:before {
  height: 2px;
}

.section-title.sidebar-title:after {
  height: 2px;
}

.section-title.sidebar-title h5 {
  font-size: 20px;
  color: #151618;
  font-weight: 500;
}

.section-title:before {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 100%;
  background: #dd1515;
  content: "";
  z-index: 2;
}

.section-title h3 {
  font-size: 28px;
  color: #151618;
  font-weight: 300;
}

.section-title h3 span {
  font-weight: 700;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}
</style>
