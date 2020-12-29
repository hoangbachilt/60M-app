<template>
  <div class="vue-tempalte">
    <form v-on:submit.prevent="handleSubmit">
      <div class="errors" v-if="errors.length">
        <b>Please correct the following error(s):</b>
          <div>
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </div>
      </div>
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
        location.reload()
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
    max-width: 90%;
    margin: auto;
    h3 {
      text-align: center;
    }
    form .errors {
      width: 100%;
      height: auto;
      border: 1px solid #ccc;
      border-radius: 15%;
      div li {
        margin-left: 20px;
        color: red;
      }
    }
  }
</style>

