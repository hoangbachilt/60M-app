<template>
  <div class="vue-tempalte">
    <form v-on:submit.prevent="handleSubmit">
      <h3>Sign in</h3>
      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
      </p>
      <div class="form-group">
        <label>Telephone</label>
          <input type="text" v-model="tel" class="form-control form-control-lg" required />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" v-model="password" class="form-control form-control-lg" required />
      </div>
      <button type="submit" class="btn btn-dark btn-lg btn-block">Sign in</button>
      <p class="forgot-password text-right mt-2 mb-4"></p>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import router from "../../router"
export default {
  data() {
    return {
      tel: "",
      password: "",
      errors: []
    };
  },
  methods: {
    handleSubmit() {
      axios
      .post("http://localhost:3000/signin", {
        tel: this.tel,
        password: this.password
      })
      .then(response => {
        localStorage.setItem('token', JSON.stringify(response.data));
        router.push("/");
      })
      .catch(errors => {
        this.errors.push(errors.response.data.error);
      });
    }
  }
};
</script>

<style scoped lang="scss">
  .vue-tempalte {
    max-width: 50%;
    margin: auto;
    padding-top: 100px;
    h3 {
      text-align: center;
    }
  }
</style>

