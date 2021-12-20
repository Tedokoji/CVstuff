import { BUY_CAKE,BUY_ICECREAM,FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_FAILED } from "./Types"

const initState = {
    cakes: 69,
    icecreams: 420,
    comments : []
}
const reducer  = (state  = initState, actions) =>{
    switch(actions.type){
        case BUY_CAKE:
            return{
                ...state,
                cakes: state.cakes - actions.amount
            }
        case BUY_ICECREAM:
            return{
                ...state,
                icecreams: state.icecreams - actions.amount
            }
        case FETCH_COMMENTS_REQUEST:
            return{
                ...state,
                isLoading: true
            }
        case FETCH_COMMENTS_SUCCESS:
            return{
                ...state,
                isLoading: false,
                comments: actions.comments
            }
        case FETCH_COMMENTS_FAILED:
            return{...state,
                isLoading: false,
            }
        default: return state
    }
} 

export default reducer