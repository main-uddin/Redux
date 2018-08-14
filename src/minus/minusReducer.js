let minusReducer = (state = { result: 0 }, action) => {
  switch (action.type) {
    case 'minus':
      return {
        ...state,
        result: state.result - 1
      }
    default:
      return state
  }
}
export { minusReducer }
