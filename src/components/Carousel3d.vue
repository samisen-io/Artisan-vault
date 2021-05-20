<template>
  <div id="app">
    <b-jumbotron bg-variant="grey" text-variant="white" border-variant="grey ">
      <div>
        <carousel-3d
          :controls-visible="true"
          :clickable="false"
          :autoplay="true"
          :autoplayTimeout="3500"
          :width="500"
          :height="350"
        >
          <div v-for="(picture, index) in artwork.pictures" :key="picture">
            <slide :index="index">
              <img :src="picture" :width="500" :height="370" />
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
              currenturl
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

export default {
  name: "App",
  components: {
    Carousel3d,
    Slide,
  },
  data() {
    return {
      ID: "",
      res: "",
    };
  },
  methods: {
    url: function () {
      var str = window.location.search;
      var val = str.split("?").pop();
      this.ID = str.split("=").pop();
      this.res = val.substring(0, val.indexOf("="));
    },
  },
  mounted() {
    this.url();
  },
  computed: {
    artwork() {
      var jsonResult;
      if (this.res == "featureartworkid") {
        this.$store.dispatch("fetchFeatureds");
        jsonResult = this.$store.state.featureds.find(
          (obj) => obj.Id == this.ID
        );
      } else if (this.res == "highestpaidId") {
        this.$store.dispatch("fetchHighestpaids");
        jsonResult = this.$store.state.highestpaids.filter(
          (obj) => obj.Id == this.ID
        );
      } else if (this.res == "topartistsid") {
        this.$store.dispatch("fetchTopartists");
        jsonResult = this.$store.state.topartists.filter(
          (obj) => obj.Id == this.ID
        );
      } else if (this.res == "digitalartworkid") {
        this.$store.dispatch("fetchDigitals");
        jsonResult = this.$store.state.digitals.filter(
          (obj) => obj.Id == this.ID
        );
      } else if (this.res == "craftartworkid") {
        this.$store.dispatch("fetchCrafts");
        jsonResult = this.$store.state.crafts.filter(
          (obj) => obj.Id == this.ID
        );
      } else if (this.res == "photographyartworkid") {
        this.$store.dispatch("fetchPhotographys");
        jsonResult = this.$store.state.photographys.filter(
          (obj) => obj.Id == this.ID
        );
      } else if (this.res == "sculptureartworkid") {
        this.$store.dispatch("fetchSculptures");
        jsonResult = this.$store.state.sculptures.filter(
          (obj) => obj.Id == this.ID
        );
      } else if (this.res == "drawingartworkid") {
        this.$store.dispatch("fetchDrawings");
        jsonResult = this.$store.state.drawings.find(
          (obj) => obj.Id == this.ID
        );
      }
      return jsonResult;
    },
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
  height: 440px;
}
</style>
