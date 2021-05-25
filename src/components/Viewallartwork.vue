<template>
  <div>
    <b-row v-for="sculpture in sculptures" :key="sculpture.id">
      <b-col>
        <b-card
          :img-src="sculpture.artworkUrl"
          size="5rem"
          class="text-center"
          style="max-width: 25rem"
          img-height="250"
        >
          <div class="mb-1">
            <b-avatar
              :src="sculpture.authorProfilePicUrl"
              size="4rem"
              class="text-center"
              style="max-width: 25rem"
            ></b-avatar>

            <b-text>
              <b>
                <h3>{{ sculpture.authorName }}</h3></b
              >
            </b-text>

            <hr style="padding: 0" />

            <b-card-text>
              <b>{{ sculpture.email }}</b>
            </b-card-text>

            <b-card-text>
              {{ sculpture.artworkTitle }}
            </b-card-text>

            <b-button
              block
              v-bind:href="'/Artwork?sculptureArtworkId=' + sculpture.Id"
              variant="outline-primary"
              >View</b-button
            >
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pictureIdFromUrl: "",
      artworkTypeFromUrl: "",
    };
  },

  methods: {
    url: function () {
      var str = window.location.search;
      var val = str.split("?").pop();
      this.pictureIdFromUrl = str.split("=").pop();
      this.artworkTypeFromUrl = val.substring(0, val.indexOf("="));
    },
  },
  mounted() {
    this.url();
  },
  computed: {
    artwork() {
      var jsonResult;
      if (this.artworkTypeFromUrl == "featureArtworkId") {
        this.$store.dispatch("fetchFeatureds");
        jsonResult = this.$store.state.featureds.find(
          (obj) => obj.Id == this.pictureIdFromUrl
        );
      } else if (this.artworkTypeFromUrl == "highestPaidId") {
        this.$store.dispatch("fetchHighestPaids");
        jsonResult = this.$store.state.highestpaids.find(
          (obj) => obj.Id == this.pictureIdFromUrl
        );
      } else if (this.artworkTypeFromUrl == "topArtistsId") {
        this.$store.dispatch("fetchTopArtists");
        jsonResult = this.$store.state.topartists.find(
          (obj) => obj.Id == this.pictureIdFromUrl
        );
      } else if (this.artworkTypeFromUrl == "digitalArtworkId") {
        this.$store.dispatch("fetchDigitals");
        jsonResult = this.$store.state.digitals.find(
          (obj) => obj.Id == this.pictureIdFromUrl
        );
      } else if (this.artworkTypeFromUrl == "craftArtworkId") {
        this.$store.dispatch("fetchCrafts");
        jsonResult = this.$store.state.crafts.find(
          (obj) => obj.Id == this.pictureIdFromUrl
        );
      } else if (this.artworkTypeFromUrl == "photographyArtworkId") {
        this.$store.dispatch("fetchPhotographys");
        jsonResult = this.$store.state.photographys.find(
          (obj) => obj.Id == this.pictureIdFromUrl
        );
      } else if (this.artworkTypeFromUrl == "sculptureArtworkId") {
        this.$store.dispatch("fetchSculptures");
        jsonResult = this.$store.state.sculptures.find(
          (obj) => obj.Id == this.pictureIdFromUrl
        );
      } else if (this.artworkTypeFromUrl == "drawingArtworkId") {
        this.$store.dispatch("fetchDrawings");
        jsonResult = this.$store.state.drawings.find(
          (obj) => obj.Id == this.pictureIdFromUrl
        );
      }
      return jsonResult;
    },
  },
};
</script>

<style>
</style>