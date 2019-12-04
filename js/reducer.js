// declare state
let state

// reducer does not persist state change. Default argument sets initial state
function changeState(state = { count: 0 }, action){
    switch (action.type) {
      //  actions
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
      default:
        return state;
    }
  }

//  dispatch persists changes to state
function dispatch(action){
    //  updates state to reducer value
    state = changeState(state, action)
    //  renders with new state
    render()
}

function render(){
    document.body.textContent = state.count
}

// renders initial state because @@INIT action does not exist
dispatch({type: '@@INIT'})
