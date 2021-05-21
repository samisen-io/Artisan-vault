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
            <h3>Top <span>Artists</span></h3>
          </b-col>
          <b-col col md="4">
            <b-input-group>
              <b-form-input
                type="text"
                placeholder="search for artists by name"
              ></b-form-input>
              <b-input-group-append>
                <b-button variant="outline-secondary">search</b-button>
              </b-input-group-append>
            </b-input-group>
          </b-col>

          <br />
        </b-row>
      </div>
    </b-container>
    <b-container>
      <b-row cols-md="5">
        <b-col v-for="topartist in topartists" :key="topartist.id">
          <b-card
            :img-src="topartist.Authorprofilepic"
            size="5rem"
            class="text-center"
            style="max-width: 25rem"
            img-height="200"
          >
            <div class="mb-1">
              <b-card-text>
                <b>
                  <h3>{{ topartist.Authorname }}</h3></b
                >
              </b-card-text>
              <a class="link" href="https://www.google.com" target="_blank"
                ><h5>@{{ topartist.Authorname }}</h5></a
              >
              <b-button block href="/Artistdeatils" variant="outline-primary">View</b-button>
            </div>
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
export default {
  components: { Navbar, Footer },
  data() {
    return {
     
    };
  },
  computed: {
    topartists() {
      return this.$store.state.topartists;
    },
    // search() {
    //   return this.$store.state.topartists.filter((topartist) => {
    //     return topartist.Authorname.toLowerCase().includes(
    //       this.search.toLowerCase()
    //     );
    //   });
    // },
  },
  created() {
    this.loading = true;
    this.$store.dispatch("fetchTopArtists");
  },
};
</script>

<style>
</style>