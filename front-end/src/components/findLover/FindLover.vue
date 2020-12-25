<template>
  <div class="find-lover">
    <div class="container">
        <div class="row mt-5">
            <h4 class="mx-auto">
                Your ice cream points
            </h4>
        </div>
        <div class="row">
            <h2 class="mx-auto">
                <img class="pr-2" src="../../assets/icecream.svg" alt="ice-cream-point" height="30"> {{point}}
            </h2>
        </div>
        <div class="row mt-5">
            <div class="col-sm-4">
                <div class="row">
                    <h5>What you want your lover to be like?</h5>
                </div>
                <div class="row">
                    <h5 class="col-sm-3">Age</h5>
                    <form class="col-sm-9 row">
                        <label for="ageFrom" class="col-sm-2 col-form-label">From</label>
                        <div class="col-sm-4">
                            <input type="number" class="form-control" id="ageFrom" v-model="firstAge" >
                        </div>
                        <label for="ageTo" class="col-sm-2 col-form-label">to</label>
                        <div class="col-sm-4">
                            <input type="number" class="form-control" id="ageTo" v-model="lastAge">
                        </div>
                    </form>
                </div>
                <div class="row mt-3">
                    <h5 class="col-sm-3">Location</h5>
                    <form class="col-sm-9 row">
                        <div class="col-sm-12">
                            <input type="text" class="form-control" id="ageFrom" v-model="location" name="location">
                        </div>
                        <p>{{location}}</p>
                    </form>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="row">
                    <button type="button" class="btn btn-outline-danger btn-lg mx-auto pr-5 pl-5" v-if="point > 0" @click="onFindYourLove">
                        <div class="row">Find your lover</div>
                        <h4 class="mx-auto">
                            <img class="pr-2" src="../../assets/icecream.svg" alt="ice-cream-point" height="20"> 1
                        </h4>
                    </button>
                </div>
            </div>
            <div class="col-sm-4" v-if="randomData && point >= 0">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="row">
                            <img :src="randomData.image" alt="ava" class="img-thumbnail">
                        </div>
                        <div class="row">
                            <button type="button" class="btn btn-primary btn-block mt-3" @click="toggleConfirm" v-if="!connection">Request Connection</button>
                            <button type="button" class="btn btn-primary btn-block mt-3" v-if="connection">Request Sent</button>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <h3>Information</h3> <br>
                        <p>Name: {{randomData.name}}</p>
                        <p>Age: {{randomData.age}}</p>
                        <p>Work: {{randomData.work}}</p>
                        <p>Location: {{randomData.location}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      firstAge: 0,
      lastAge: 0,
      location: '',
      randomData: null
    }
  },
  computed: {
    ...mapGetters(['point', 'confirm', 'connection'])
  },
  methods: {
    onFindYourLove(){
      this.$store.dispatch('setData', {
        firstAge: this.firstAge,
        lastAge: this.lastAge,
        location: this.location.toLowerCase()
      })
      this.randomData = this.$store.getters.data[Math.round(Math.random() * (this.$store.getters.data.length - 1))]
      this.$store.commit('decrementPoint')
    },
    ...mapActions(['toggleConfirm'])
  }
}
</script>

<style scoped lang="scss">
  @import '../../scss/mixin.scss';

  @include customFontFace('sunshiney', '../../fonts/Sunshiney-Regular.ttf');

  .find-lover, h1,h2,h3,h4,h5,h6 {
    font-family: 'sunshiney';
  }
  .find-lover {
    padding-top: 90px;
  }
</style>
