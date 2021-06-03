<template>
  <div>
    <br />
        <h4 class="display-4" style=" padding-right:75%;">Feed</h4>
    <hr />
    <br />
    <b-container>
            
      <b-row cols-md="4">
        <b-col v-for="featured in featureds" :key="featured.id">
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

              <!-- For image description -->
              <b-card-text>
                {{ featured.artworkTitle }}
              </b-card-text>
              <!-- button -->
              <b-button
                block
                v-bind:href="'/Artwork?featureArtworkId=' + featured.Id"
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
  computed: {
    featureds() {
      console.log(this.$store.state.featureds);
      return this.$store.state.featureds;
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