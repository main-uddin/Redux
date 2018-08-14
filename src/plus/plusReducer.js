let plusReducer = (state = { result: 0 }, action) => {
  switch (action.type) {
    case 'plus':
      return {
        ...state,
        result: state.result + 1
      }
    default:
      return state
  }
}
export { plusReducer }
