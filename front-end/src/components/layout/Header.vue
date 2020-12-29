<template>
  <div class="topnav">
    <router-link class="active" :to="{ name: 'home' }">
      Dating Ice Cream
    </router-link>
    <div class="menu">
      <router-link :to="{ name: 'dating' }" class="fa fa-heartbeat">
        <span>Dating</span
        ><b
          >{{ point }}<img src="../../assets/icecream.svg" alt="" class="" /></b
      ></router-link>
      <router-link :to="{ name: 'cart' }" class="fa fa-cart-arrow-down">
        <span>Cart</span><b>{{ carts.length }}</b></router-link
      >
      <router-link :to="{ name: 'profile' }" class="fa fa-user-circle" v-if="user_name">
        <span>{{ user_name }}</span></router-link
      >
      <b-a v-b-modal.modal-2 class="fa fa-user-circle" v-if="!user_name"><span>Sign up</span></b-a>

      <b-modal id="modal-2" title="Sign Up">
        <signup />
      </b-modal>
      <!-- <router-link :to="{ name: 'signin' }" class="fa fa-user-circle" v-if="!user_name">
        <span data-toggle="modal" data-target="#exampleModalCenter">Sign in</span></router-link
      > -->
        <b-a v-b-modal.modal-1 class="fa fa-user-circle" v-if="!user_name"><span>Sign in</span></b-a>

        <b-modal id="modal-1" title="Sign In">
          <signin />
        </b-modal>
      <router-link :to="{ name: 'home' }" class="fa fa-user-circle" v-if="user_name">
        <span @click="signOut">Sign out</span></router-link
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import authHeader from "../../services/auth-header"
import Signin from "../signin/Signin.vue"
import Signup from "../signup/Signup.vue"
import router from "../../router"
export default {
  data() {
    return {
      user_name: null,
      carts: this.$store.state.user.carts,
      point: null
    };
  },
  created() {
    axios
    .get(`http://localhost:3000/users/${JSON.parse(localStorage.getItem("token")).user.id}`, { headers: authHeader() })
    .then(response => {
      this.user_name = response.data.user.full_name
      this.point = response.data.user.point
    })
  },
  methods: {
    signOut() {
      localStorage.removeItem("token");
      router.push("/")
      location.reload()
    }
  },
  components: {
    Signin,
    Signup
  }
};
</script>

<style scoped lang="scss">
@import "../../scss/mixin.scss";

@include customFontFace("sunshiney", "../../fonts/Sunshiney-Regular.ttf");

.topnav {
  background-color: #fff;
  font-family: "sunshiney";
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #7d005a;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  .active {
    color: #7d005a;
    font-size: 28px;
    text-decoration: none;
    padding: 10px 20px;
  }
  .menu {
    a,b-a {
      color: #99b84f;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      font-size: 25px;
      transition: all 0.3s ease;
      position: relative;
      &:hover {
        background-color: #ffffff;
        color: #7d005a;
      }
      span {
        font-family: "sunshiney";
        margin-left: 10px;
      }
      b {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 100;
        padding: 5px;
        border-radius: 50%;
        font-size: 1rem;
        color: #f53030;
        img {
          width: 15px;
          margin-left: 5px;
        }
      }
    }
  }
}

</style>
