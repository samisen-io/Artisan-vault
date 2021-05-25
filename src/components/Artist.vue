<template>
  <div>
    <navbar />
    <br />
    <br />
    <b-card no-body class="overflow-hidden" border-variant="0">
      <b-container>
        <b-row style="margin: 50px">
          <b-col md="6">
            <b-card-img
              :src="artist.artistProfilePicUrl"
              alt="Image"
              class="rounded-0"
              img-alt="image"
              style="max-width: 30rem"
              height="380"
            ></b-card-img>
          </b-col>
          <b-col md="5">
            <b-card-body>
              <br />
              <b-row>
                <b-col>
                  <b-avatar size="6rem" :src="artist.artistProfilePicUrl">
                  </b-avatar>
                </b-col>
                <b-col sm="8">
                  <br />
                  <a v-bind:href="artist.facebookPageUrl" target="_blank">
                    <h3>@{{ artist.artistName }}</h3></a
                  >
                </b-col>
              </b-row>
              <b-row style="margin: 30px">
                <h3 class="font-weight-bold">{{ artist.artistName }}</h3>
              </b-row>
              <b-row style="margin: 30px">
                <h3 class="font-weight-bold">{{ artist.slogan }}</h3>
              </b-row>
              <b-row style="margin: 30px">
                <h3 class="font-weight-bold">{{ artist.email }}</h3>
              </b-row>
            </b-card-body>
          </b-col>
        </b-row>
      </b-container>
      <div class="section-title">
        <b-row style="margin: 3px">
          <b-col col md="10">
            <h3>Related <span>Artwork</span></h3>
          </b-col>
          <br />
        </b-row>
      </div>
    </b-card>
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
            <br />
          </b-card>
          <br />
          <br />
        </b-col>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import Navbar from "./Navbar.vue";
import artist from "../mixins/artist.js";
export default {
  components: {
    Navbar,
    Footer,
  },

  mixins: [artist],
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

