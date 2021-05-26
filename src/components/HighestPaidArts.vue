<template>
  <div>
  
    <b-container>
      <div class="section-title">
        <b-row>
          <b-col col md="11">
            <h3>Top paid <span>Artwork</span></h3>
          </b-col>
          <b-col col md="1">
            <a href="/HighestPaidArtworksList?viewall" style="align: right"
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
            <b-row v-for="highestPaidArt in highestPaidArts" :key="highestPaidArt.id">
              <b-col>
                <b-card
                  :img-src="highestPaidArt.artworkUrl"
                  size="5rem"
                  class="text-center"
                  style="max-width: 25rem"
                  img-height="200"
                >
                 
                  <div class="mb-1">
                    <b-avatar
                      :src="highestPaidArt.artistProfilePicUrl"
                      size="4rem"
                      class="text-center"
                      style="max-width: 25rem"
                    ></b-avatar>

                    <b-card-text>
                      <b>
                        <h3>{{ highestPaidArt.artistName }}</h3></b
                      >
                    </b-card-text>
                    <hr style="padding: 0" />
                   
                    <b-card-text>
                      {{ highestPaidArt.artworkTitle }}
                    </b-card-text>
                   
                    <b-button
                      block
                      v-bind:href="'/ArtworkDetails?highestPaidArtWorkId=' + highestPaidArt.Id"
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
    </b-container>
  </div>
</template>

<script>
import VueSlickCarousel from "../mixins/VueSlickCarousel.js";
export default {
  name: "Highestpaid arts",
  mixins: [VueSlickCarousel],

  computed: {
    highestPaidArts() {
      return this.$store.state.highestPaids;
    },
  },
  created() {
    this.loading = true;
    this.$store.dispatch("fetchhighestPaids");
  },
};
</script>

