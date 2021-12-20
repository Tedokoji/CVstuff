import {useSelector,useDispatch} from 'react-redux';
import { buyCake, buyIcecream } from './Redux/Actions';
import {useState} from 'react'


function ReduxHooks() {
  const numcakes = useSelector(state => state.cakes)
  const icecreams = useSelector(state => state.icecreams)
  const cakeac = useDispatch()
  const [amount, setAmount] = useState(1)
    return (
    <div className="Counter">
        <h1>{numcakes}</h1>
        <h1>{icecreams}</h1>
        <div>
        <button onClick={()=>{cakeac(buyCake(amount))}}> buy {amount} cake(s) </button>
        <button onClick={()=>{cakeac(buyIcecream(amount))}}> buy {amount} ic(s)  </button>
        </div>
        <input onChange={(e)=>{setAmount(e.target.value)}}/>
  </div>
    )
}

export default ReduxHooks

