<template>
  <div>
    <navbar />
    <br />
    <br />
    <br />
    <br />
    <b-container>
      <div class="section-title">
        <b-row>
          <b-col col md="8">
            <h3>Top paid <span>Artworks</span></h3>
          </b-col>
          <b-col col md="4">
            <b-input-group>
              <b-form-input
                v-model="search"
                type="text"
                placeholder="search for artwork by name"
              ></b-form-input>
            </b-input-group>
          </b-col>

          <br />
        </b-row>
      </div>
      <b-container>
        <center>
          <b-row cols-md="4">
            <b-col
              v-for="highestPaidArt in filterhighestPaidArtsByTitle"
              :key="highestPaidArt.id"
            >
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
                    v-bind:href="
                      '/ArtworkDetails?highestPaidArtWorkId=' +
                      highestPaidArt.Id
                    "
                    variant="outline-primary"
                    >View</b-button
                  >
                </div>
              </b-card>
            </b-col>
          </b-row>
        </center>
      </b-container>
      <br />
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import Navbar from "./Navbar.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      search: "",
    };
  },

  computed: {
    highestPaidArts() {
      return this.$store.state.highestPaids;
    },
    filterhighestPaidArtsByTitle() {
      return this.$store.state.highestPaids.filter((highestPaid) => {
        return highestPaid.artworkTitle
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },
  },
  created() {
    this.loading = true;
    this.$store.dispatch("fetchhighestPaids");
  },
};
</script>

