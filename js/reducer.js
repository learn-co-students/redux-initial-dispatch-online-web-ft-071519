let state;

function changeState(state={count: 0}, action){
    switch (action.type) {
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
      default:
        return state;
    }
  }

function dispatch(action){
    state = changeState(state, action)
    render()
}

function render(){
    document.body.textContent = state.count
}
console.log(state)
dispatch({ type: '@@INIT' })
console.log(state)
dispatch({type: "INCREASE_COUNT"})
console.log(state)
