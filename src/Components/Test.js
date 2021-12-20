import './SCSSs/Test.scss'
import { connect } from 'react-redux';
import {buyCake,buyIcecream} from './Redux/Actions'
function Test(props) {
  
  
  
  return (
    <div className="Counter">
          <h1>{props.cakes}</h1>
          <h1>{props.icecreams}</h1>
          <div>
          <button onClick={props.buyCake} > buy cake </button>
          <button onClick={props.buyIcecream} > buy icecreams </button>
          </div>
    </div>
    )
  }
 const dispatchtoprops  = (dispatch) => {
   return{
    buyCake: ()=>{dispatch(buyCake())},
    buyIcecream: ()=>{dispatch(buyIcecream())}
   }
 }
 const statetoprops = (state)=>{
   return{
    cakes: state.cakes,
    icecreams: state.icecreams
   }
 }
export default connect(statetoprops,dispatchtoprops)(Test)
