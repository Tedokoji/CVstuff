import {useSelector,useDispatch} from 'react-redux';
import { buyCake, buyIcecream } from './Redux/Actions';


function ReduxHooks() {
  const numcakes = useSelector(state => state.cakes)
  const icecreams = useSelector(state => state.icecreams)
  const cakeac = useDispatch()
  const iceac = useDispatch()
    return (
    <div className="Counter">
        <h1>{numcakes}</h1>
        <h1>{icecreams}</h1>
        <div>
        <button onClick={()=>{cakeac(buyCake())}}> buy c </button>
        <button onClick={()=>{cakeac(buyIcecream())}}> buy ic </button>
        </div>
  </div>
    )
}

export default ReduxHooks

