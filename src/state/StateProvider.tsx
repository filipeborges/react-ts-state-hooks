import React, {createContext, useContext, useReducer} from 'react';
import { IAppContext, IStateProvider, IStateReducer } from './types';

export const StateContext = createContext<IAppContext | null>(null);

// Only on functional components;
export const useStateValue = () => useContext(StateContext);

export const StateProvider = (
  { reducer, initialState, children } : IStateProvider ) => (
    <StateContext.Provider value={{
      appContext: useReducer<IStateReducer>(reducer, initialState)
    }}>
      { children }
    </StateContext.Provider>
  );

