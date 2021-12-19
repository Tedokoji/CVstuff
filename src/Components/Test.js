import './SCSSs/Test.scss'
import  {useState, useLayoutEffect} from 'react'
import axios from 'axios'

function Test() {
    function GET(){
      axios.get('http://localhost:3000/logininfo')
      .then(res=>setInfo(res))
    }
     const [info,setInfo] = useState([])
     useLayoutEffect(()=>{
        
        GET()
    
        
     },[])
    return (
        <div>
          {
              info.map(e=>{
                return(
                    <h5 key={e.id} >{e.name}</h5>
                )
              })
          }
        </div>
    )
}

export default Test
