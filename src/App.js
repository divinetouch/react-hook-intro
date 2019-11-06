import React, { useReducer } from 'react';
import './App.css';

import DataFetchingTwo from "./components/useReducer/DataFetchingTwo";

// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()

// export const CountContext = React.createContext()

// const initialState = 0
// const reducer = (state, action) => {
//   switch(action) {
//     case 'increment':
//       return state + 1
//     case 'decrement':
//       return state - 1
//     case 'reset':
//       return initialState
//     default:
//       return state
//   }
// }

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      {/*<ClassCounter/>*/}
      {/*<HookCounter/>*/}
      {/*<HookCounterTwo/>*/}
      {/*<HookCounter4/>*/}
      {/*<ClassCounterOne/>*/}
      {/*<HookCounterOne/>*/}
      {/*<ClassMouse/>*/}
      {/*<HookMouse/>*/}
      {/*<MouseContainer/>*/}
      {/*<IntervalClassCounter/>*/}
      {/*<HookIntervalCounter/>*/}
      {/*<DataFetching/>*/}
      {/*<UserContext.Provider value={'Divine'}>*/}
      {/*  <ChannelContext.Provider value={'Codevolution'}>*/}
      {/*    <ComponentC/>*/}
      {/*  </ChannelContext.Provider>*/}
      {/*</UserContext.Provider>*/}
      {/*<CounterOne/>*/}
      {/*<CounterTwo/>*/}
      {/*<CounterThree/>*/}
      {/*<CountContext.Provider value={{countState: count, countDispatch: dispatch}}>*/}
      {/*  Count : {count}*/}
      {/*  <ComponentA/>*/}
      {/*  <ComponentB/>*/}
      {/*  <ComponentC/>*/}
      {/*</CountContext.Provider>*/}
      {/*<DataFetchingOne/>*/}
      <DataFetchingTwo/>
    </div>
  )
}

export default App
