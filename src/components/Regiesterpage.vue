<template>
  <div>
    <div class="header">
      <h1> Register your account</h1>
    </div>
    <br />
    <br />
    <div class="container">
      <div class="row content">
        <div class="col-md-5 mb-3">
          <img
            alt="Vue logo"
            src="../assets/RG.png"
            class="rounded-0"
            width="400"
            height="350"
          />
        </div>
        <div class="col-md-6">
          <form @success="onSubmit" v-if="show">
            <div class="form-group">
              <label for="email">Email</label>
             <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder="Enter  email"
                required
              ></b-form-input>
            </div>
            <div class="form-group">
              <label for="Password">Password</label>
             <b-form-input
                id="input-2"
                v-model="form.password"
                type="password"
                placeholder="Enter your Password"
                required
              ></b-form-input>
            </div>
            <div class="form-group">
              <label for="Password">Confirm Password</label>
           <b-form-input
                id="input-3"
                v-model="form.confirmpassword"
                type="password"
                placeholder="Re-enter your Password"
                required
              ></b-form-input>
            </div>
            <b-form-checkbox
              id="checkbox-1"
              name="checkbox-1"
              value="accepted"
              unchecked-value="not_accepted"
            >
              If you want to include yourself as an artist

            </b-form-checkbox>
            <br />
            <b-button block type="success" variant="success">Signup</b-button>
            <br />
            <p>Already have an account? <a href="/Login">Sign in</a>.</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Regiesterpage",
  data(){
    return{
      form:{
        email:"",
        password:"",
        confirmpassword:""
      },
      show:true,
    };
  },
        methods: {
    onsubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
  
    
  }
};
</script>

<style>
</style>