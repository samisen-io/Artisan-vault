<template>
  <div>
    <br />
    <br />
    <b-card no-body class="overflow-hidden">
      <b-row no-gutters>
        <b-col md="7">
          <b-card-img
            src="https://picsum.photos/400/400/?image=30"
            alt="Image"
            class="rounded-0"
            height="400px"
          ></b-card-img>
        </b-col>
        <b-col md="5">
          <b-card-body title="Artist Name">
            <b>Share Button,</b>
            <b>Artist--- Image</b><br />
            Hi, my name is xxxxx Art is for me something that expresses an idea,
            an emotion or, more generally and more....
            <b-card-text>
              <br />
              Image Description
            </b-card-text>

            <b-card-text>
              This is a wider card with supporting text as a natural lead-in to
              additional content. This content is a little bit longer. This is a
              wider card with supporting text as a natural lead-in to additional
              content. This content is a little bit longer. This is a wider card
              with supporting text as a natural lead-in to additional content.
              This content is a little bit longer.<br />
            </b-card-text>
            <h5>Price : 22222</h5>
            <button class="btn btn-danger" style="margin: 5px">
              Add to cart</button
            ><br />
          </b-card-body>
        </b-col>
      </b-row>
      
      <b-row>
        <b-col md="12">
          <b-card-body title="Artist Name">
            <b-card-text>
              <section class="carousal-section">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-12">
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </b-card-text>
            <br />
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>