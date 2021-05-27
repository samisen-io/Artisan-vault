<template>
  <div>
    <section class="carousal-section">
      <b-container>
        <b-container>
          <div class="section-title">
            <b-row>
              <b-col col md="11">
                <h3>Top <span>Artists</span></h3>
              </b-col>
              <b-col col md="1">
                <a v-bind:href="'/TopArtistsList?Viewall'" style="align: right"
                  >View all</a
                >
              </b-col>
              <br />
            </b-row>
          </div>
        </b-container>
        <center>
          <VueSlickCarousel v-bind="settings">
            <b-row v-for="topArtist in getAlltopArtists" :key="topArtist.id">
              <b-col>
                <b-card
                  :img-src="topArtist.artistProfilePicUrl"
                  size="5rem"
                  class="text-center"
                  style="max-width: 30rem"
                  img-height="250"
                >
                  <div class="mb-1">
                    <b-card-text>
                      <b>
                        <h3>{{ topArtist.artistName }}</h3></b
                      >
                    </b-card-text>

                    <a
                      class="link"
                      v-bind:href="topArtist.facebookPageUrl"
                      target="_blank"
                      ><h5>@{{ topArtist.artistName }}</h5></a
                    >
                    <b-button
                      block
                      v-bind:href="
                        '/TopArtistDetail?TopArtistId=' + topArtist.Id
                      "
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
    </section>
  </div>
</template>
<script>
import VueSlickCarousel from "../mixins/VueSlickCarousel";
export default {
  name: "Featured arts",
  mixins: [VueSlickCarousel],

  computed: {
   getAlltopArtists() {
      return this.$store.state.topArtists;
    },
  },
  created() {
    this.loading = true;
    this.$store.dispatch("fetchtopArtists");
  },
};
</script>
<style scoped>
a:link {
  color: black;
  background-color: transparent;
  text-decoration: none;
  font-size: 18px;
}
a:visited {
  color: black;
  background-color: transparent;
  text-decoration: none;
}
a:hover {
  color: black;
  background-color: transparent;
  text-decoration: none;
  font-size: 15px;
}
a:active {
  color: black;
  background-color: transparent;
  text-decoration: none;
}
</style>