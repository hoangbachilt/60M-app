<template>
  <div id="e241_113">
    <div id="e241_114"></div>
    <div id="e241_115"><p v-if="errors.length">
      <ul>
        <li v-for="error in errors" :key="error.id">{{ error }}</li>
      </ul>
    </p></div>
    <div id="e241_116">
      <span id="e241_117">Update Profile Picture</span><span id="e241_118">{{ user.full_name }}</span>
      <div id="e241_119"><img :src="'../../../public/assets/' + image_url" alt=""></div>
    </div>
    <div id="e241_120">
      <span id="e241_121">{{ user.point }}</span><span id="e241_122">Date Point</span>
      <div id="e241_123"><img src="../../assets/Point.png" alt="point"></div>
    </div>
    <div id="e241_124"><span id="e241_125">Full name</span>
      <input type="text" v-model="full_name" :palaceholder="user.full_name" id="e241_126" />
    </div>
    <div id="e241_127"><span id="e241_128">Phone number</span>
      <input type="number" v-model="tel" :palaceholder="user.tel" id="e241_129" />
    </div>
    <div id="e241_130"><span id="e241_131">Age</span>
      <input type="number" v-model="age" :palaceholder="user.age" id="e241_132" />
    </div>
    <div id="e241_133"><span id="e241_134">Gender</span>
      <select v-model="sex" id="e241_135">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>
    <div id="e241_136"><span id="e241_137">Location </span><span id="e241_138">Hanoi</span></div>
    <div id="e241_139"><span id="e241_140">About</span>
      <input type="text" :palaceholder="user.information" v-model="information" id="e241_141" />
    </div>
    <div id="e241_142"><span id="e241_143">Facebook </span>
      <input type="text" v-model="link_fb" :palaceholder="user.link_fb" id="e241_144" />
    </div>
    <span id="e241_145">Your profile</span>
    <div id="e241_159">
      <div id="e241_160"></div>
      <span id="e241_161" @click="save">Save</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import authHeader from '../../services/auth-header'
import router from '../../router'

export default {
 data() {
   return {
    image_url: null,
    user: null,
    full_name: null,
    tel: null,
    age: null,
    sex: null,
    information: null,
    link_fb: null,
    errors: []
   }
 },
 created() {
  axios
  .get(`http://localhost:3000/users/${JSON.parse(localStorage.getItem("token")).user.id}`, { headers: authHeader() })
  .then(response => {
    this.user = response.data.user
    this.full_name = response.data.user.full_name
    this.tel = response.data.user.tel
    this.age = response.data.user.age
    this.sex = response.data.user.sex
    this.information = response.data.user.information
    this.link_fb = response.data.user.link_fb
    var array = response.data.image_url.split("/")
    this.image_url = array[array.length - 1]
  })
 },
 methods: {
  save() {
    let self = this;
    const params = {
      edit_params: {
        full_name: this.full_name,
        tel: this.tel,
        age: this.age,
        sex: this.sex,
        information: this.information,
        link_fb: this.link_fb
      }
    }
    axios
    .put(`http://localhost:3000/users/${JSON.parse(localStorage.getItem("token")).user.id}`, params, { headers: authHeader() })
    .then(response => {
      router.push("profile")
      location.reload()
    })
    .catch(e => {
      self.errors = JSON.parse(e.response.data.message);
    })
  }
 }
};
</script>

<style scoped lang="scss">
  #e241_113 { 
    overflow:hidden;
    background-color:rgba(255, 255, 255, 1);
    opacity:1;
    width:1440px;
    height:996px;
    position:absolute;
  }
  #e241_114 { 
    background-color:rgba(255, 255, 255, 1);
    opacity:1;
    width:1440px;
    height:900px;
    position:absolute;
    left:0px;
    top:96px;
  }
  #e241_115 { 
    background-color:rgba(255, 255, 255, 1);
    opacity:1;
    border:1px solid rgba(142.37500101327896, 142.37500101327896, 142.37500101327896, 1);
    width:718px;
    height:776px;
    position:absolute;
    left:361px;
    top:176px;
  }
  #e241_116 { 
    opacity:1;
    width:302px;
    height:81px;
    position:absolute;
    left:596px;
    top:227px;
  }
  #e241_117 { 
    color:rgba(113.15624848008156, 144.83998954296112, 226.31249696016312, 1);
    opacity:1;
    width:194px;
    height:23px;
    position:absolute;
    left:108px;
    top:32px;
    font-family:Roboto;
    text-align:left;
    font-size:20px;
    letter-spacing:0;
    line-height:undefined;
  }
  #e241_118 { 
    color:rgba(0, 0, 0, 1);
    opacity:1;
    width:200px;
    height:23px;
    position:absolute;
    left:108px;
    top:5px;
    font-family:Roboto;
    text-align:left;
    font-size:20px;
    letter-spacing:0;
    line-height:undefined;
  }
  #e241_119 { 
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
      width: 100%;
      height: 100%;
      border-radius: 500px;
    }
  }
  #e241_120 { 
    opacity:1;
    width:299px;
    height:30px;
    position:absolute;
    left:579px;
    top:355px;
  }
  #e241_121 { 
    color:rgba(255, 137.7000054717064, 0, 1);
    opacity:1;
    width:23px;
    height:23px;
    position:absolute;
    left:237px;
    top:5px;
    font-family:Roboto;
    text-align:center;
    font-size:20px;
    letter-spacing:0;
    line-height:undefined;
  }
  #e241_122 { 
    color:rgba(0, 0, 0, 1);
    opacity:1;
    width:93px;
    height:23px;
    position:absolute;
    left:0px;
    top:0px;
    font-family:Roboto;
    text-align:left;
    font-size:20px;
    letter-spacing:0;
    line-height:undefined;
  }
  #e241_123 { 
    opacity:1;
    width:33px;
    height:28px;
    position:absolute;
    left:266px;
    top:2px;
    background-repeat:no-repeat;
    background-size:cover;
  }
  #e241_124 { 
    opacity:1;
    width:294px;
    height:23px;
    position:absolute;
    left:579px;
    top:406px;
  }
  #e241_125 { 
    color:rgba(0, 0, 0, 1);
    opacity:1;
    width:90px;
    height:23px;
    position:absolute;
    left:0px;
    top:0px;
    font-family:Roboto;
    text-align:left;
    font-size:20px;
    letter-spacing:0;
    line-height:undefined;
  }
  #e241_126 { 
    color:rgba(0, 0, 0, 1);
    opacity:1;
    width:200px;
    height:23px;
    position:absolute;
    left:240px;
    top:0px;
    font-family:Roboto;
    text-align:left;
    font-size:20px;
    letter-spacing:0;
    line-height:undefined;
  }
  #e241_127 { 
    opacity:1;
    width:353px;
    height:23px;
    position:absolute;
    left:579px;
    top:457px;
  }
  #e241_128 { 
    color:rgba(0, 0, 0, 1);
    opacity:1;
    width:140px;
    height:23px;
    position:absolute;
    left:0px;
    top:0px;
    font-family:Roboto;
    text-align:left;
    font-size:20px;
    letter-spacing:0;
    line-height:undefined;
  }
  #e241_129 { 
    color:rgba(0, 0, 0, 1);
    opacity:1;
    width:150px;
    height:23px;
    position:absolute;
    left:240px;
    top:0px;
    font-family:Roboto;
    text-align:left;
    font-size:20px;
    letter-spacing:0;
    line-height:undefined;
  }
  #e241_130 { 
    opacity:1;
    width:263px;
    height:24px;
    position:absolute;
    left:579px;
    top:506px;
  }
  #e241_131 { 
    color:rgba(0, 0, 0, 1);
    opacity:1;
    width:90px;
    height:23px;
    position:absolute;
    left:0px;
    top:0px;
    font-family:Roboto;
    text-align:left;
    font-size:20px;
    letter-spacing:0;
    line-height:undefined;
  }
  #e241_132 { 
    color:rgba(0, 0, 0, 1);
    opacity:1;
    width:50px;
    height:23px;
    position:absolute;
    left:240px;
    top:1px;
    font-family:Roboto;
    text-align:left;
    font-size:20px;
    letter-spacing:0;
    line-height:undefined;
  }
  #e241_133 { 
    opacity:1;
    width:306px;
    height:26px;
    position:absolute;
    left:579px;
    top:559px;
  }
  #e241_134 { 
    color:rgba(0, 0, 0, 1);
    opacity:1;
    width:90px;
    height:23px;
    position:absolute;
    left:0px;
    top:3px;
    font-family:Roboto;
    text-align:left;
    font-size:20px;
    letter-spacing:0;
    line-height:undefined;
  }
  #e241_135 { 
    color:rgba(0, 0, 0, 1);
    opacity:1;
    width:66px;
    height:23px;
    position:absolute;
    left:240px;
    top:0px;
    font-family:Roboto;
    text-align:left;
    font-size:20px;
    letter-spacing:0;
    line-height:undefined;
  }
  #e241_136 { 
    opacity:1;
    width:293px;
    height:24px;
    position:absolute;
    left:579px;
    top:610px;
  }
  #e241_137 { 
    color:rgba(0, 0, 0, 1);
    opacity:1;
    width:90px;
    height:23px;
    position:absolute;
    left:0px;
    top:1px;
    font-family:Roboto;
    text-align:left;
    font-size:20px;
    letter-spacing:0;
    line-height:undefined;
  }
  #e241_138 { 
    color:rgba(0, 0, 0, 1);
    opacity:1;
    width:53px;
    height:23px;
    position:absolute;
    left:240px;
    top:0px;
    font-family:Roboto;
    text-align:left;
    font-size:20px;
    letter-spacing:0;
    line-height:undefined;
  }
  #e241_139 { 
    opacity:1;
    width:369px;
    height:24px;
    position:absolute;
    left:575px;
    top:713px;
  }
  #e241_140 { 
    color:rgba(0, 0, 0, 1);
    opacity:1;
    width:90px;
    height:23px;
    position:absolute;
    left:0px;
    top:0px;
    font-family:Roboto;
    text-align:left;
    font-size:20px;
    letter-spacing:0;
    line-height:undefined;
  }
  #e241_141 { 
    color:rgba(0, 0, 0, 1);
    opacity:1;
    width:200px;
    height:23px;
    position:absolute;
    left:240px;
    top:1px;
    font-family:Roboto;
    text-align:left;
    font-size:20px;
    letter-spacing:0;
    line-height:undefined;
  }
  #e241_142 { 
    opacity:1;
    width:352px;
    height:27px;
    position:absolute;
    left:579px;
    top:657px;
  }
  #e241_143 { 
    color:rgba(0, 0, 0, 1);
    opacity:1;
    width:90px;
    height:23px;
    position:absolute;
    left:0px;
    top:4px;
    font-family:Roboto;
    text-align:left;
    font-size:20px;
    letter-spacing:0;
    line-height:undefined;
  }
  #e241_144 { 
    color:rgba(46.75000101327896, 105.06000012159348, 255, 1);
    opacity:1;
    width:200px;
    height:21px;
    position:absolute;
    left:240px;
    top:0px;
    font-family:Roboto;
    text-align:left;
    font-size:18px;
    letter-spacing:0;
    line-height:undefined;
  }
  #e241_145 { 
    color:rgba(0, 0, 0, 1);
    opacity:1;
    width:167px;
    height:38px;
    position:absolute;
    left:666px;
    top:118px;
    font-family:Roboto;
    text-align:left;
    font-size:32px;
    letter-spacing:0;
    line-height:undefined;
  }
  #e241_146 { 
    box-shadow:6px 4px 4px rgba(0, 0, 0, 0.25);
    opacity:1;
    width:1440px;
    height:98px;
    position:absolute;
    left:0px;
    top:0px;
  }
  #e241_147 { 
    background-color:rgba(255, 255, 255, 1);
    opacity:1;
    width:1440px;
    height:98px;
    position:absolute;
    left:0px;
    top:0px;
  }
  #e241_148 { 
    opacity:1;
    width:127px;
    height:40px;
    position:absolute;
    left:1277px;
    top:28px;
  }
  #e241_149 { 
    background-color:rgba(255, 255, 255, 1);
    opacity:1;
    width:40px;
    height:40px;
    position:absolute;
    left:0px;
    top:0px;
  }
  #ei241_149_1_20 { 
    background-color:rgba(153.00000607967377, 184.00000423192978, 79.00000289082527, 1);
    opacity:1;
    width:40px;
    height:40px;
    position:absolute;
    left:0px;
    top:0px;
  }
  #e241_150 { 
    color:rgba(0, 0, 0, 1);
    opacity:1;
    width:71px;
    height:21px;
    position:absolute;
    left:56px;
    top:8px;
    font-family:Roboto;
    text-align:left;
    font-size:18px;
    letter-spacing:0;
    line-height:undefined;
  }
  #e241_151 { 
    opacity:1;
    width:108px;
    height:45px;
    position:absolute;
    left:981px;
    top:26px;
  }
  #e241_152 { 
    background-color:rgba(255, 255, 255, 1);
    opacity:1;
    width:45px;
    height:45px;
    position:absolute;
    left:0px;
    top:0px;
  }
  #ei241_152_2_5 { 
    opacity:1;
    width:45px;
    height:45px;
    position:absolute;
    left:0px;
    top:0px;
  }
  #ei241_152_2_6 { 
    background-color:rgba(153.00000607967377, 184.00000423192978, 79.00000289082527, 1);
    opacity:1;
    width:37.5px;
    height:34.40625px;
    position:absolute;
    left:3.75px;
    top:5.625px;
  }
  #e241_153 { 
    color:rgba(0, 0, 0, 1);
    opacity:1;
    width:52px;
    height:21px;
    position:absolute;
    left:56px;
    top:10px;
    font-family:Roboto;
    text-align:left;
    font-size:18px;
    letter-spacing:0;
    line-height:undefined;
  }
  #e241_154 { 
    opacity:1;
    width:93px;
    height:45px;
    position:absolute;
    left:1136px;
    top:26px;
  }
  #e241_155 { 
    background-color:rgba(255, 255, 255, 1);
    opacity:1;
    width:45px;
    height:45px;
    position:absolute;
    left:0px;
    top:0px;
  }
  #ei241_155_1_22 { 
    background-color:rgba(153.00000607967377, 184.00000423192978, 79.00000289082527, 1);
    opacity:1;
    width:45px;
    height:45px;
    position:absolute;
    left:0px;
    top:0px;
  }
  #e241_156 { 
    color:rgba(0, 0, 0, 1);
    opacity:1;
    width:34px;
    height:21px;
    position:absolute;
    left:59px;
    top:11px;
    font-family:Roboto;
    text-align:left;
    font-size:18px;
    letter-spacing:0;
    line-height:undefined;
  }
  #e241_157 { 
    color:rgba(125.37500202655792, 0, 90.27003854513168, 1);
    opacity:1;
    width:290px;
    height:62px;
    position:absolute;
    left:61px;
    top:16px;
    font-family:Sunshiney;
    text-align:left;
    font-size:47px;
    letter-spacing:0;
    line-height:undefined;
  }
  #e241_158 { 
    opacity:1;
    border:1px solid rgba(0, 0, 0, 1);
    width:411px;
    height:0px;
    position:absolute;
    left:539px;
    top:327px;
  }
  #e241_159 { 
    opacity:1;
    width:144px;
    height:41.14285659790039px;
    position:absolute;
    left:684px;
    top:841px;
  }
  #e241_160 { 
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
  #e241_161 { 
    color:rgba(255, 255, 255, 1);
    opacity:1;
    width:118.54884338378906px;
    height:13.925274848937988px;
    position:absolute;
    left:14.1962890625px;
    top:12.724761962890625px;
    font-family:Roboto;
    text-align:center;
    font-size:14px;
    letter-spacing:0;
    line-height:undefined;
  }
  #e241_166 { 
    opacity:1;
    border:0.30000001192092896px solid rgba(0, 0, 0, 1);
    width:164px;
    height:33px;
    position:absolute;
    left:810px;
    top:354px;
  }
  #e241_167 { 
    opacity:1;
    border:0.30000001192092896px solid rgba(0, 0, 0, 1);
    width:164px;
    height:33px;
    position:absolute;
    left:810px;
    top:401px;
  }
  #e241_168 { 
    opacity:1;
    border:0.30000001192092896px solid rgba(0, 0, 0, 1);
    width:164px;
    height:33px;
    position:absolute;
    left:810px;
    top:451px;
  }
  #e241_169 { 
    opacity:1;
    border:0.30000001192092896px solid rgba(0, 0, 0, 1);
    width:164px;
    height:33px;
    position:absolute;
    left:810px;
    top:502px;
  }
  #e241_170 { 
    opacity:1;
    border:0.30000001192092896px solid rgba(0, 0, 0, 1);
    width:164px;
    height:33px;
    position:absolute;
    left:810px;
    top:553px;
  }
  #e241_171 { 
    opacity:1;
    border:0.30000001192092896px solid rgba(0, 0, 0, 1);
    width:164px;
    height:33px;
    position:absolute;
    left:810px;
    top:606px;
  }
  #e241_172 { 
    opacity:1;
    border:0.30000001192092896px solid rgba(0, 0, 0, 1);
    width:164px;
    height:33px;
    position:absolute;
    left:810px;
    top:652px;
  }
  #e241_173 { 
    opacity:1;
    border:0.30000001192092896px solid rgba(0, 0, 0, 1);
    width:164px;
    height:33px;
    position:absolute;
    left:810px;
    top:709px;
  }
</style>
