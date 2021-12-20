import { BUY_CAKE,BUY_ICECREAM } from "./Types"

const initState = {
    cakes: 69,
    icecreams: 420
}
const reducer  = (state  = initState, actions) =>{
    switch(actions.type){
        case BUY_CAKE:
            return{
                ...state,
                cakes: state.cakes -1
            }
        case BUY_ICECREAM:
            return{
                ...state,
                icecreams: state.icecreams -1
            }
        default: return state
    }
} 

export default reducer