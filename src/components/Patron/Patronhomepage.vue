<template>
  <div>
    <navbar />
    <br />
    <br />
    <br />
    <br />
    <center>
      <b-container>
        <b-button
          pill
          variant="dark"
          style="margin: 10px"
          @click="activeTab = 'Patronartwork'"
          >Artworks</b-button
        >

        <b-button
          pill
          variant="dark"
          style="margin: 10px"
          @click="activeTab = 'Patronfeed'"
          >Feed</b-button
        >

        <b-button
          pill
          variant="dark"
          style="margin: 10px"
          @click="activeTab = 'Patronartist'"
          >Creators</b-button
        >
      </b-container>

      <component :is="activeTab" />
    </center>

    <Footer />
  </div>
</template>

<script>
import Footer from "../Footer.vue";
import Navbar from "../Navbar.vue";
import Patronfeed from "./Patronfeed.vue";
import Patronartwork from "./Patronartwork.vue";
import Patronartist from "./Patronartist.vue";
export default {
  components: {
    Navbar,
    Footer,
    Patronartwork,
    Patronartist,
    Patronfeed,
  },
  data() {
    return {
      activeTab: "Patronartwork",
    };
  },
};
</script>

<style>
</style>