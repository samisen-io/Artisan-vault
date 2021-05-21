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
              src="https://cdn.kinsights.com/cache/ba/0b/ba0b91b435ddd6f3d829524869cfb943.png"
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
                  <b-avatar
                    size="6rem"
                    src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mh-chris-hemsworth-attends-the-tag-heuer-museum-in-motion-news-photo-968210608-1554829603.jpg"
                  >
                  </b-avatar>
                </b-col>
                <b-col sm="8">
                  <br />
                  <a
                    href="https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man"
                  >
                    <h3>@venkat</h3></a
                  >
                </b-col>
              </b-row>
              <b-row style="margin: 30px">
                <h3 class="font-weight-bold">venkat</h3>
              </b-row>
              <b-row style="margin: 30px">
                <h3 class="font-weight-bold">Iron_Man</h3>
              </b-row>
              <b-row style="margin: 30px">
                <h3 class="font-weight-bold">venkat@gmail.com</h3>
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
      <b-container>
        <b-row cols-md="4">
          <b-col v-for="topartist in topartists" :key="topartist.id">
            <b-card
              :img-src="topartist.authorProfilePicUrl"
              size="5rem"
              class="text-center"
              style="max-width: 30rem"
              img-height="250"
            >
              <div class="mb-1">
                <b-card-text>
                  <b>
                    <h3>{{ topartist.artistName }}</h3></b
                  >
                </b-card-text>
                <a class="link" href="https://www.google.com" target="_blank"
                  ><h5>@{{ topartist.artistName }}</h5></a
                >
                <b-button block href="/Artistdetails" variant="outline-primary"
                  >View</b-button
                >
              </div>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </b-card>
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
  computed: {
    topartists() {
      return this.$store.state.topartists;
    },
  },
  created() {
    this.loading = true;
    this.$store.dispatch("fetchTopArtists");
  },
};
</script>

