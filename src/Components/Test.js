import './SCSSs/Test.scss'
import { connect } from 'react-redux';
import {buyCake,buyIcecream} from './Redux/Actions'
function Test(props) {
  
  
  
  return (
    <div className="Counter">
          <h1>cakes:{props.cakes}</h1>
          <h1>icecreams:{props.icecreams}</h1>
          <h1>items:{props.item}</h1>
          <div>
          <button onClick={props.buyCake} > buy cake </button>
          
          <button onClick={props.buyIcecream} > buy icecreams </button>
          </div>
    </div>
    )
  }
 const dispatchtoprops  = (dispatch, ownProps) => {
   
   return{
    buyCake: ()=>{dispatch(buyCake(1))},
    buyIcecream: ()=>{dispatch(buyIcecream(1))}
   }
 }
 const statetoprops = (state,ownProps)=>{
  const items = ownProps.cake ? state.cakes : state.icecreams

   return{
    cakes: state.cakes,
    icecreams: state.icecreams,
    item: items
   }
 }
export default connect(statetoprops,dispatchtoprops)(Test)
