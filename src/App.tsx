import React, { Component } from 'react';
import { StateProvider } from './state/StateProvider';
import { reducer, initialStateCtx } from './state/reducers';
import DisplayNumber from './components/DisplayNumber';

class App extends Component {
  render() {
    return (
      <StateProvider reducer={reducer} initialState={initialStateCtx}>
        <DisplayNumber center={true}/>
      </StateProvider>
    );
  }
}

export default App;
