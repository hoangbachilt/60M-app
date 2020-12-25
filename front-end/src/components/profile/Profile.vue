<template>
  <div id="e189_12">
    <div id="e189_13"></div>
    <div id="e192_0"></div>
    <div id="e192_7">
      <span id="e192_6">Update Profile Picture</span><span id="e192_5">{{ user.full_name }}</span>
      <div id="e192_3"><img :src="'../../../public/assets/' + image_url" alt=""></div>
    </div>
    <div id="e189_25">
      <span id="e189_27">{{ user.point }}</span><span id="e192_2">Date Point</span>
      <div id="e189_28"><img src="../../assets/Point.png" alt="point"></div>
    </div>
    <div id="e192_9"><span id="e192_11">Full name</span><span id="e192_13">{{ user.full_name }}</span></div>
    <div id="e192_17"><span id="e192_18">Phone number</span><span id="e192_19">{{ user.tel }}</span></div>
    <div id="e192_14"><span id="e192_15">Age </span><span id="e192_16">{{ user.age }}</span></div>
    <div id="e192_20"><span id="e192_21">Gender</span><span id="e192_22">{{ user.sex }}</span></div>
    <div id="e192_23"><span id="e192_24">Location </span><span id="e192_25">Hanoi</span></div>
    <div id="e192_32"><span id="e192_33">About</span><span id="e192_34">{{ user.information }}</span></div>
    <div id="e192_26"><span id="e192_27">Facebook </span><span id="e192_28">{{ user.link_fb }}</span></div>
    <span id="e189_26">Your profile</span>
    <div id="e192_35">
      <div id="e192_36"></div>
      <router-link :to="{ name: 'edit' }">
        <span id="e192_37">Edit</span></router-link
      >
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import axios from 'axios'
import authHeader from '../../services/auth-header'

export default {
 data() {
   return {
    image_url: null,
    user: null,
    errors: []
   }
 },
 created() {
  let self = this
  axios
  .get(`http://localhost:3000/users/${JSON.parse(localStorage.getItem("token")).user.id}`, { headers: authHeader() })
  .then(response => {
    self.user = response.data.user
    var array = response.data.image_url.split("/")
    self.image_url = array[array.length - 1]
  })
 },
 computed: {
   ...mapGetters(['accept', 'confirm', 'account'])
 },
 methods: {
   ...mapActions(['toggleAccept', 'toggleDialog', 'connection'])
 }
};
</script>

<style scoped lang="scss">
  @import "../../scss/mixin.scss";
  @include customFontFace('roboto', '../../fonts/Roboto-Regular.ttf');
  @include customFontFace('sunshiney', '../../fonts/Sunshiney-Regular.ttf');

  #e189_12 { 
    overflow:hidden;
    background-color:rgba(255, 255, 255, 1);
    opacity:1;
    width:1440px;
    height:996px;
    position:absolute;
  }
  #e189_13 { 
    background-color:rgba(255, 255, 255, 1);
    opacity:1;
    width:1440px;
    height:900px;
    position:absolute;
    left:0px;
    top:96px;
  }
  #e192_0 { 
    background-color:rgba(255, 255, 255, 1);
    opacity:1;
    border:1px solid rgba(142.37500101327896, 142.37500101327896, 142.37500101327896, 1);
    width:718px;
    height:776px;
    position:absolute;
    left:361px;
    top:176px;
  }
  #e192_7 { 
    opacity:1;
    width:302px;
    height:81px;
    position:absolute;
    left:596px;
    top:227px;
  }
  #e192_6 { 
    color:rgba(113.15624848008156, 144.83998954296112, 226.31249696016312, 1);
    opacity:1;
    width:194px;
    height:23px;
    position:absolute;
    left:108px;
    top:36px;
    font-family:roboto;
    text-align:left;
    font-size:20px;
    letter-spacing:0;
    line-height:undefined;
  }
  #e192_5 { 
    color:rgba(0, 0, 0, 1);
    opacity:1;
    width:200px;
    height:26px;
    position:absolute;
    left:108px;
    top:4px;
    font-family:roboto;
    text-align:left;
    font-size:22px;
    letter-spacing:0;
    line-height:undefined;
  }
  #e192_3 { 
    border-radius:500px;
    opacity:1;
    border:0.4000000059604645px solid rgba(0, 0, 0, 1);
    width:81px;
    height:81px;
    position:absolute;
    left:0px;
    top:0px;
    background-repeat:no-repeat;
    background-size:cover;
    img {
      height: 100%;
      width: 100%;
      border-radius: 500px;
    }
  }
  #e189_25 { 
    opacity:1;
    width:299px;
    height:28px;
    position:absolute;
    left:579px;
    top:357px;
  }
  #e189_27 { 
    color:rgba(255, 137.7000054717064, 0, 1);
    opacity:1;
    width:23px;
    height:23px;
    position:absolute;
    left:237px;
    top:3px;
    font-family:roboto;
    text-align:center;
    font-size:20px;
    letter-spacing:0;
    line-height:undefined;
  }
  #e192_2 { 
    color:rgba(0, 0, 0, 1);
    opacity:1;
    width:93px;
    height:23px;
    position:absolute;
    left:0px;
    top:5px;
    font-family:roboto;
    text-align:left;
    font-size:20px;
    letter-spacing:0;
    line-height:undefined;
  }
  #e189_28 { 
    opacity:1;
    width:33px;
    height:28px;
    position:absolute;
    left:266px;
    top:0px;
    background-repeat:no-repeat;
    background-size:cover;
  }
  #e192_9 { 
    opacity:1;
    width:294px;
    height:27px;
    position:absolute;
    left:579px;
    top:404px;
  }
  #e192_11 { 
    color:rgba(0, 0, 0, 1);
    opacity:1;
    width:119px;
    height:23px;
    position:absolute;
    left:0px;
    top:4px;
    font-family:roboto;
    text-align:left;
    font-size:20px;
    letter-spacing:0;
    line-height:undefined;
  }
  #e192_13 { 
    color:rgba(0, 0, 0, 1);
    opacity:1;
    width:200px;
    height:23px;
    position:absolute;
    left:240px;
    top:0px;
    font-family:roboto;
    text-align:left;
    font-size:20px;
    letter-spacing:0;
    line-height:undefined;
  }
  #e192_17 { 
    opacity:1;
    width:350px;
    height:23px;
    position:absolute;
    left:579px;
    top:457px;
  }
  #e192_18 { 
    color:rgba(0, 0, 0, 1);
    opacity:1;
    width:140px;
    height:23px;
    position:absolute;
    left:0px;
    top:0px;
    font-family:roboto;
    text-align:left;
    font-size:20px;
    letter-spacing:0;
    line-height:undefined;
  }
  #e192_19 { 
    color:rgba(0, 0, 0, 1);
    opacity:1;
    width:113px;
    height:23px;
    position:absolute;
    left:237px;
    top:0px;
    font-family:roboto;
    text-align:left;
    font-size:20px;
    letter-spacing:0;
    line-height:undefined;
  }
  #e192_14 { 
    opacity:1;
    width:263px;
    height:23px;
    position:absolute;
    left:579px;
    top:501px;
  }
  #e192_15 { 
    color:rgba(0, 0, 0, 1);
    opacity:1;
    width:90px;
    height:23px;
    position:absolute;
    left:0px;
    top:0px;
    font-family:roboto;
    text-align:left;
    font-size:20px;
    letter-spacing:0;
    line-height:undefined;
  }
  #e192_16 { 
    color:rgba(0, 0, 0, 1);
    opacity:1;
    width:23px;
    height:23px;
    position:absolute;
    left:240px;
    top:0px;
    font-family:roboto;
    text-align:left;
    font-size:20px;
    letter-spacing:0;
    line-height:undefined;
  }
  #e192_20 { 
    opacity:1;
    width:306px;
    height:24px;
    position:absolute;
    left:579px;
    top:554px;
  }
  #e192_21 { 
    color:rgba(0, 0, 0, 1);
    opacity:1;
    width:90px;
    height:23px;
    position:absolute;
    left:0px;
    top:1px;
    font-family:roboto;
    text-align:left;
    font-size:20px;
    letter-spacing:0;
    line-height:undefined;
  }
  #e192_22 { 
    color:rgba(0, 0, 0, 1);
    opacity:1;
    width:66px;
    height:23px;
    position:absolute;
    left:240px;
    top:0px;
    font-family:roboto;
    text-align:left;
    font-size:20px;
    letter-spacing:0;
    line-height:undefined;
  }
  #e192_23 { 
    opacity:1;
    width:293px;
    height:23px;
    position:absolute;
    left:579px;
    top:606px;
  }
  #e192_24 { 
    color:rgba(0, 0, 0, 1);
    opacity:1;
    width:90px;
    height:23px;
    position:absolute;
    left:0px;
    top:0px;
    font-family:roboto;
    text-align:left;
    font-size:20px;
    letter-spacing:0;
    line-height:undefined;
  }
  #e192_25 { 
    color:rgba(0, 0, 0, 1);
    opacity:1;
    width:53px;
    height:23px;
    position:absolute;
    left:240px;
    top:0px;
    font-family: roboto;
    text-align:left;
    font-size:20px;
    letter-spacing:0;
    line-height:undefined;
  }
  #e192_32 { 
    opacity:1;
    width:369px;
    height:23px;
    position:absolute;
    left:575px;
    top:708px;
  }
  #e192_33 { 
    color:rgba(0, 0, 0, 1);
    opacity:1;
    width:90px;
    height:23px;
    position:absolute;
    left:0px;
    top:0px;
    font-family:roboto;
    text-align:left;
    font-size:20px;
    letter-spacing:0;
    line-height:undefined;
  }
  #e192_34 { 
    color:rgba(0, 0, 0, 1);
    opacity:1;
    width:129px;
    height:23px;
    position:absolute;
    left:240px;
    top:0px;
    font-family:roboto;
    text-align:left;
    font-size:20px;
    letter-spacing:0;
    line-height:undefined;
  }
  #e192_26 { 
    opacity:1;
    width:352px;
    height:23px;
    position:absolute;
    left:579px;
    top:657px;
  }
  #e192_27 { 
    color:rgba(0, 0, 0, 1);
    opacity:1;
    width:90px;
    height:23px;
    position:absolute;
    left:0px;
    top:0px;
    font-family:roboto;
    text-align:left;
    font-size:20px;
    letter-spacing:0;
    line-height:undefined;
  }
  #e192_28 { 
    color:rgba(46.75000101327896, 105.06000012159348, 255, 1);
    opacity:1;
    width:112px;
    height:21px;
    position:absolute;
    left:240px;
    top:0px;
    font-family:roboto;
    text-align:left;
    font-size:18px;
    letter-spacing:0;
    line-height:undefined;
  }
  #e189_26 { 
    color:rgba(0, 0, 0, 1);
    opacity:1;
    width:167px;
    height:38px;
    position:absolute;
    left:660px;
    top:121px;
    font-family:roboto;
    text-align:left;
    font-size:32px;
    letter-spacing:0;
    line-height:undefined;
  }
  #e192_35 { 
    opacity:1;
    width:144px;
    height:41.14285659790039px;
    position:absolute;
    left:684px;
    top:841px;
  }
  #e192_36 { 
    background-color:rgba(113.15624848008156, 144.83998954296112, 226.31249696016312, 1);
    opacity:1;
    width:144px;
    height:41.14285659790039px;
    position:absolute;
    left:0px;
    top:0px;
    border-top-left-radius:5px;
    border-top-right-radius:5px;
    border-bottom-left-radius:5px;
    border-bottom-right-radius:5px;
  }
  #e192_37 { 
    color:rgba(255, 255, 255, 1);
    opacity:1;
    width:118.54884338378906px;
    height:13.925274848937988px;
    position:absolute;
    left:14.1962890625px;
    top:12.724761962890625px;
    font-family:roboto;
    text-align:center;
    font-size:14px;
    letter-spacing:0;
    line-height:undefined;
  }
</style>
