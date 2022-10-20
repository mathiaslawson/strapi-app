import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "./state/index"

function App() {
 
  const state = useSelector((state) => state)

  const dispatch = useDispatch()
  const { depositeMoney, withdrawMoney}  = bindActionCreators(actionCreators, dispatch)

  console.log(state.account)

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
