const initialState = {
    count:0
}
const rootReducer = (state=initialState ,action) => {
  switch(action.type) {
    case "INCRIMENT":
        return {...state , count:state.count+1}

    case "DECRIMENT":
        return {...state , count:state.count-1}

    default :
    return state
  }
}
export default rootReducer;