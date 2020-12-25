<template>
  <div class="body-cart">
    <div v-if="carts.length">
      <h1>Your cart</h1>
      <div class="content">
        <div class="component-cart" v-for="(cart, index) in carts" :key="index">
          <div class="img-ice">
            <img :src="cart.image_name" alt="" class="product__image" >
          </div>
          <div class="cart-content">
          <p class="name-ice">{{ cart.name }}</p>
          <span class="point">{{ cart.point }}</span><span class="point-img"><img src="../../assets/Point.png" alt="point"></span>
          <p class="price">{{new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'VND' }).format(cart.price)}}</p>
          </div>
          <div class="ticker" :id="cart.id" v-if="flag == true" @click="checked"><i class="far fa-check-square"></i></div>
          <div class="ticker" :id="cart.id" v-if="flag == false" @click="checked"><i class="far fa-square"></i></div>
        </div>
      </div>
      <button @click="payment">Purchase</button>
    </div>
    <h2 v-else>Your cart empty</h2>
  </div>
</template>

<script>
import axios from "axios"
import { mapActions, mapGetters } from 'vuex'
import authHeader from '../../services/auth-header'
import router from '../../router'

export default {
  name: "home",
  data() {
    return {
      products: [],
      flag: true,
      carts: this.$store.state.user.carts,
      errors: []
    };
  },
  computed: {
    ...mapGetters(["point"]),
  },
  methods: {
    payment() {
      router.push("payment")
    },
    checked() {
      if (this.flag == true) {
        this.flag = false
      } else {
        this.flag = true
      }
    }
  }
};
</script>

<style scoped lang="scss">
  @import '../../scss/mixin.scss';
  .body-cart{
    margin: auto;
    text-align: center;
    min-width: 50%;
    h2 {
      margin-top: 100px;
    }
  }
  .content{
      margin-top: 30px;
  }
  .component-cart{
      margin: auto;
      width: 40%;
      display: flex;
      justify-content: space-between;
      border: 1px solid pink;
      padding: 20px;
      align-items: center;
      max-height: 120px;
      margin-top: 20px;
      border-radius: 1%;
  }
  .cart-content{
      width: 100%;
      text-align: left;
      padding-left: 20px;
  }
  img{
      height: 120px;
  }
  .ticker{
      font-size: 30px;
      align-items: center;
      color: #99b84f;
  }
  .point{
      padding-left: 15px;
      color: #ffcb8e;
  }
  .price{
      color: #ffcb8e;
  }
  button{
      margin-top: 40px;
      width: 70px;
      height: 30px;
      background-color: cornflowerblue;
      color: white;
      border-radius: 10%;
  }
  .point-img img{
      height: 13px;
      padding-left: 1px;
  }
</style>
