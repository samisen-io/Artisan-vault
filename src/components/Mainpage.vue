<template>
  <div>
    <navbar />
    <br />
    <br />
    <br />
    <br />
    <main-page-card />
    <!-- Featured Arts Section Begin -->
    <br />
    <br />
    <featured-arts />
    <br />
    <!-- Highestpaidarts  -->
    <highest-paid-arts />
    <!-- Top Artists Section  -->
    <br />
    <top-artist />
    <!--Footer -->
    <Footer />
    <br />
  </div>
</template>
 
<script>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
import MainPageCard from "./MainPageCard";
import TopArtist from "../components/TopArtist";
import FeaturedArts from "../components/FeaturedArts";
import HighestPaidArts from "../components/HighestPaidArts"

export default {
  name: "Mainpage",
  components: {
    Navbar,
    Footer,
    MainPageCard,
    TopArtist,
    FeaturedArts,
    HighestPaidArts,
  },
};
</script>

    
<style>
.slick-prev::before,
.slick-next::before {
  color: red;
  font-size: 3rem;
}

.slick-prev {
  width: 1px;
  z-index: 1;
  padding: 0;
}

.slick-next {
  width: 3rem;
  z-index: 1;
  padding: 0;
}

.slick-list {
  width: 100%;
}

.body {
  background-color: salmon;
}
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
  width: 100%;
  background: #dd1515;
  content: "";
  z-index: 2;
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
</style>