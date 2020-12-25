export const updateCart = (state, payload) => {
  state.user.carts.push(payload)
  state.user.point += payload.point
}

export const decrementPoint = (state, payload) => {
  state.user.point--
  state.Dialog.connection = false
  state.Dialog.confirm = false
}
