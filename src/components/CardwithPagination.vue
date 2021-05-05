<template>
  <div>
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
            :img-src="user.Drwaingurl"
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
              <b-text>
                <b>
                  <h3>{{ user.Artistname }}</h3></b
                >
              </b-text>
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
  </div>
</template>
<script>
import usersData from "./users.json";

export default {
  data() {
    return {
      paginatedItems: usersData,
      currentPage: 1,
      perPage: 4,
      totalRows: usersData.length,
    };
  },
  methods: {
    paginate(page_size, page_number) {
      this.paginatedItems = usersData.slice(
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