<template>
  <div class="vue-tempalte">
    <h3>Sign up</h3>
    <p v-if="errors.length">
      <ul>
        <li v-for="error in errors" :key="error.id">{{ error }}</li>
      </ul>
     </p>
    <form v-on:submit.prevent="handleSubmit" method="post">
      <div class="form-group">
        <label>Nick name</label>
        <input type="text" v-model="nick_name" class="form-control form-control-lg" />
      </div>

      <div class="form-group">
        <label>Full name</label>
        <input type="text" v-model="full_name" class="form-control form-control-lg" />
      </div>

      <div class="form-group">
        <label>Avatar</label>
        <input type="file" ref="inputFile" @change="uploadFile" />
      </div>

      <div class="form-group">
        <label>Telephone</label>
        <input type="text" v-model="tel" class="form-control form-control-lg" />
      </div>

      <div class="form-group">
        <label>Information</label>
        <input type="text_area" v-model="information" class="form-control form-control-lg" />
      </div>

      <div class="form-group">
        <label>Age</label>
        <input type="number" v-model="age" class="form-control form-control-lg" />
      </div>

      <div class="form-group">
        <label>Sex</label>
        <select v-model="sex" id="sex">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>

      <div class="form-group">
        <label>Address</label>
        <input type="text" v-model="address" class="form-control form-control-lg" />
      </div>

      <div class="form-group">
        <label>Link facebook</label>
        <input type="text" v-model="link_fb" class="form-control form-control-lg" />
      </div>

      <div class="form-group">
        <label>Password</label>
        <input type="password" v-model="password" class="form-control form-control-lg" />
      </div>

      <button type="submit" class="btn btn-dark btn-lg btn-block">Sign up</button>

      <p class="forgot-password text-right">
        Already registered
        <!-- <router-link :to="{name: 'login'}">sign in?</router-link> -->
      </p>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import router from "../../router"
export default {
  data() {
    return {
      nick_name: "",
      full_name: "",
      tel: "",
      information: "",
      age: "",
      sex: "",
      address: "",
      link_fb: "",
      password: "",
      point: 0,
      image_name: "",
      inputPicture: null,
      errors: []
    };
  },
  methods: {
    uploadFile() {
      this.inputPicture = this.$refs.inputFile.files[0];
    },
    handleSubmit() {
      let self = this;
      let formData = new FormData();
      const params = {
        "user[nick_name]": this.nick_name,
        "user[full_name]": this.full_name,
        "user[image]": this.inputPicture,
        "user[image_name]": this.inputPicture.name,
        "user[information]": this.information,
        "user[tel]": this.tel,
        "user[age]": this.age,
        "user[sex]": this.sex,
        "user[address]": this.address,
        "user[link_fb]": this.link_fb,
        "user[point]": this.point,
        "user[password]": this.password
      };

      Object.entries(params).forEach(([key, value]) =>
        formData.append(key, value)
      );
      axios.post("http://localhost:3000/signup", formData)
      .then(respone => {
        router.push("signin");
      })
      .catch(e => {
        self.errors = JSON.parse(e.response.data.message);
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
