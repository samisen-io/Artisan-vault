<template>
  <div id="app">
    <carousel-3d
      :controls-visible="true"
      :clickable="false"
      :autoplay="true"
      :autoplayTimeout="3500"
      :width="410"
      :height="350"
    >
      <slide v-for="(slide, i) in slides" :key="i" :index="i">
        <figure>
          <img
            src="https://assets.hongkiat.com/uploads/really-nice-ironman-wallpapers/original/ironman-wp.jpg"
          height="350" width="450" />
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
      slides: 5,
    };
  },
};
</script>

<style>
.carousel-3d-container .current figure {
  margin: 0;
}
</style>
