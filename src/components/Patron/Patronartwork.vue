<template>
  <div>
    <br />
    <h4 class="display-4" style="padding-right: 75%">Artwork</h4>
    <hr />
    <br />
    <b-container>
      <b-input-group>
        <b-form-input
          v-model="search"
          type="text"
          placeholder="search for artwork by title"
        ></b-form-input>
      </b-input-group>
      <br />
      <b-row cols-md="4">
        <b-col
          v-for="featuredArt in filterFeaturedArtsByTitle"
          :key="featuredArt.id"
        >
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

              <!-- For image description -->
              <b-card-text>
                {{ featuredArt.artworkTitle }}
              </b-card-text>
              <!-- button -->
              <b-button
                block
                v-bind:href="
                  '/ArtworkDetails?featuredArtWorkId=' + featuredArt.Id
                "
                variant="outline-primary"
                >View</b-button
              >
            </div>
            <br />
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  computed: {
    filterFeaturedArtsByTitle() {
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

<style>
</style>