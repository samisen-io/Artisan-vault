<template>
  <div>
    <b-container>
      <div>
        <b-card no-body class="overflow-hidden" border-variant="0">
          <b-row>
            <b-col md="7">
              <b-card-img
                :src="craft.artworkUrl"
                alt="Image"
                class="rounded-0"
                img-alt="image"
                style="max-width: 35rem"
                height="450"
              ></b-card-img>
            </b-col>
            <b-col md="5">
              <b-card-body>
                <br />
                <b-row>
                  <b-col col md="4">
                    <b-avatar size="5rem" :src="craft.artistProfilePicUrl">
                    </b-avatar>
                  </b-col>
                  <b-col col md="6">
                    <br />
                    <a
                      :href="craft.facebookPageUrl" target="_blank"
                    >
                      <h3>@{{ craft.artistName }}</h3></a
                    >
                  </b-col>
                </b-row>
                <br />
                <b-card-text>
                  <br />
                  <h1>
                    <p class="font-weight-bold">{{ craft.artistName }}</p>
                  </h1>
                </b-card-text>
                <b-card-text>
                  <br />
                  <h4>PhotoPrice</h4>
                  <h3>{{ craft.price }} Rs</h3>
                </b-card-text>
                <b-card-text>
                  <br />

                  <b-row>
                    <b-col>
                      <b-card-text>
                        <b-button variant="outline-dark">Place a bid</b-button>
                      </b-card-text>
                    </b-col>
                    <b-col col md="8">
                      <b-card-text>
                        <b-button
                          v-bind:href="
                            '/ArtworkDetails?craftArtworkId=' + craft.Id
                          "
                          variant="outline-dark"
                          >View artwork</b-button
                        >
                      </b-card-text>
                    </b-col>
                  </b-row>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  computed: {
    craft() {
      var artworkObj;
      artworkObj = this.$store.state.highlightedCards.find((obj) =>
        obj.type.toLowerCase().includes("craft")
      );
      return artworkObj;
    },
  },

  created() {
    this.loading = true;
    this.$store.dispatch("fetchhighlightedCards");
  },
};
</script>

<style>
.card {
  border: none;
}
</style>
