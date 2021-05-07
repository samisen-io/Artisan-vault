<template>
  <div>
    <br />
    <br />

    <!--navbar-->
    <Navbar />
    <!-- carousel page -->
    <br />
    <br />
    <br />
    <br />
    <!-- card -->
    <craftcard />
    <br />
    <b-container>
      <!-- <b-row>
        <b-col md="12" class="my-1">
          <b-pagination
            @change="onPageChanged"
            :total-rows="totalRows"
            :per-page="perPage"
            v-model="currentPage"
            class="my-0"
            align="right"
          />
        </b-col>
      </b-row> -->
      <b-row>
        <b-col col lg="4" v-for="user in craft" :key="user.id">
          <b-card
            class="text-center"
            img-src="..//assets//RG.png"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 25rem"
          >
            <!-- For Creator photo and name -->
            <div class="mb-5">
              <b-avatar
                :src="user.Artimg"
                size="8rem"
                class="text-center"
              ></b-avatar>
              <br />
              <br />
              <b>
                <h3>{{ user.Artistname }}</h3></b
              >
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
              <b-button block href="#" variant="outline-primary">View</b-button>
            </div>
          </b-card>
        </b-col>
      </b-row>
      <!-- <b-row>
        <b-col md="12" class="my-1">
          <b-pagination
            @change="onPageChanged"
            :total-rows="totalRows"
            :per-page="perPage"
            v-model="currentPage"
            class="my-0"
            align="right"
          />
        </b-col>
       </b-row> -->
    </b-container>
    <!--footer -->
    <Footer />
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

import craftdata from "./crafts.json";
import Craftcard from "./Craftcard.vue";

export default {
  name: "Crafts",
  components: {
    Navbar,
    Footer,
    Craftcard,
  },
  data() {
    return {
      craft: craftdata,
    };
  },
};
</script>
<style>
</style>