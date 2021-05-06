<template>
  <div id="app">
    <carousel-3d
      :controls-visible="true"
      :clickable="false"
      :autoplay="true"
      :autoplayTimeout="3500"
      :autoplayHoverPause="true"
      :perspective="0"
      :height="350"
    >
      <slide v-for="(slide, i) in slides" :key="i" :index="i">
        <figure>
          <img
            src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/robert.jpg"
          />
        </figure>
        <figure>
          
           <figure>
          <img
            src=
          />
        </figure>
          />
        </figure>
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  name: "App",
  components: {
    Carousel3d,
    Slide,
  },
  data() {
    return {
      slides: 6,
    };
  },
};
</script>

<style>
.carousel-3d-container .current figure {
  margin: 0;
}


</style>
