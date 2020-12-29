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
          <div v-if="counts[cart.id] >= 2">
            <button class="count" @click="decrementCount(cart)">-</button>
            <div>{{ counts[cart.id] }}</div>
            <button class="count" @click="incrementCount(cart)">+</button>
          </div>
          <div v-if="counts[cart.id] == 1">
            <div class="ticker" :id="cart.id" v-if="flag == true" @click="checked(index)"><i class="far fa-check-square"></i></div>
          </div>
        </div>
      </div>
      <button class="buy" @click="payment">Purchase</button>
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
      errors: []
    };
  },
  computed: {
    ...mapGetters(["point", "carts", "counts"])
  },
  methods: {
    ...mapActions(['incrementCount', 'decrementCount']),
    payment() {
      router.push("payment")
    },
    checked(index) {
      this.$store.dispatch('removeCarts', index);
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
    div .buy {
      margin-top: 40px;
      width: 70px;
      height: 30px;
      background-color: cornflowerblue;
      color: white;
      border-radius: 10%;
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
      div .count {
        width: 70px;
        height: 30px;
        background-color: cornflowerblue;
        color: white;
        border-radius: 10%;
      }
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
  .point-img img{
      height: 13px;
      padding-left: 1px;
  }
</style>
