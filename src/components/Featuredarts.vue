<template>
  <div>
    <b-container>
      <div class="section-title">
        <b-row>
          <b-col col md="11">
            <h3>Featured <span>Artwork</span></h3>
          </b-col>
          <b-col col md="1">
            <a href="/FeaturedArtworksList?viewall" style="align: right"
              >View all</a
            >
          </b-col>
          <br />
        </b-row>
      </div>
      <b-container>
        <b-row>
          <b-col md="12" class="my-1"> </b-col>
        </b-row>
        <center>
          <VueSlickCarousel v-bind="settings">
            <b-row
              v-for="featuredArt in getAllFeaturedArts"
              :key="featuredArt.id"
            >
              <b-col>
                <b-card
                  :img-src="featuredArt.artworkUrl"
                  size="5rem"
                  class="text-center"
                  style="max-width: 25rem"
                  img-height="200"
                >
                  <div class="mb-1">
                    <b-avatar
                      :src="featuredArt.artistProfilePicUrl"
                      size="4rem"
                      class="text-center"
                      style="max-width: 25rem"
                    ></b-avatar>

                    <b-card-text>
                      <b>
                        <h3>{{ featuredArt.artistName }}</h3></b
                      >
                    </b-card-text>
                    <hr style="padding: 0" />
                    <b-card-text>
                      {{ featuredArt.artworkTitle }}
                    </b-card-text>
                    <b-button
                      block
                      v-bind:href="
                        '/ArtworkDetails?featuredArtWorkId=' + featuredArt.Id
                      "
                     variant="dark"
                      >View</b-button
                    >
                  </div>
                  <br />
                </b-card>
              </b-col>
            </b-row>
          </VueSlickCarousel>
        </center>
      </b-container>
      <br />
    </b-container>
  </div>
</template>

<script>
import VueSlickCarousel from "../mixins/VueSlickCarousel.js";
export default {
  name: "Featured arts",
  mixins: [VueSlickCarousel],
  computed: {
    getAllFeaturedArts() {
      this.$store.state.featureds;
      return this.$store.state.featureds;
    },
  },
  created() {
    this.loading = true;
    this.$store.dispatch("fetchFeatureds");
  },
};
</script>
