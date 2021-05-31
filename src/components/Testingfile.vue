<template>
  <div>
    <navbar />

    <!-- Featured Arts Section Begin -->
    <br />

    <section class="carousal-section">
      <b-container>
        <b-row>
          <b-col class="my-1">
            <div class="section-title">
              <h3>Featured <span>Artwork</span></h3>
            </div>
            <h6 style="text-align: center">View All</h6>
            <br />
          </b-col>
        </b-row>

        <div class="owl-carousel owl-theme">
          <b-row v-for="user in featuredart" :key="user.Id">
            <b-col>
              <b-card :img-src="user.Artimg" size="5rem" class="text-center">
                <!-- For Creator photo and name -->
                <div class="mb-1">
                  <b-avatar
                    :src="user.Creator"
                    size="4rem"
                    class="text-center"
                    style="max-width: 25rem"
                  ></b-avatar>

                  <b-text>
                    <b>
                      <h3>{{ user.Artistname }}</h3></b
                    >
                  </b-text>

                  <hr style="padding: 0" />
                  <!-- For email -->
                  <b-card-text>
                    <b>{{ user.email }}</b>
                  </b-card-text>
                  <!-- For image description -->
                  <b-card-text>
                    {{ user.Artdescription }}
                  </b-card-text>
                  <!-- button -->
                  <b-button block href="/Details" variant="outline-primary"
                    >View</b-button
                  >
                </div>
              </b-card>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </section>

    <section class="carousal-section">
      <b-container>
        <b-row>
          <b-col class="my-1">
            <div class="section-title">
              <h3>Featured <span>Artwork</span></h3>
            </div>
            <h6 style="text-align: center">View All</h6>
            <br />
          </b-col>
        </b-row>
        <div class="owl-carousel owl-theme">
          <b-row v-for="craft in crafts" :key="craft.id">
            <b-col>
              <b-card
                :img-src="craft.artworkUrl"
                size="5rem"
                class="text-center"
              >
                <div class="mb-1">
                  <b-avatar
                    :src="craft.artistProfilePicUrl"
                    size="4rem"
                    class="text-center"
                    style="max-width: 25rem"
                  ></b-avatar>

                  <b-card-text>
                    {{ craft.artworkTitle }}
                  </b-card-text>
                  <hr style="padding: 0" />
                  <b-button
                    block
                    v-bind:href="'/ArtworkDetails?craftArtworkId=' + craft.Id"
                    variant="outline-primary"
                    >View</b-button
                  >
                </div>
              </b-card>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </section>


  <section class="carousal-section">
      <b-container>
        <b-row >
          <b-col class="my-1">
            <div class="section-title">
              <h3>Featured <span>Artwork</span></h3>
            </div>
            <h6 style="text-align: center">View All</h6>
            <br />
          </b-col>
        </b-row>

        <div class="owl-carousel owl-theme">
          <b-row v-for="craft in crafts" :key="craft.id" >
            <b-col>
              <b-card :img-src="craft.artworkUrl" size="5rem" class="text-center">
                <!-- For Creator photo and name -->
                <div class="mb-1">
                  <b-avatar
                    :src="craft.artistProfilePicUrl"
                    size="4rem"
                    class="text-center"
                    style="max-width: 25rem"
                  ></b-avatar>

                  <b-text>
                    <b>
                      <h3>{{  craft.artworkTitle }}</h3></b
                    >
                  </b-text>

                  <hr style="padding: 0" />
                 
                  <!-- button -->
                  <b-button block href="/Details" variant="outline-primary"
                    >View</b-button
                  >
                </div>
              </b-card>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </section>
    <!-- Featured Arts Section End -->

    <Footer />
    <br />
  </div>
</template>
 
<script>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
import featuredData from "./test.json";

export default {
  components: { Navbar, Footer },
  name: "Mainpage",
  data() {
    return {
      featuredart: featuredData,
    };
  },
  methods: {
    say: function (message) {
      alert(message);
    },
  },
  computed: {
    crafts() {
      return this.$store.state.crafts;
    },
  },
  created() {
    this.loading = true;
    this.$store.dispatch("fetchCrafts");
  },
};
</script>

    
<style>
.section-title {
  font-size: 40px;
}

.section-title.sidebar-title:before {
  height: 2px;
}

.section-title.sidebar-title:after {
  height: 2px;
}

.section-title.sidebar-title h5 {
  font-size: 20px;
  color: #151618;
  font-weight: 500;
}
/* 
.b-avatar {
    border: 0.3rem solid rgba(#fff, 0.3);
    margin-top: -21rem;
    margin-left: -15rem;
    margin-bottom: 1rem;
    margin-right: 9rem;
    max-width: 4rem;
} */

.section-title:before {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 70px;
  background: #dd1515;
  content: "";
  z-index: 0;
}

.section-title:after {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 100%;
  background: #f2f2f2;
  content: "";
}

.section-title h3 {
  font-size: 28px;
  color: #151618;
  font-weight: 300;
}

.section-title h3 span {
  font-weight: 700;
}

.owl-prev {
  left: -15px;
}

.owl-next {
  right: -15px;
}

.owl-prev,
.owl-next {
  position: absolute;
  top: 40%;
}

.owl-prev span,
.owl-next span {
  font-size: 60px;
  color: #787878;
}

.owl-theme .owl-nav[class*="owl-"]:hover {
  background-color: transparent;
}
</style>
