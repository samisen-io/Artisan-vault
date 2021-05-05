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
    <!-- Featured Arts Section Begin -->

    <!-- Featured Arts Section Begin -->
    <br />
    <br />

    <section class="carousal-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title">
              <h3>Featured <span>Artwork</span></h3>
            </div>
            <h6 style="text-align: center">View All</h6>
            <br />

            <div class="owl-carousel owl-theme">
              <!-- IMAGE 1 -->
              <div class="card">
                <div class="item">
                  <img
                    class="card-img-top"
                    id="myImg"
                    src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/oslo.jpg"
                    alt="Bologna"
                    onclick="myFunction(this.src,this.alt)"
                  />

                  <!-- The Modal -->
                  <div id="myModal" class="modal">
                    <span class="close">&times;</span>
                    <img class="modal-content" id="img01" />
                    <div id="caption"></div>
                  </div>

                  <div class="card-body">
                    <img
                      class="featuredart rounded-circle"
                      src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/robert.jpg"
                      alt="Bologna"
                    />
                  </div>

                  <div class="container">
                    <center>
                      <h2>Jane Doe</h2>
                      <p>jane@example.com</p>
                    </center>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p><button class="button">Contact</button></p>
                  </div>
                </div>
              </div>
              <!-- END IMAGE 1 -->

              <div class="card">
                <div class="item">
                  <img
                    class="card-img-top"
                    id="myImg"
                    src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/oslo.jpg"
                    alt="Bologna"
                    onclick="myFunction(this.src,this.alt)"
                  />

                  <!-- The Modal -->
                  <div id="myModal" class="modal">
                    <span class="close">&times;</span>
                    <img class="modal-content" id="img01" />
                    <div id="caption"></div>
                  </div>

                  <div class="card-body">
                    <img
                      class="featuredart rounded-circle"
                      src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/robert.jpg"
                      alt="Bologna"
                    />
                  </div>

                  <div class="container">
                    <center>
                      <h2>Jane Doe 2</h2>
                      <p>jane@example.com</p>
                    </center>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p><button class="button">Contact</button></p>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="item">
                  <img
                    class="card-img-top"
                    id="myImg"
                    src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/oslo.jpg"
                    alt="Bologna"
                    onclick="myFunction(this.src,this.alt)"
                  />

                  <!-- The Modal -->
                  <div id="myModal" class="modal">
                    <span class="close">&times;</span>
                    <img class="modal-content" id="img01" />
                    <div id="caption"></div>
                  </div>

                  <div class="card-body">
                    <img
                      class="featuredart rounded-circle"
                      src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/robert.jpg"
                      alt="Bologna"
                    />
                  </div>

                  <div class="container">
                    <center>
                      <h2>Mike Ross</h2>
                      <p>jane@example.com</p>
                    </center>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p><button class="button">Contact</button></p>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="item">
                  <img
                    class="card-img-top"
                    id="myImg"
                    src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/oslo.jpg"
                    alt="Bologna"
                    onclick="myFunction(this.src,this.alt)"
                  />

                  <!-- The Modal -->
                  <div id="myModal" class="modal">
                    <span class="close">&times;</span>
                    <img class="modal-content" id="img01" />
                    <div id="caption"></div>
                  </div>

                  <div class="card-body">
                    <img
                      class="featuredart rounded-circle"
                      src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/robert.jpg"
                      alt="Bologna"
                    />
                  </div>

                  <div class="container">
                    <center>
                      <h2>Mike Ross 2</h2>
                      <p>jane@example.com</p>
                    </center>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p><button class="button">Contact</button></p>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="item">
                  <img
                    class="card-img-top"
                    id="myImg"
                    src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/oslo.jpg"
                    alt="Bologna"
                    onclick="myFunction(this.src,this.alt)"
                  />

                  <!-- The Modal -->
                  <div id="myModal" class="modal">
                    <span class="close">&times;</span>
                    <img class="modal-content" id="img01" />
                    <div id="caption"></div>
                  </div>

                  <div class="card-body">
                    <img
                      class="featuredart rounded-circle"
                      src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/robert.jpg"
                      alt="Bologna"
                    />
                  </div>

                  <div class="container">
                    <center>
                      <h2>Mike Ross 3</h2>
                      <p>jane@example.com</p>
                    </center>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p><button class="button">Contact</button></p>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="item">
                  <img
                    class="card-img-top"
                    id="myImg"
                    src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/oslo.jpg"
                    alt="Bologna"
                    onclick="myFunction(this.src,this.alt)"
                  />

                  <!-- The Modal -->
                  <div id="myModal" class="modal">
                    <span class="close">&times;</span>
                    <img class="modal-content" id="img01" />
                    <div id="caption"></div>
                  </div>

                  <div class="card-body">
                    <img
                      class="featuredart rounded-circle"
                      src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/robert.jpg"
                      alt="Bologna"
                    />
                  </div>

                  <div class="container">
                    <center>
                      <h2>Mike Ross 4</h2>
                      <p>jane@example.com</p>
                    </center>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p><button class="button">Contact</button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Featured Arts Section End -->

    <!-- Latest Arts Section Begin -->
    <section class="carousal-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title">
              <h3>Latest <span>Artwork</span></h3>
            </div>
            <h6 style="text-align: center">View All</h6>
            <br />

            <div class="owl-carousel owl-theme">
              <div class="card">
                <div class="item">
                  <img
                    class="card-img-top"
                    id="myImg"
                    src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/oslo.jpg"
                    alt="Snow"
                    onclick="myFunction(this.src,this.alt)"
                  />
                  <div class="container">
                    <h2>Jane Doe</h2>
                    <p class="title">CEO & Founder</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>jane@example.com</p>
                    <p><button class="button">Contact</button></p>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="item">
                  <img
                    class="card-img-top"
                    id="myImg"
                    src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/oslo.jpg"
                    alt="Snow"
                    onclick="myFunction(this.src,this.alt)"
                  />
                  <div class="container">
                    <h2>Jane Doe 2</h2>
                    <p class="title">CEO & Founder</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>jane@example.com</p>
                    <p><button class="button">Contact</button></p>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="item">
                  <img
                    class="card-img-top"
                    id="myImg"
                    src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/oslo.jpg"
                    alt="Snow"
                    onclick="myFunction(this.src,this.alt)"
                  />
                  <div class="container">
                    <h2>Mike Ross</h2>
                    <p class="title">Art Director</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>mike@example.com</p>
                    <p><button class="button">Contact</button></p>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="item">
                  <img
                    class="card-img-top"
                    id="myImg"
                    src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/oslo.jpg"
                    alt="Snow"
                    onclick="myFunction(this.src,this.alt)"
                  />
                  <div class="container">
                    <h2>Mike Ross 2</h2>
                    <p class="title">Art Director</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>mike@example.com</p>
                    <p><button class="button">Contact</button></p>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="item">
                  <img
                    class="card-img-top"
                    id="myImg"
                    src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/oslo.jpg"
                    alt="Snow"
                    onclick="myFunction(this.src,this.alt)"
                  />
                  <div class="container">
                    <h2>Mike Ross 3</h2>
                    <p class="title">Art Director</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>mike@example.com</p>
                    <p><button class="button">Contact</button></p>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="item">
                  <img
                    class="card-img-top"
                    id="myImg"
                    src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/oslo.jpg"
                    alt="Snow"
                    onclick="myFunction(this.src,this.alt)"
                  />
                  <div class="container">
                    <h2>Mike Ross 4</h2>
                    <p class="title">Art Director</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>mike@example.com</p>
                    <p><button class="button">Contact</button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest Arts Section End -->
    <Footer />
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
export default {
  components: { Navbar, Footer },
  name: "Mainpage",
};
</script>

<style>
 .featuredart {
  border: 0.3rem solid rgba(#fff, 0.3);

  margin-left: 4rem;
 margin-bottom: -1.5rem;
  max-width: 5rem;
  }

 .card-body{-ms-flex:1 1 auto;flex:1 1 auto;min-height:1px;padding:1rem}

.carousal-section {
margin-bottom: 70px;
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
  width: 70px;
  background: #dd1515;
  content: "";
  z-index: 1;
}

.section-title:after {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 100%;
  background: #f2f2f2;
  content: "";
}

.section-title h3 {
  font-size: 28px;
  color: #151618;
  font-weight: 300;
}

.section-title h3 span {
  font-weight: 700;
}


*, *:before, *:after {
  box-sizing: inherit;
}

.column {
  float: left;
  width: 25%;
  margin-bottom: 16px;
  padding: 0 8px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
}

.about-section {
  padding: 50px;
  text-align: center;
  background-color: #474e5d;
  color: white;
}

.container {
  padding: 0 16px;
}

.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}
 /* Make the image fully responsive */
  .carousel-inner img {
    width: 100%;
    height: 100%;
  }

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}




#myImg {
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}
 

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 2; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: hidden; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
 
}

/* Modal Content (image) */
.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
}



/* Caption of Modal Image */
#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 250px;
}

/* Add Animation */
.modal-content, #caption {  
  -webkit-animation-name: zoom;
  -webkit-animation-duration: 0.6s;
  animation-name: zoom;
  animation-duration: 0.6s;
}

@-webkit-keyframes zoom {
  from {-webkit-transform:scale(0)} 
  to {-webkit-transform:scale(1)}
}

@keyframes zoom {
  from {transform:scale(0)} 
  to {transform:scale(1)}
}

/* The Close Button */
.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.carousel-control-prev-icon, .carousel-control-next-icon {
    height: 100px;
    width: 100px;
    outline: black;
    background-color: rgba(0, 0, 0, 0.3);
    background-size: 100%, 100%;
    border-radius: 50%;
    border: 1px solid black;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

.nav-btn{

height: 50px;
    width: 50px;   
    background-color: orange;
    background-size: 100%, 100%;
    border-radius: 70%; 
   
}

.prev-slide:hover {
  background: red;
  color: #ffffff;
  border-color: #dd1515;
  }
 
 .next-slide:hover {
  background: red;
  color: #ffffff;
  border-color: #dd1515;
  } 
/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px){
  .modal-content {
    width: 100%;
  }
}
</style>