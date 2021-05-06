<template>
  <div>
    <section class="carousal-section">
      <b-container>
        <b-row>
          <b-col class="my-1">
            <div class="section-title">
              <h3>Featured <span>Artwork</span></h3>
            </div>
            <h6 style="text-align: right">View All</h6>
            <br />
          </b-col>
        </b-row>
        <b-container>
          <b-row>
            <b-col md="12" class="my-1"> </b-col>
          </b-row>
          <b-row>
            <b-col col lg="3" v-for="user in latestart" :key="user.id">
              <b-card
                class="text-center"
                :img-src="user.Artimg"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 25rem"
              >
                <!-- For Creator photo and name -->
                <div class="mb-5">
                  <b-avatar :src="user.Creator" size="8rem" class="text-center"></b-avatar>
                  <br />
                  <br />
                  
                    <b> <h3>{{user.Artistname}}</h3></b>
                 
                  <hr />
                  <!-- For email -->
                  <b-card-text>
                    <b>{{ user.email }}</b>
                  </b-card-text>
                  <!-- For image description -->
                  <b-card-text>
                    {{ user.Artdescription }}
                  </b-card-text>
                  <!-- button -->
                  <b-button block href="#" variant="outline-primary"
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
import latestData from "./latestart.json";
export default {
  data() {
    return {
      latestart: latestData,
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

/* 
.b-avatar {
    border: 0.3rem solid rgba(#fff, 0.3);
    margin-top: -21rem;
    margin-left: -15rem;
    margin-bottom: 1rem;
    margin-right: 9rem;
    max-width: 4rem;
} */

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