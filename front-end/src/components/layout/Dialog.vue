<template>
  <div class="wrapperDialog" @click="toggleDialog">
    <div class="dialog" @click.stop="">
      <h1 class="dialog__title" v-if="confirm">Confirm resquest connection</h1>
      <div class="dialog__info" v-if="accept">
        <img :src="account.image" alt="avatar" class="dialog__info__image">
        <div class="dialog__info_description">
          <br>
          <h3>Information</h3>
          <p>Name: {{account.name}}</p>
          <p>Age: {{account.age}}</p>
          <p>Work: {{account.work}}</p>
          <p>Location: {{account.location}}</p>
          <p>Fb: {{account.facebook}}</p>
          <p>Zalo: {{account.zalo}}</p>
          <p>Phone: {{account.phone}}</p>
        </div>
      </div>
      <button class="dialog__connection btn" @click="connection" v-if="confirm">Connection</button>
      <button class="dialog__cancel btn" @click="toggleDialog">Cancel</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
 data() {
   return {

   }
 },
 computed: {
   ...mapGetters(['accept', 'confirm', 'account'])
 },
 methods: {
   ...mapActions(['toggleAccept', 'toggleDialog', 'connection'])
 }
}
</script>

<style lang="scss" scoped>
  .wrapperDialog {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0 , .6);
    z-index: 1001;
    .dialog {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 1000;
      transform: translate(-50%, -50%);
      background: #FFF;
      border: 1px solid #e6e6e6;
      border-radius: 10px;
      padding: 20px;
      &__title {
        font-size: 20px;
        text-align: center;
        margin-bottom: 20px;
      }
      .btn {
        padding: 10px 20px;
        outline: none;
        border-radius: 10px;
        color: #FFF;
      }
      &__info {
        &__image {
          width: 300px;
        }
      }
      &__connection {
        background: rgb(32, 189, 1);
        transition: all .3s ease;
        border: 1px solid  rgb(32, 189, 1);
        &:hover {
          background: #FFF;
          color: rgb(32, 189, 1);
        }
      }
      &__cancel {
        background: rgb(247, 58, 58);
        transition: all .3s ease;
        border: 1px solid  rgb(247, 58, 58);
        &:hover {
          background: #FFF;
          color: rgb(247, 58, 58);
        }
      }
    }
  }
</style>
