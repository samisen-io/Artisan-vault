<template>
  <div>
    <navbar />
    <br />
    <br />
    <br />
    <br />
    <br />
    <b-container>
      <div class="section-title">
        <b-row>
          <b-col col md="8">
            <h3>Featured <span>Artworks</span></h3>
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
        <b-row cols-md="4">
          <b-col v-for="featured in filter" :key="featured.id">
            <b-card
              :img-src="featured.artworkUrl"
              size="5rem"
              class="text-center"
              style="max-width: 25rem"
              img-height="200"
            >
              <div class="mb-1">
                <b-avatar
                  :src="featured.artistProfilePicUrl"
                  size="4rem"
                  class="text-center"
                  style="max-width: 25rem"
                ></b-avatar>

                <b-card-text>
                  <b>
                    <h3>{{ featured.artistName }}</h3></b
                  >
                </b-card-text>
                <hr style="padding: 0" />

               
                <b-card-text>
                  {{ featured.artworkTitle }}
                </b-card-text>
              
                <b-button
                  block
                  v-bind:href="'/Artwork?featureArtworkId=' + featured.Id"
                  variant="outline-primary"
                  >View</b-button
                >
              </div>
            </b-card>
            <br />
          </b-col>
        </b-row>
      </b-container>
    </b-container>
    <br />
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import Navbar from "./Navbar.vue";
export default {
  components: { Navbar, Footer },
  name: "view all featured artwork",
  data() {
    return {
      search: "",
    };
  },
  computed: {
    featureds() {
      console.log(this.$store.state.featureds);
      return this.$store.state.featureds;
    },
    filter() {
      return this.$store.state.featureds.filter((featured) => {
        return featured.artworkTitle
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },
  },
  created() {
    this.loading = true;
    this.$store.dispatch("fetchFeatureds");
  },
};
</script>
