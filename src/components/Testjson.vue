<template>
  <div>
    <b-button v-b-modal.modal-xl.modal-prevent-closing>Open Modal</b-button>
    <b-button v-b-modal.modal-xl variant="primary">xl modal</b-button>
    <b-modal id="modal-xl" size="xl" title="Extra Large Modal"
      >Hello Extra Large Modal!</b-modal
    >
    <div class="mt-3">
      Submitted Names:
      <div v-if="submittedNames.length === 0">--</div>
      <ul v-else class="mb-0 pl-3">
        <li v-for="name in submittedNames" :key="name">{{ name }}</li>
      </ul>
    </div>

    <b-modal
      size="xl"
      id="modal-prevent-closing"
      ref="modal"
      title="Login details"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group id="input-group-1" label="Email" label-for="input-1">
          <b-form-input
            id="input-1"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-1" label="password:" label-for="input-1">
          <b-form-input
            id="input-1"
            type="password"
            placeholder="Enter password"
            required
          ></b-form-input>
          <a style="right" href="/">Forgot Password?</a>
          <p>New user? <a href="/Regiesterpage">Create an account</a></p>
          <p>or</p>
          <b-button
            class="fab fa-facebook-f"
            style="background-color: #3b5998"
            @click="facebook"
          >
            Continue with Facebook
          </b-button>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      password: "",
      passwordState: null,
      nameState: null,
      submittedNames: [],
    };
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
    resetModal() {
      this.name = "";
      this.nameState = null;
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      // Push the name to submitted names
      this.submittedNames.push(this.name);
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
  },
};
</script>