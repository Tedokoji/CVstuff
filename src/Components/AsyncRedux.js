import {useEffect} from 'react'
import {fetchComments} from './Redux/Actions'
import {connect} from 'react-redux'
function AsyncRedux(props) {
 useEffect(()=>{
     console.log('hi')
     props.fetchComments()
 },[])
   
    return (
        <div>
            {
                props.comments.map(e=>{
                    return(
                        <h2>{e.body}</h2>
                    )
                })
            }
        </div>
    )
}
const mapStateToProps = (state)=>{
    return{
        comments : state.comments
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        fetchComments : ()=>{dispatch(fetchComments())}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AsyncRedux)
