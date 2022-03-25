export function changeValue(e){
    return {
        type: "changeValue",
        payload: e.target.value
    }
}