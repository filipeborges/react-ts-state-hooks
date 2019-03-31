import React from 'react';
import { useStateValue } from '../state/StateProvider';
import { increment, decrement } from '../state/actions';

interface IDisplayNumberProps {
  center: boolean;
}

const centerStyle = {
  textAlign: 'center' as 'center'
};

export default (props: IDisplayNumberProps) => {
  const ctx = useStateValue();
  const [state, dispatch] = ctx ? ctx.appContext : [null, null];

  return (
    state && dispatch &&
    <div>
      <div style={props.center ? centerStyle : undefined}>
        <label>{state.counter.count}</label>
      </div>
      <div style={props.center ? centerStyle : undefined}>
        <button onClick={() => dispatch(increment)}>+</button>
        <button onClick={() => dispatch(decrement)}>-</button>
      </div>
    </div>
  );
}
