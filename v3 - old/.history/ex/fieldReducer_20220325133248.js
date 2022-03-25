const INITIAL_STATE = {value: "Opa"}

export default function (state = INITIAL_STATE, action){
    if(action.type == "VALUE_CHANGED"){
        return { ...state, value: action.payload}
    }
}