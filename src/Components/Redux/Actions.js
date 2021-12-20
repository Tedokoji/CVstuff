import axios from 'axios'

import { BUY_CAKE, BUY_ICECREAM, FETCH_COMMENTS_FAILED, FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS } from './Types';
export const buyCake = (payload) =>{
    return {
        type: BUY_CAKE,
        amount: payload
    }
}
export const buyIcecream = (payload) =>{
    return {
        type: BUY_ICECREAM,
        amount: payload

    }
}
export const fetchCommentsRequest = () =>{
    return{
        type: FETCH_COMMENTS_REQUEST,
        comments: []
    }
}
export const fetchCommentsSuccess = (payload) =>{
    return{
        type: FETCH_COMMENTS_SUCCESS,
        comments: payload     
    }
}
export const fetchCommentsFailed = () =>{
    return{
        type: FETCH_COMMENTS_FAILED 
    }
}
export const fetchComments= () =>{
    return function (dispatch) {
        dispatch(fetchCommentsRequest())
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(res=>{
                dispatch(fetchCommentsSuccess(res.data))
                
            })
    }
}