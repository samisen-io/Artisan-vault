<template>
  <div>
    <br />
    <br />
    <navbar />
    <br />
    <Carousel3d />
    <br />
    <b-container>
      <h4 class="display-4">{{ artwork.artistName }}</h4>
      <br />
      <h6 class="display-6">Art informatation</h6>
      <b-row no-gutters>
        <b-col md="8">
          <b-card-text>
            <br />
            Description
          </b-card-text>
          <b-row>
            <b-col col sm="10">
              <b-card-text>
                {{ artwork.artworkdDescription }}
                <br />
              </b-card-text>
            </b-col>
          </b-row>
          <br />
        </b-col>

        <b-col md="4">
          <b-card-text>
            <b-row>
              <b-col col md="4">
                <b-avatar size="5rem" :src="artwork.artistProfilePicUrl">
                </b-avatar>
              </b-col>
              <b-col col md="7">
                <br />
                <h1>
                  <p class="font-weight-bold">{{ artwork.artistName }}</p>
                </h1>
              </b-col>
            </b-row>

            <b-card-text>
              <br />
              <h4>PhotoPrice</h4>
              <h3>{{ artwork.price }}</h3>
            </b-card-text>
            <b-card-text>
              <br />

              <b-row>
                <b-col col md="8">
                  <b-button block href="/Artwork" class="btn btn-dark"
                    >Place a bid</b-button
                  >
                </b-col>
              </b-row>
            </b-card-text>
            <br />
          </b-card-text>
        </b-col>
      </b-row>
      <br />
      <b-list-group>
        <center>
          <h4 class="font-weight-bold">Creator</h4>
        </center>
        <b-list-group-item>
          <br />
          <b-row>
            <b-col col md="2">
              <b-avatar
                button
                :src="artwork.artistProfilePicUrl"
                size="10rem"
              ></b-avatar>
            </b-col>
            <b-col md="4">
              <br />
              <br />

              <h4>
                <b
                  ><p>{{ artwork.artistName }}</p></b
                >
                <a v-bind:href="artwork.facebookPageUrl" target="_blank"
                  >@{{ artwork.artistName }}
                </a>
              </h4>
            </b-col>
            <b-col md="6">
              <br />
              <h4 class="display-4">{{ artwork.slogan }}</h4>
            </b-col>
          </b-row>
        </b-list-group-item>
        <br />
      </b-list-group>
    </b-container>

    <Footer />
  </div>
</template>

<script>
import Carousel3d from "./Carousel3d.vue";
import Footer from "./Footer.vue";
import Navbar from "./Navbar.vue";
import artwork from "../mixins/artwork.js";
export default {
  components: {
    Carousel3d,
    Navbar,
    Footer,
  },
  mixins: [artwork],
};
</script>
<style>
</style>