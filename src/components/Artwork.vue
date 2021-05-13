<template>
  <div>
    <br />
    <br />
    <navbar />
    <br />
    <Carousel3d />
    <br />
    <b-container>
      <h4 class="display-4">TonyStrack</h4>
      <br />
      <h6 class="display-6">Art informatation</h6>
      <b-row no-gutters>
        <b-col md="8">
          <b-card-text>
            <br />
            Description
          </b-card-text>
          <b-row>
            <b-col col sm="10">
          <b-card-text>
            Iron Man is a fictional superhero appearing in American comic books
            published by Marvel Comics. The character was co-created by writer
            and editor Stan Lee, developed by scripter Larry Lieber, and
            designed by artists Don Heck and Jack Kirby. The character made his
            first appearance in Tales of Suspense #39 (cover dated March 1963),
            and received his own title in Iron Man #1 (May 1968). Also in 1963,
            the character founded the Avengers alongside Thor, Ant-Man, Wasp and
            the Hulk. A wealthy American business magnate, playboy,
            philanthropist, inventor and ingenious scientist, Anthony Edward
            "Tony" Stark suffers a severe chest injury during a kidnapping. When
            his captors attempt to force him to build a weapon of mass
            destruction, he instead creates a mechanized suit vehicle for Stan
            Lee to explore Cold War themes, particularly the role of American
            technology and industry in the fight against communism. Subsequent
            re-imaginings of Iron Man have transitioned from Cold War motifs to
            contemporary matters of the time.[1]<br />
          </b-card-text>
            </b-col>
          </b-row>
          <br />
        </b-col>

        <b-col md="4">
          <b-card-text>
            <b-row>
              <b-col col md="3">
                <b-avatar
                  size="4rem"
                  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mh-chris-hemsworth-attends-the-tag-heuer-museum-in-motion-news-photo-968210608-1554829603.jpg"
                >
                </b-avatar>
              </b-col>
              <b-col col md="8">
                <br />
                <a
                  href="https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man"
                >
                  <h3>@venkat</h3></a
                >
              </b-col>
            </b-row>
            <b-card-text>
              <br />
              <h1><p class="font-weight-bold">venkat</p></h1>
            </b-card-text>
            <b-card-text>
              <br />
              <h4>PhotoPrice</h4>
              <h3>5000 Rs</h3>
            </b-card-text>
            <b-card-text>
              <br />

              <b-row>
                <b-col col md="8">
                  <b-card-text>
                    <b-button block href="/Artwork" variant="outline-dark"
                      >Add to Cart</b-button
                    >
                    <b-button block href="/Artwork" variant="outline-dark"
                      >Add to Favourite</b-button
                    >
                  </b-card-text>
                </b-col>
              </b-row>
            </b-card-text>
            <br />
          </b-card-text>
        </b-col>
      </b-row>
    </b-container>
    <br />
    <b-list-group>
      <h5 style="padding-left: 50px"><b>Creator</b></h5>
      <b-list-group-item>
        <b-container>
          <br />
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
              <h4>
                <b><p>Tony Strack</p></b>
                <b
                  ><a
                    href="https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man"
                    target="_blank"
                    >@TonyStrack</a
                  ></b
                >
              </h4>
            </b-col>
            <b-col md="4">
              <br />
              <h3 class="display-3">Ironman</h3>
            </b-col>
          </b-row>
        </b-container>
      </b-list-group-item>
      <br />
    </b-list-group>

    <Footer />
  </div>
</template>

<script>
import Carousel3d from "./Carousel3d.vue";
import Footer from "./Footer.vue";
import Navbar from "./Navbar.vue";
export default {
  components: {
    Carousel3d,
    Navbar,
    Footer,
  },
};
</script>
   


<style>

</style>