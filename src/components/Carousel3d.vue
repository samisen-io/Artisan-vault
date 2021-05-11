<template>
  <div id="app">
    <b-jumbotron bg-variant="grey" text-variant="white" border-variant="grey ">
      <carousel-3d
        :controls-visible="true"
        :clickable="false"
        :autoplay="true"
        :autoplayTimeout="3500"
        :width="500"
        :height="450"
      >
        <slide :index="0">
          <img
            src="https://cdn.pixabay.com/index/2021/04/30/09-58-39-26_1440x480.jpg"
            :width="500"
            :height="450"
          />
        </slide>
        <slide :index="1">
          <img
            src="https://www.10wallpaper.com/wallpaper/1366x768/1107/Window_pastoral-the_worlds_high-definition_nature_photography_1366x768.jpg"
            :width="500"
            :height="450"
          />
        </slide>
        <slide :index="2">
          <img
            src="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"
            :width="500"
            :height="450"
          />
        </slide>
        <slide :index="3">
          <img
            src="https://i.pinimg.com/originals/1c/aa/c5/1caac55143e3e11461c6ae5962403deb.jpg"
            :width="500"
            :height="450"
          />
        </slide>
        <slide :index="4">
          <img
            src="https://cdn.pixabay.com/photo/2018/11/10/22/57/nature-3807667_960_720.jpg"
            :width="500"
            :height="450"
          />
        </slide>
      </carousel-3d>
      <!-- ADD SHARE BUTTONS-->
      <br />
      <div id="socialbtn">
        <a
          href="https://api.addthis.com/oexchange/0.8/forward/facebook/offer?url=https%3A%2F%2Fwww.addthis.com%2F&pubid=ra-42fed1e187bae420&title=AddThis%20%7C%20Home&ct=1"
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
          href="https://api.addthis.com/oexchange/0.8/forward/whatsapp/offer?url=https%3A%2F%2Fwww.addthis.com%2F&pubid=ra-42fed1e187bae420&title=AddThis%20%7C%20Home&ct=1"
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
    </b-jumbotron>
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
  height: 535px;
}
</style>
