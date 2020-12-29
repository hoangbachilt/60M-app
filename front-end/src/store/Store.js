import Vue from 'vue'
import Vuex from 'vuex'

import FindLove from './modules/findLove'
import Dialog from './modules/dialog'

import * as getters from './Getters'
import * as mutations from './Mutations'
import * as actions from './Actions'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: {
      id: 1,
      point: 0,
      carts: [],
      countCart: {}
    },
    seatBookings: [],
    listData: [
      {
        id: 1,
        name:  "Nguyễn Hoàng Bách",
        age: 23,
        work: "hust",
        location: "hà nội",
        image: "../../public/assets/avatar1.jpg",
        facebook: "fb.com/bach",
        zalo: "zalo.com.vn/bach",
        phone: '0123456789'
      },
      {
        id: 2,
        name:  "Nguyễn Hoàng Hà",
        age: 23,
        work: "hust",
        location: "hà nội",
        image: "../../public/assets/avatar2.jpg",
        facebook: "fb.com/ha",
        zalo: "zalo.com.vn/ha",
        phone: '0123456789'
      },
      {
        id: 3,
        name:  "Nguyễn Đ.K Hải",
        age: 23,
        work: "hust",
        location: "hà nội",
        image: "../../public/assets/avatar3.jpg",
        facebook: "fb.com/hai",
        zalo: "zalo.com.vn/hai",
        phone: '0123456789'
      },
      {
        id: 4,
        name:  "Tạ Quyền Anh",
        age: 22,
        work: "hust",
        location: "hà nội",
        image: "../../public/assets/avatar4.jpg",
        facebook: "fb.com/anh",
        zalo: "zalo.com.vn/anh",
        phone: '0123456789'
      }
    ],
    seats: []
  },
  getters,
  mutations,
  actions,
  modules: {
    FindLove,
    Dialog
  }
})
