import {createStore,applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios'
const initState ={
    loading: false,
    user: [],
    error: ''
}
const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
const FETCH_USER_ERROR   = 'FETCH_USER_ERROR'

const fetchUserRequest= ()=>{
    return{
        type: FETCH_USER_REQUEST
    }
}
const fetchUserSuccess= (users)=>{
    return{
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}
const fetchUserError= (err)=>{
    return{
        type: FETCH_USER_ERROR,
        payload: err
    }
}
const reducer = (state = initState,actions)=>{
    switch(actions.type){
        case FETCH_USER_REQUEST:
            return{
                ...state,
                loading: true
            }
        case FETCH_USER_SUCCESS:
            return{
                    loading: false,
                    users: actions.payload,
                    error: ''
                }
        case FETCH_USER_ERROR:
            return{
                loading: false,
                users:[],
                error: actions.payload
            }
    }

}
const fetchUser = ()=>{
return function(dispatch){
    dispatch(fetchUserRequest())
    axios.get('https://jsonplaceholder.typicode.com/users')
     .then(res=>{
         const users = res.data.map(user => user.id);
        dispatch(fetchUserSuccess(users))
     })
     .catch(err=>{
        dispatch(fetchUserError(err.message))
     })
}
}
const store = createStore(reducer,applyMiddleware(thunkMiddleware))
store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchUser())
