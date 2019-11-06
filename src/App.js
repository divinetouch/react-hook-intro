import React from 'react';
import './App.css';
import ComponentC from "./components/context/ComponentC";

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
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
      <UserContext.Provider value={'Divine'}>
        <ChannelContext.Provider value={'Codevolution'}>
          <ComponentC/>
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default App;
