import Test from './Components/Test'
import './App.css';
import store from './Components/Redux/Stores'
import {Provider} from 'react-redux'
import ReduxHooks from './Components/ReduxHooks';
import AsyncRedux from './Components/AsyncRedux';
function App() {
  return (
    <Provider store={store}>
          <Test />
          <ReduxHooks/>
          <AsyncRedux/>
    </Provider>
  );
    
}

export default App;
