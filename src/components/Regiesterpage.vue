<template>
  <div>
    <b-button  v-b-modal.modal-2 variant="outline-secondary"
      >Signup</b-button
    >
    <b-modal id="modal-2" title="Regiester u r account" hide-footer>
      <div v-if="error" class="error">{{ error.msg }}</div>
      <b-form @submit.prevent="signup" v-if="show">
        <!-- for email -->
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
        <!-- for password -->
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
        </b-form-group>
        <!-- for Re-enter password -->
        <!-- <b-form-group
          id="input-group-3"
          label="Re-enter password:"
          label-for="input-2"
        >
          <b-form-input
            id="input-3"
            v-model="form.confirmpassword"
            type="password"
            placeholder="Re-enter password"
            required
          ></b-form-input>
        </b-form-group> -->
        <!-- checkbox -->
        <b-form-checkbox-group>
          <b-form-checkbox
            id="checkbox-1"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
          >
            If you want to include yourself as an artist
          </b-form-checkbox>
        </b-form-checkbox-group>
        <br />
        <b-button block type="submit" variant="primary">Signup</b-button>
        <br />
        <p>already have an account <a href="Login">Login</a></p>
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
        // confirmpassword: "",
      },
      show: true,
    };
  },
  methods: {
    signup() {
      try {
        const user = firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((user) => {
            this.$router.replace("/");
            console.log(user);
          })
          .then(() => {
            alert("register successfully");
          });
        console.log(user);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style>
div.a {
  text-align: right;
}
</style>