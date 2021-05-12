<template>
  <div>
    <navbar />
    <br />
    <br />
    <br />
    <br />
    <Maincard />
    <!-- Featured Arts Section Begin -->
    <br />
    <br />
    <Featuredarts />
    <br />
    <!-- Highestpaidarts  -->
    <Highestpaidart />
    <!-- Top Arts Section End -->
    <br />
    <topartist />
    <!--Footer -->
    <Footer />
    <br />
  </div>
</template>
 
<script>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
import Maincard from "./Maincard.vue";
import Featuredarts from "./Featuredarts.vue";


import Highestpaidart from "./Highestpaidart.vue";
import Topartist from './Topartist.vue';

export default {
  components: {
    Navbar,
    Footer,
    Featuredarts,

    
    Maincard,
    Highestpaidart,
    Topartist,
  },

  name: "Mainpage",
  methods: {
    say: function (message) {
      alert(message);
    },
  },
};
</script>

    
<style>
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