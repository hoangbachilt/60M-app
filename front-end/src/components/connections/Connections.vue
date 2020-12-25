<template>
  <div class="connections">
    <h1 class="headline">your connetions</h1>
    <div class="wrapper-connections">
      <div class="connection" v-for="(data, index) in listData" :key="index">
        <img :src="data.image" alt="" class="connection__image">
        <div class="connection__detail">
          <h2 class="connection__detail__title">information</h2>
          <div class="connection__detail__name">Name: {{data.name}}</div>
          <div class="connection__detail__age">Age: {{data.age}}</div>
          <div class="connection__detail__work">Work: {{data.work}}</div>
          <div class="connection__detail__location">Location: {{data.location}}</div>
          <button class="connection__detail__btn" @click="toggleAccept(data)">accept request</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      listData: this.$store.state.listData
    }
  },
  methods: {
    ...mapActions(['toggleAccept'])
  }
}
</script>

<style scoped lang='scss'>
  @import '../../scss/mixin.scss';

  @include customFontFace('roboto', '../../fonts/Roboto-Regular.ttf');
  @include customFontFace('sunshiney', '../../fonts/Sunshiney-Regular.ttf');

  .connections {
    max-width: 70%;
    margin: auto;
    .headline {
      @include customFont(30px, 'sunshiney');
      text-transform: capitalize;
      text-align: center;
      padding-top: 100px;
      margin: 0 70px 70px 70px;
      position: relative;
      &::after {
        content: '';
        @include customPosition(absolute, 43px, 319px, 1, 230px, 2px, true);
        background: $colorGray;
      }
    }
    .wrapper-connections {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .connection {
        width: 48%;
        display: flex;
        margin-bottom: 50px;
        border: 1px solid $colorBorder;
        border-radius: 5px;
        box-sizing: border-box;
        &__image {
          width: 45%;
        }
        &__detail {
          padding: 10px 20px;
          &__title {
            @include customFont(22px, 'roboto');
            text-transform: capitalize;
            margin-bottom: 10px;
          }
          &__name, &__age, &__work, &__location {
            @include customFont(18px, 'roboto');
            margin-bottom: 3px;
          }
          &__btn {
            padding: 10px 20px;
            text-transform: capitalize;
            border: 1px solid $colorPrimary;
            background: $colorPrimary;
            color: $colorWhite;
            border-radius: 5px;
            transition: all .3s ease;
            &:hover {
              color: $colorPrimary;
              background: $colorWhite;
              transition: all .3s ease;
            }
          }
        }
      }
    }
  }
</style>
