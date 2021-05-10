<template>
<div>
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
          <b-row v-for="user in featuredart" :key="user.id">
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
                  <b-button block href="/Artwork" variant="outline-primary"
                    >View</b-button
                  >
                </div>
              </b-card>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </section>
</div>
    <!-- Featured Arts Section End -->
</template>

<script>
import featuredData from "./featuredart.json";
export default {
  data() {
    return {
      featuredart: featuredData,
    };
  },
};
</script>
