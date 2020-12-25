<template>
  <section>
    <div class="background">
      <h2 class="background__text">
        It's great to see you here!
        <br />
        Why not get an Ice Cream from us and take a
        chance to get new friends or your lover!
        <p>You can also create a flavour ice cream in your own way for now!</p>
      </h2>
    </div>
    <div class="products">
      <div class="products__headline">
        smoothies & ice creams
      </div>
      <div class="wrapper-product">
        <div class="product" v-for="(product, index) in products" :key="index" @click="updateCart(product)" >
          <img :src="product.image_name" alt="" class="product__image" >
          <div class="box">
            <div class="product__name">{{product.name}}</div>
            <div class="product__point">
              <img src="../../assets/icecream.svg" alt="" class="product__point__icon">
              {{product.point}}
            </div>
            <div class="product__pay">{{new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'VND' }).format(product.price)}}</div>
            <button class="buy">Buy</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios"
import { mapActions } from 'vuex'
import authHeader from '../../services/auth-header'

export default {
  name: "home",
  data() {
    return {
      products: [],
      errors: []
    };
  },
  created() {
    this.cream();
  },
  methods: {
    ...mapActions(['updateCart']),
    cream() {
      axios
      .get("http://localhost:3000/creams", { headers: authHeader() })
      .then(response => {
        this.products = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
};
</script>

<style scoped lang="scss">
  @import '../../scss/mixin.scss';

  @include customFontFace('roboto', '../../fonts/Roboto-Regular.ttf');
  @include customFontFace('sunshiney', '../../fonts/Sunshiney-Regular.ttf');

  .background {
    background: url('../../assets/Background.jpg') center no-repeat;
    height: 438px;
    margin-top: 63px;
    &__text {
      @include customFont(22px, 'roboto');
      padding: 184px 0 0 82px;
      color: #ffffff;
      width: 536px;
      p {
        margin-top: 10px;
      }
    }
  }
  .products {
    max-width: 70%;
    margin: auto;
    &__headline {
      @include customFont(30px, 'sunshiney');
      text-transform: capitalize;
      margin: 70px;
      text-align: center;
      text-decoration: underline;
    }
    .wrapper-product {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-bottom: 70px;
      .product {
        width: 22%;
        box-sizing: border-box;
        cursor: pointer;
        &__image {
          width: 100%;
        }
        .box {
          border: 1px solid $colorPink;
          border-top: none;
          border-bottom-left-radius: 3px;
          border-bottom-right-radius: 3px;
          padding: 10px 20px;
          .buy {
            align-items: center;
            margin-left: 40%;
            background-color: #4CAF50;
          }
        }
        &__name {
          @include customFont(20px, 'roboto');
          text-transform: capitalize;
          text-align: center;
        }
        &__point {
          @include customFont(18px, 'roboto');
          text-align: center;
          margin: 5px 0;
          &__icon {
            height: 18px;
          }
        }
        &__pay {
          text-align: center;
          @include customFont(18px, 'roboto');
          color: $colorOrange;
        }
      }
    }
  }
</style>
