import axios from "axios"
import authHeader from "../services/auth-header.js"

export const updateCart = (state, payload) => {
  if (state.user.carts.length == 0) {
    state.user.carts.push(payload)
    state.user.point += payload.point
    state.user.countCart[payload.id] = 1
  } else {
    state.user.carts.forEach((item, index) => {
      if (JSON.stringify(payload) === JSON.stringify(item)) {
        state.user.countCart[item.id] += 1
        state.user.point += payload.point
      } else if(index === (state.user.carts.length -1)) {
        state.user.carts.push(payload)
        state.user.point += payload.point
        state.user.countCart[payload.id] = 1
      }
    })
  }
}

export const decrementPoint = (state, payload) => {
  state.user.point--
  state.Dialog.connection = false
  state.Dialog.confirm = false
}

export const removeCarts = (state, payload) => {
  state.user.carts.splice(payload, 1);
}

export const bookingSeats = (state, payload) => {
  state.seatBookings = payload
}

export const incrementCount = (state, payload) => {
  state.user.countCart[payload.id] ++
}

export const decrementCount = (state, payload) => {
  state.user.countCart[payload.id] --
}

export const seat = (state, payload) => {
  state.seats = payload
}
