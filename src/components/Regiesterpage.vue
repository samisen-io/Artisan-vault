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
          <form>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="Password">Password</label>
              <input
                type="Password"
                name="Password"
                placeholder="Enter your Password"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="Password">Confirm Password</label>
              <input
                type="Password"
                name="Password"
                placeholder="Re-enter your Password"
                class="form-control"
              />
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
            <b-button block variant="success" href="/">Signup</b-button>
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
};
</script>

<style>
</style>