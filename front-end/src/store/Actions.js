export const updateCart = ({commit}, payload) => {
  commit('updateCart', payload)
}

export const decrementPoint = ({commit}, payload) => {
  commit('decrementPoint', payload)
}

export const removeCarts = ({commit}, payload) => {
  commit('removeCarts', payload)
}

export const bookingSeats = ({commit}, payload) => {
  commit('bookingSeats', payload)
}

export const incrementCount = ({commit}, payload) => {
  commit('incrementCount', payload)
}

export const decrementCount = ({commit}, payload) => {
  commit('decrementCount', payload)
}

export const seats = ({commit}, payload) => {
  commit('seat', payload)
}
