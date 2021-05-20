<template>
  <div>
    <b-button  v-b-modal.modal-1 variant="outline-secondary"
      >Login</b-button
    >
    
    <b-modal id="modal-1" title="Login" hide-footer>
      <b-form @submit.prevent="sign" v-if="show">
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Enter password:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="password"
            type="password"
            placeholder="Enter password"
            required
          ></b-form-input>
          <div class="a">
            <a style="right" href="/">Forgot Password?</a>
          </div>
        </b-form-group>
        <b-button block type="submit" variant="primary">signin</b-button>
        <br />
        <p>Need an account ? <a href="/Regiesterpage">Signup</a></p>

        <center>
          <p><b>or</b></p>
        </center>
        <b-button
          class="fab fa-facebook-f"
          block
          style="background-color: #3b5998"
          @click="facebook"
        >
          Continue with Facebook
        </b-button>
      </b-form>
    </b-modal>
  </div>
</template>
<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      show: true,
    };
  },
  methods: {
    sign() {
      try {
        const user = firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then((user) => {
            this.$router.replace("/Drawing");
            console.log(user);
          })
          .then(() => {
            alert("signed in");
          });
        console.log(user);
      } catch (err) {
        console.log(err);
      }
    },
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
div.a {
  text-align: right;
}
</style>