<template>
  <div>
    <navbar />
    <br />
    <!-- carousel page -->
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 1px #000"
      fade
      indicators
      img-width="124"
      img-height="48"
    >
      <b-carousel-slide
        caption="First slide"
        img-src="https://picsum.photos/1024/480/?image=10"
      ></b-carousel-slide>
      <b-carousel-slide 
        caption="Second Slide"
        img-src="https://picsum.photos/1024/480/?image=12"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Third Slide"
        img-src="https://picsum.photos/1024/480/?image=22"
      ></b-carousel-slide>
    </b-carousel>
    <!-- card part -->
    <!-- <b-card no-body class="overflow-hidden" style="max-width: 540px">
      <b-row no-gutters>
        <b-col md="6">
          <img alt="Vue logo" src="../assets/logo.png" class="rounded-0" />
        </b-col>
        <b-col md="6">
          <b-card-body title="Horizontal Card">
            <b>Horizontal Card</b>
            <b-card-text>
              This is a wider card with supporting text as a natural lead-in to
              additional content. This content is a little bit longer.
            </b-card-text>
            <button class="btn btn-danger" style="margin:5px;">venkat</button>
            <button class="btn btn-danger" style="margin:5px;">venkat</button>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card> -->
   <!-- Featured Arts Section Begin -->
   <br />
   <br />
  <section class="video-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <h3>Featured <span>Artwork</span>     </h3> 
          </div>        
        </div>
      </div>
      <div class="row">       
        <div class="video-slider owl-carousel"> 

          <div class="col-12 col-sm-8 col-md-6 col-lg-3">
            <div class="card">
              <center>
                <h6> @Malkiel </h6>
              </center>
              <img class="card-img-top" id="myImg" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/oslo.jpg" alt="Bologna" onclick="myFunction(this.src,this.alt)">
            <!-- The Modal -->
  <div id="myModal" class="modal">
    <span class="close">&times;</span>
    <img class="modal-content" id="img01">
    <div id="caption">     
    </div>
  </div>
              <center>
                <h4 class="card-title">The Mansion</h4>
              </center>
              <div class="card-body text-center">
                <img class="featuredart rounded-circle" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/robert.jpg" alt="Bologna">

                <footer>

                  <button class="button button2">View Details</button>

                </footer>
              </div>
            
            </div>
          </div>



          <div class="col-12 col-sm-8 col-md-6 col-lg-3">
            <div class="card">
              <center>
                <h6> @Malkiel </h6>
              </center>
              <img class="card-img-top" id="myImg" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/oslo.jpg" alt="Bologna" onclick="myFunction(this.src,this.alt)">
              <!-- The Modal -->
  <div id="myModal" class="modal">
    <span class="close">&times;</span>
    <img class="modal-content" id="img01">
    <div id="caption">     
       
    </div>
  </div>
              <center>
                <h4 class="card-title">The Mansion</h4>
              </center>
              <div class="card-body text-center">
                <img class="featuredart rounded-circle" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/robert.jpg" alt="Bologna">

                <footer>

                  <button class="button button2">View Details</button>

                </footer>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-8 col-md-6 col-lg-3">
            <div class="card">
              <center>
                <h6> @Malkiel </h6>
              </center>
              <img class="card-img-top" id="myImg" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/oslo.jpg" alt="Bologna2" onclick="myFunction(this.src,this.alt)">
              <!-- The Modal -->
  <div id="myModal" class="modal">
    <span class="close">&times;</span>
    <img class="modal-content" id="img01">
    <div id="caption">      
    </div>
  </div>

              <center>
                <h4 class="card-title">The Mansion</h4>
              </center>
              <div class="card-body text-center">
                <img class="featuredart rounded-circle" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/robert.jpg" alt="Bologna3">

                <footer>
                  <button class="button button2">View Details</button>
                </footer>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-8 col-md-6 col-lg-3">
            <div class="card">
              <center>
                <h6> @Malkiel </h6>
              </center>
              <img class="card-img-top" id="myImg" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/oslo.jpg" alt="Bologna3" onclick="myFunction(this.src,this.alt)">
            <!-- The Modal -->
  <div id="myModal" class="modal">
    <span class="close">&times;</span>
    <img class="modal-content" id="img01">
    <div id="caption">      
    </div>
  </div>
              <center>
                <h4 class="card-title">The Mansion</h4>
              </center>
              <div class="card-body text-center">
                <img class="featuredart rounded-circle" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/robert.jpg" alt="Bologna">

                <footer>

                  <button class="button button2">View Details</button>

                </footer>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-8 col-md-6 col-lg-3">
            <div class="card">
              <center>
                <h6> @Malkiel </h6>
              </center>
           <img class="card-img-top"  id="myImg" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/oslo.jpg" alt="Bologna5" onclick="myFunction(this.src,this.alt)">
                <!--<a href="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/oslo.jpg" class="play-btn video-popup">
                <img class="card-img-top"  src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/oslo.jpg" alt="Bologna"></a>--> 
             <!-- The Modal -->
  <div id="myModal" class="modal">
    <span class="close">&times;</span>
    <img class="modal-content" id="img01">
    <div id="caption">      
    </div>
  </div>

                <center>
                <h4 class="card-title">The Mansion</h4>
              </center>
              <div class="card-body text-center">
                <img class="featuredart rounded-circle" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/robert.jpg" alt="Bologna">                
                <footer>

                  <button class="button button2">View Details</button>

                </footer>
              </div>
            </div>
          </div>

        </div>
      </div>    
    </div>
    <br>
    <center>  View All Featured Artwork </center>
  </section>
  <!-- Featured Arts Section End -->
  </div>
</template>

<script>

import Navbar from "./Navbar.vue";
export default {
  components: { Navbar,  },
  name: "Mainpage",
};
</script>

<style>

</style>