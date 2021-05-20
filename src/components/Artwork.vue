<template>
  <div>
    <br />
    <br />
    <navbar />
    <br />
     <Carousel3d />
    <br />
    <b-container>
      <div v-for="featured in featureds" :key="featured.id">
        <h4 class="display-4">{{ featured.Authorname }}</h4>
        <h4>{{ featureds.Id }}</h4>
        <br />
        <h6 class="display-6">Art informatation</h6>
        <b-row no-gutters>
          <b-col md="8">
            <b-card-text>
              <br />
              Description
            </b-card-text>
            <b-row>
              <b-col col sm="10">
                <b-card-text>
                  {{ featured.Authortdescription }}
                  <br />
                </b-card-text>
              </b-col>
            </b-row>
            <br />
          </b-col>

          <b-col md="4">
            <b-card-text>
              <b-row>
                <b-col col md="3">
                  <b-avatar
                    size="4rem"
                    :src="featured.Authorprofilepic"
                  >
                  </b-avatar>
                </b-col>
                <b-col col md="8">
                  <br />
                  <a
                    href="https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man"
                  >
                    <h3>@{{ featured.Authorname }}</h3></a
                  >
                </b-col>
              </b-row>
              <b-card-text>
                <br />
                <h1>
                  <p class="font-weight-bold">{{ featured.Authorname }}</p>
                </h1>
              </b-card-text>
              <b-card-text>
                <br />
                <h4>PhotoPrice</h4>
                <h3>{{ featured.photoprice }}</h3>
              </b-card-text>
              <b-card-text>
                <br />

                <b-row>
                  <b-col col md="8">
                    <b-card-text>
                      <b-button block href="/Artwork" variant="outline-dark"
                        >Add to Cart</b-button
                      >
                      <b-button block href="/Artwork" variant="outline-dark"
                        >Place a bid</b-button
                      >
                    </b-card-text>
                  </b-col>
                </b-row>
              </b-card-text>
              <br />
            </b-card-text>
          </b-col>
        </b-row>

        <br />
        <b-list-group>
          <center>
          <h4 class="font-weight-bold">Creator</h4>
          </center>
          <b-list-group-item>
            <br />
            <b-row>
              <b-col col md="2">
                <b-avatar
                  button
                  :src="featured.Authorprofilepic"
                  size="10rem"
                ></b-avatar>
              </b-col>
              <b-col md="5">
                <br />
                <br />

                <h4>
                  <b><p>{{ featured.Authorname }}</p></b>
                  <b
                    ><a
                      href="https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man"
                      target="_blank"
                      >@{{ featured.Authorname }}</a
                    ></b
                  >
                </h4>
              </b-col>
              <b-col md="4">
                <br />
                <h4 class="display-4">{{ featured.solgan }}</h4>
              </b-col>
            </b-row>
          </b-list-group-item>
          <br />
        </b-list-group>
      </div>
    </b-container>

    <Footer />
  </div>
</template>

<script>
import Carousel3d from "./Carousel3d.vue";
import Footer from "./Footer.vue";
import Navbar from "./Navbar.vue";
export default {
  components: {
    Carousel3d,
    Navbar,
    Footer,
  },
  data(){
    return{
     ID:'',
     res:'' 
    }
  },
 
  methods: {
    url: function () {
      var str = window.location.search;
      var val = str.split("?").pop();
      this.ID = str.split("=").pop();
      this.res = val.substring(0, val.indexOf("="));
    },
  },
  mounted() {
    this.url();
  },
  computed: {
    featureds() {
      var jsonResult;
      if (this.res == "featureartworkid") {
        this.$store.dispatch("fetchFeatureds");
        jsonResult = this.$store.state.featureds.filter(
          (obj) => obj.Id == this.ID
        );
          console.log(jsonResult)
          alert(jsonResult.length);
      } else if (this.res == "highestpaidId") {
        this.$store.dispatch("fetchHighestpaids");
        jsonResult = this.$store.state.highestpaids.filter(
          (obj) => obj.Id == this.ID
        );
      } else if (this.res == "topartistsid") {
        this.$store.dispatch("fetchTopartists");
        jsonResult = this.$store.state.topartists.filter(
          (obj) => obj.Id == this.ID
        );
      } else if (this.res == "digitalartworkid") {
        this.$store.dispatch("fetchDigitals");
        jsonResult = this.$store.state.digitals.filter(
          (obj) => obj.Id == this.ID
        );
      } else if (this.res == "craftartworkid") {
        this.$store.dispatch("fetchCrafts");
        jsonResult = this.$store.state.crafts.filter(
          (obj) => obj.Id == this.ID
        );
      } else if (this.res == "photographyartworkid") {
        this.$store.dispatch("fetchPhotographys");
        jsonResult = this.$store.state.photographys.filter(
          (obj) => obj.Id == this.ID
        );
      } else if (this.res == "sculptureartworkid") {
        this.$store.dispatch("fetchSculptures");
        jsonResult = this.$store.state.sculptures.filter(
          (obj) => obj.Id == this.ID
        );
      } else if (this.res == "drawingartworkid") {
        this.$store.dispatch("fetchDrawings");
        jsonResult = this.$store.state.drawings.filter(
          (obj) => obj.Id == this.ID
        );
      }
      return jsonResult;
    },
  },
};
</script>
<style>
</style>