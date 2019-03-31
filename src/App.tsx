import React, { Component } from 'react';
import { StateProvider } from './state/StateProvider';
import { rootReducer, initialStateCtx } from './state/reducers';
import DisplayNumber from './components/DisplayNumber';
import DisplayReddit from './components/DisplayReddit';

class App extends Component {
  render() {
    return (
      <StateProvider reducer={rootReducer} initialState={initialStateCtx}>
        <DisplayNumber center={true}/>
        <DisplayReddit />
      </StateProvider>
    );
  }
}

export default App;
