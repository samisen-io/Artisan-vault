<template>
  <div>
    <br />
    <br />
    <carousel />
    <b-container>
      <b-list-group-item>
        <b-row>
          <b-col>
            <b-avatar
              src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/robert.jpg"
              size="3rem"
            ></b-avatar>
          </b-col>
          <b-col col sm="10">
            <br />
            <h6 class="display-6">@TonyStrack</h6>
          </b-col>
          <b-col col sm="0">
            <b-button variant="outline-dark">share</b-button>
          </b-col>
        </b-row>
      </b-list-group-item>
      <b-card no-body class="overflow-hidden">
        <b-row no-gutters>
          <b-col md="9">
            <b-card-body>
              <h4 class="display-4" >TonyStrack</h4> <br />
              <h6 class="display-6">Art informatation</h6>
              <b-card-text>
                <br />
                Description
              </b-card-text>
              <b-card-text>
                This is a wider card with supporting text as a natural lead-in
                to additional content. This content is a little bit longer. This
                is a wider card with supporting text as a natural lead-in to
                additional content. This content is a little bit longer. This is
                a wider card with supporting text as a natural lead-in to
                additional content. This content is a little bit longer.<br />
              </b-card-text>
              <br />
            </b-card-body>
          </b-col>
          <b-col md="3">
            <br />
            <br />
            <br />
            <br />
            <br />
            <b-card>
              <!-- <b-card-text>
              This is a wider card with supporting text as a natural lead-in to
              additional content. This content is a little bit longer. This is a
              wider card with supporting text as a natural lead-in to additional
              content. This content is a little bit longer. This is a wider card
              with supporting text as a natural lead-in to additional content.
              This content is a little bit longer.<br />
            </b-card-text> -->
              <b-button block variant="primary">Add to cart</b-button>
            </b-card>
          </b-col>
        </b-row>
      </b-card>
    </b-container>

    <h3><b>Creator</b></h3>
    <b-list-group>
      <b-list-group-item>
        <b-container>
          <b-row>
            <b-col col md="2">
              <b-avatar
                button
                src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/robert.jpg"
                size="10rem"
              ></b-avatar>
            </b-col>
            <b-col md="5">
              <br />
              <br />
              <h3>
                <b><p>Tony Strack</p></b>
                <b
                  ><a
                    href="https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man"
                    target="_blank"
                    >@TonyStrack</a
                  ></b
                >
              </h3>
            </b-col>
            <b-col md="5">
              <br />
              <h3 class="display-3">Ironman</h3>
            </b-col>
          </b-row>
        </b-container>
      </b-list-group-item>
      <br />
    </b-list-group>
  </div>
</template>

<script>
import Carousel from "./Carousel.vue";
export default {
  components: { Carousel },
};
</script>

<style>
</style>