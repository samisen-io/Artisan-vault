<template>
  <div>
    <navbar />
    <br />
    <br />
    <br />
    <center>
      <div class="header">
        <h1>WELCOME TO LOGIN PAGE</h1>
      </div>
    </center>
    <br />
    <br />
    <!-- <div class="container">
      <div class="row content">
        <div class="col-md-4 mb-3">
          <img
            alt="Vue logo"
            src="../assets/artist.jpg"
            class="rounded-0"
            width="300"
            height="350"
          />
        </div>
        <div class="col-md-6">
          <h3 style="color: darkblue" class="signintext mb-3">Sign in</h3>
          <form @submit="onSubmit" v-if="show">
            <div class="form-group">
              <label for="email">Email</label>
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder="Enter email"
                required
              ></b-form-input>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <b-form-input
                id="input-2"
                v-model="form.password"
                type="password"
                placeholder="Enter your Password"
                required
              ></b-form-input>
            </div>
            <div class="a">
              <a style="right" href="/">Forgot Password?</a>
            </div>
            <br />
            <b-button block variant="success" href="/">Sign in</b-button>
            <b-button block type="submit" variant="primary">Sign in</b-button>
            <br />
            <center>
              <p>New user? <a href="/Regiesterpage">Create an account</a></p>
              <center>
                <p><b>or</b></p>
              </center>
            </center>
          </form>
          <b-button
            class="fab fa-facebook-f"
            block
            style="background-color: #3b5998"
            @click="facebook"
          >
            Continue with Facebook
          </b-button>
          <br />
        </div>
      </div>
    </div> -->
    <b-button
      class="fab fa-facebook-f"
      block
      style="background-color: #3b5998"
      @click="facebook"
    >
      Continue with Facebook
    </b-button>
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import Navbar from "./Navbar.vue";
import firebase from "firebase/app";
import "firebase/auth";
export default {
  components: {
    Navbar,
    Footer,
  },
  // data() {
  //   return {
  //     form: {
  //       email: "",
  //       password: "",
  //     },
  //     show: true,
  //   };
  // },
  // methods: {
  //   onsubmit(event) {
  //     event.preventDefault();
  //     alert(JSON.stringify(this.form));
  //   },
  methods: {
    facebook: function () {
      const provider = new firebase.auth.FacebookAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((user) => {
          this.$router.replace("/");
          console.log(user);
        })
        .then(() => {
          alert("signed in");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
.header {
  padding: 10px;
  text-align: center;
  background: black;
  color: whitesmoke;
  font-size: 30px;
}

.signin-text {
  font-style: normal;
  font-weight: 600 !important;
}
.form-control {
  display: block;
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  border-color: black;
  border-style: solid !important;
  border-width: 0 0 1px 0 !important;
  padding: auto;
  color: black;
  height: auto;
  border-radius: 0;
  background-color: black;
  background-clip: padding-box;
}
.form-control:focus {
  color: black;
  background-color: red;
  outline: 0;
  box-shadow: none;
}
div.a {
  text-align: right;
}
</style>