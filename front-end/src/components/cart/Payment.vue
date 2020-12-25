<template>
  <div class="body">
    <h1 style="text-align: center;"> Your Cart</h1>
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
      </div>
    </div>
    <form action="#">
        <table>
          <tr>
            <input type="radio" name="payment" id="register_paymentonline" v-model="status" value="true"/>
            <label for="register_gendermale"><strong> Pay with MoMo</strong></label>
            
            <input type="radio" name="payment" id="register_paymentdirect" v-model="status" value="false"/>
            <label for="register_genderfemale"><strong> Pay at ice-cream shop </strong></label>
              
          </tr>
        </table>
        <img src="../../../public/assets/QR.png" alt="Avatar" align="top">
      </form>
    <button class="button button2" @click="buyCream(carts, point)">Confirm</button>
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
      flag: true,
      carts: this.$store.state.user.carts,
      status: null,
      errors: []
    };
  },
  computed: {
    ...mapGetters(["point"]),
  },
  methods: {
    buyCream(carts, point) {
      var self = this
      var cream_ids = []
      carts.forEach((cart) => {
        cream_ids.push(cart.id)
      })
      axios
      .post("http://localhost:3000/cream_purchases", {cream_ids: cream_ids, point: point, status: self.status}, { headers: authHeader() })
      .then(response => {
        router.push("/")
        location.reload()
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
  }
};
</script>

<style scope lang="scss">
  .body {
    font-family: arial;
    color: black;
    padding: auto;
    h1 {
      margin-top: 100px;
    }
  }
  .button {
    border: none;
    color: white;
    padding: 15px 40px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 200px;
    margin-left: 45%;
    cursor: pointer;
  }

  input {
    margin-left: 200px;
  }

  .button1 {background-color: #4CAF50;} /* Green */
  .button2 {background-color: #008CBA;} /* Blue */
  label {
    margin-right: 200px;
    line-height: 100px;
  }
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
  .img-ice img{
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
