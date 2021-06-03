<template>
  <div id="app">
    <p id="demo"></p>
    
    <b-jumbotron bg-variant="dark" text-variant="white" border-variant="grey ">
      <div>
        <carousel-3d
          :controls-visible="true"
          :clickable="false"
          :autoplay="true"
          :autoplayTimeout="3500"
          :width="500"
          :height="400"
        >
          <div v-for="(picture, index) in artwork.pictures" :key="picture">
            <slide :index="index">
              <img :src="picture" :width="500" :height="400" />
            </slide>
          </div>
        </carousel-3d>
        <br />
        <div id="socialbtn">
          <a
            href="https://api.addthis.com/oexchange/0.8/forward/facebook/offer?url=
          https%3A%2F%2Fwww.addthis.com%2F&pubid=ra-42fed1e187bae420&title=AddThis%20%7C%20Home&ct=1"
            target="_blank"
            ><img
              src="https://cache.addthiscdn.com/icons/v3/thumbs/32x32/facebook.png"
              border="0"
              alt="Facebook"
          /></a>
          <a
            href="https://api.addthis.com/oexchange/0.8/forward/twitter/offer?url=https%3A%2F%2Fwww.addthis.com%2F&pubid=ra-42fed1e187bae420&title=AddThis%20%7C%20Home&ct=1"
            target="_blank"
            ><img
              src="https://cache.addthiscdn.com/icons/v3/thumbs/32x32/twitter.png"
              border="0"
              alt="Twitter"
          /></a>
          <a
            v-bind:href="
              'https://api.addthis.com/oexchange/0.8/forward/whatsapp/offer?url=' +
              currentUrl
            "
            target="_blank"
            ><img
              src="https://cache.addthiscdn.com/icons/v3/thumbs/32x32/whatsapp.png"
              border="0"
              alt="WhatsApp"
          /></a>
          <a
            href="https://api.addthis.com/oexchange/0.8/forward/gmail/offer?url=https%3A%2F%2Fwww.addthis.com%2F&pubid=ra-42fed1e187bae420&title=AddThis%20%7C%20Home&ct=1"
            target="_blank"
            ><img
              src="https://cache.addthiscdn.com/icons/v3/thumbs/32x32/gmail.png"
              border="0"
              alt="Gmail"
          /></a>
        </div>
      </div>
    </b-jumbotron>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
import artwork from "../mixins/artwork.js";
export default {
  name: "App",
  components: {
    Carousel3d,
    Slide,
  },
  mixins: [artwork],
  created: function () {
    var currentUrl = window.location.pathname;

    console.log(currentUrl);
  },
};
</script>

<style>
.carousel-3d-container .current figure {
  margin: 0;
}

#socialbtn {
  position: relative;
  top: -65px;
  float: right;
  background-color: lightgrey;
  border: none;
}

* {
  box-sizing: border-box;
}

.jumbotron {
  height: 490px;
}
</style>
