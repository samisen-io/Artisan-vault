<template>
  <div class="hello">
    <center>
    <VueSlickCarousel v-bind="settings">
      <div><h3>1</h3></div>
      <div><h3>2</h3></div>
      <div><h3>3</h3></div>
      <div><h3>4</h3></div>
      <div><h3>5</h3></div>
      <div><h3>6</h3></div>
    </VueSlickCarousel>
    </center>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
 
  components: {
    VueSlickCarousel
  },
  data() {
    return {
   settings:  {
  "dots": true,
  "infinite": false,
  "speed": 500,
  "slidesToShow": 2,
  "slidesToScroll": 1,
  "initialSlide": 0,
  "responsive": [
    {
      "breakpoint": 1024,
      "settings": {
        "slidesToShow": 3,
        "slidesToScroll": 3,
        "infinite": true,
        "dots": true
      }
    },
    {
      "breakpoint": 600,
      "settings": {
        "slidesToShow": 2,
        "slidesToScroll": 2,
        "initialSlide": 2
      }
    },
    {
      "breakpoint": 480,
      "settings": {
        "slidesToShow": 1,
        "slidesToScroll": 1
      }
    }
  ]
}
    }
  },
}
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
    width: 95%;
    margin: 0 auto;
}

.slick-prev {
    left: 0;
}

.slick-next {
    right: 0;
}
</style>