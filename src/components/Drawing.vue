<template>
  <div>
    <navbar />
    <br />
    <br />
    <br />
    <br />
    <drawingcard />
    <br />
    <b-container>
      <b-row>
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
      </b-row>
      <b-row>
        <b-col col lg="3" v-for="user in paginatedItems" :key="user.id">
          <b-card
            class="text-center"
            :img-src="user.Pic"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 25rem"
            img-height="200"
          >
            <hr />
            <!-- For Creator photo and name -->
            <div class="mb-5">
              <b-avatar
                :src="user.Authorprofilepic"
                size="8rem"
                class="text-center"
              ></b-avatar>
              <br />
              <br />
              <b-text>
                <b>
                  <h3>{{ user.Authorname }}</h3></b
                >
              </b-text>
              <hr />
              <!-- For email -->
              <b-card-text>
                <b>{{ user.email }}</b>
              </b-card-text>
              <!-- For image description -->
              <b-card-text>
                {{ user.Title }}
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
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Drawingcard from "./Drawingcard.vue";
import Drawing from "./Drawing.json";
import Footer from "./Footer.vue";
import Navbar from "./Navbar.vue";
export default {
  components: { Navbar, Footer, Drawingcard },
  data() {
    return {
      paginatedItems: Drawing,
      currentPage: 1,
      perPage: 4,
      totalRows: Drawing.length,
    };
  },
  methods: {
    paginate(page_size, page_number) {
      this.paginatedItems = Drawing.slice(
        page_number * page_size,
        (page_number + 1) * page_size
      );
    },
    onPageChanged(page) {
      this.paginate(this.perPage, page - 1);
    },
  },
  mounted() {
    this.paginate(this.perPage, 0);
  },
};
</script>

<style>
</style>