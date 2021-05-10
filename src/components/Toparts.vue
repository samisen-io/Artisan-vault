<template>
  <div>
    <section class="carousal-section">
      <b-container>
      <b-row>
          <b-col col md="10">
            <div class="section-title">
              <h3>Top <span>Artwork</span></h3>
            </div>
          </b-col>
          <b-col col md="2">
            <a href="/Artwork" style="align: right">View all artworks</a>
          </b-col>
          <br />
        </b-row>
        <b-container>
          <b-row>
            <b-col md="12" class="my-1"> </b-col>
          </b-row>
          <b-row>
            <b-col col lg="3" v-for="user in topart" :key="user.id">
              <b-card
                class="text-center"
                :img-src="user.Pic"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 25rem"
              >
                <!-- For Author photo and name -->
                <div class="mb-5">
                  <b-avatar
                    :src="user.Authorprofilepic"
                    size="8rem"
                    class="text-center"
                  ></b-avatar>
                  <br />
                  <br />
                  <b>
                    <h3>{{ user.Authorname }}</h3></b
                  >
                  <hr />
                  <!-- For image description -->
                  <b-card-text>
                    <p>{{ user.Title }}</p>
                  </b-card-text>
                  <!-- button -->
                  <b-button block href="/Artwork" variant="outline-primary"
                    >View</b-button
                  >
                </div>
              </b-card>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="12" class="my-1"> </b-col>
          </b-row>
        </b-container>
      </b-container>
    </section>
  </div>
</template>

<script>
import topArtData from "./topart.json";
export default {
  data() {
    return {
      topart: topArtData,
    };
  },
};
</script>

<style>
.section-title {
  position: relative;
  padding-bottom: 16px;
  margin-bottom: 30px;
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

.section-title:before {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 70px;
  background: #dd1515;
  content: "";
  z-index: 1;
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

*,
*:before,
*:after {
  box-sizing: inherit;
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