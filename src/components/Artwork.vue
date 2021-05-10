<template>
  <div>
    <br />
    <br />
    <navbar />
    <br />
    <Carousel3d />
    <b-container>
         
      <b-card no-body class="overflow-hidden" style="border: none; width:1200px; padding-top:20px">

         <b-row no-gutters>
            <b-col md="7">
              
               <b-card-body>
              <h2>Karaoke Old Man x Amrit</h2>
              <br />
              <h6 class="display-6">Art informatation</h6>
              <b-card-text>
                <br />
                Description
              </b-card-text>
              <b-card-text style="text-align: justify; padding-right:30px;">
                Iron Man is a fictional superhero appearing in American comic
                books published by Marvel Comics. The character was co-created
                by writer and editor Stan Lee, developed by scripter Larry
                Lieber, and designed by artists Don Heck and Jack Kirby. The
                character made his first appearance in Tales of Suspense #39
                (cover dated March 1963), and received his own title in Iron Man
                #1 (May 1968). Also in 1963, the character founded the Avengers
                alongside Thor, Ant-Man, Wasp and the Hulk. A wealthy American
                business magnate, playboy, philanthropist, inventor and
                ingenious scientist, Anthony Edward "Tony" Stark suffers a
                severe chest injury during a kidnapping. When his captors
                attempt to force him to build a weapon of mass destruction, he
                instead creates a mechanized suit of armor to save his life and
                escape captivity. Later, Stark develops his suit, adding weapons
                and other technological devices he designed through his company,
                Stark Industries. He uses the suit and successive versions to
                protect the world as Iron Man. Although at first concealing his
                true identity, Stark eventually publicly reveals himself to be
                Iron Man. Initially, Iron Man was a vehicle for Stan Lee to
                explore Cold War themes, particularly the role of American
                technology and industry in the fight against communism.
                Subsequent re-imaginings of Iron Man have transitioned from Cold
                War motifs to contemporary matters of the time.[1]<br />
              </b-card-text>
              <br />
            </b-card-body>           
            </b-col>
            <b-col md="5">
              <b-card-body>
                <br />
                <b-row>
                  <b-col col md="3">
                    <b-avatar
                      size="5rem"
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

                <hr />
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
                          <b-button block href="/Artwork" variant="outline-dark">Add to Cart</b-button
                          >
                           <b-button block href="/Artwork" variant="outline-dark">Add to Favourite</b-button
                          >
                        </b-card-text>
                      </b-col>
                   
                    </b-row>
                   
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
      </b-card>
    </b-container>

<br>
  
    <b-list-group>
      <b-list-group-item>
        <b-container>
           <h5 style="padding-left:50px;"><b>Creator</b></h5>
              <br>
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