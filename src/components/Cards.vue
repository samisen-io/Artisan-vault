<template>
  <div>
    <b-container>
      <b-row>
        <b-col md="12" class="my-1"> </b-col>
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
                src=,
                size="8rem"
                class="text-center"
              ></b-avatar>
              <br />
              <br />
              <b-text>
                <b>
                  <h3>Artistname</h3></b
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
        <b-col md="12" class="my-1"> </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<style>
</style>