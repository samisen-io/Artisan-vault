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
                v-model="search"
                type="text"
                placeholder="search for artists by name"
              ></b-form-input>
            </b-input-group>
          </b-col>

          <br />
        </b-row>
      </div>
    </b-container>
    <b-container>
      <b-row cols-md="4">
        <b-col v-for="topartist in filter" :key="topartist.id">
          <b-card
            :img-src="topartist.artistProfilePicUrl"
            size="5rem"
            class="text-center"
            style="max-width: 25rem"
            img-height="200"
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
               <b-button
                      block
                      v-bind:href="'/Artistdetails?ArtistId=' + topartist.Id"
                      variant="outline-primary"
                      >View</b-button>
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
      search: "",
    };
  },
  computed: {
    topArtists() {
      return this.$store.state.topArtists;
    },
    filter() {
      return this.$store.state.topArtists.filter((topartist) => {
        return topartist.artistName
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },
  },
  created() {
    this.loading = true;
    this.$store.dispatch("fetchtopArtists");
  },
};
</script>

<style>
</style>