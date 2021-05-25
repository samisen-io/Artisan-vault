<template>
  <div>
    <br />
    <h4 class="display-4" style=" padding-right:75%;">Artist</h4>
    <hr />
    <br />
    <b-container>
      <b-row cols-md="4">
        <b-col v-for="topArtist in topArtists" :key="topArtist.id">
          <b-card
            :img-src="topArtist.artistProfilePicUrl"
            size="5rem"
            class="text-center"
            style="max-width: 30rem"
            img-height="250"
          >
            <div class="mb-1">
              <b-card-text>
                <b>
                  <h3>{{ topArtist.artistName }}</h3></b
                >
              </b-card-text>

              <a
                class="link"
                v-bind:href="topArtist.facebookPageUrl"
                target="_blank"
                ><h5>@{{ topArtist.artistName }}</h5></a
              >
              <b-button
                block
                v-bind:href="'/Artist?TopArtistId=' + topArtist.Id"
                variant="outline-primary"
                >View</b-button
              >
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  computed: {
    topArtists() {
      return this.$store.state.topArtists;
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