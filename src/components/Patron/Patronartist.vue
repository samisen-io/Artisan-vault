<template>
  <div>
    <br />
    <h4 class="display-4" style="padding-right: 75%">Artist</h4>
    <hr />
    <br />
    <b-container>
      <b-input-group>
        <b-form-input
          v-model="search"
          type="text"
          placeholder="search for artists by name"
        ></b-form-input>
      </b-input-group>
      <br />
    </b-container>
    <b-container>
      <b-row cols-md="4">
        <b-col v-for="topArtist in filterArtistByName" :key="topArtist.id">
          <b-card
            :img-src="topArtist.artistProfilePicUrl"
            size="5rem"
            class="text-center"
            style="max-width: 25rem"
            img-height="200"
          >
            <div class="mb-1">
              <b-card-text>
                <b>
                  <h3>{{ topArtist.artistName }}</h3></b
                >
              </b-card-text>
              <a v-bind:href="topArtist.facebookPageUrl" target="_blank"
                ><h5>@{{ topArtist.artistName }}</h5>
              </a>

              <b-button
                block
                v-bind:href="'/TopArtistDetail?TopArtistId=' + topArtist.Id"
                variant="outline-primary"
                >View</b-button
              >
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
export default {
  data() {
    return {
      search: "",
    };
  },
  computed: {
    filterArtistByName() {
      return this.$store.state.topArtists.filter((topArtist) => {
        return topArtist.artistName
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