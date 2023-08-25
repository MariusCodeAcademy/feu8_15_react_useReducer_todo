import { useReducer, useState } from 'react';

const initCounterValue = { countNum: 0, countTitle: 'Push Ups' };

function counterReducer(state, action) {
  console.log('state ===', state);
  // console.log('action ===', action);
  // state.countNum = 5 // negalima
  switch (action.type) {
    case 'UP':
      return { ...state, countNum: state.countNum + 1 };
    case 'DOWN':
      return { ...state, countNum: state.countNum - 1 };
    case 'RESET':
      return initCounterValue;
    case 'UPBY':
      return { ...state, countNum: state.countNum + action.payload };
    default:
      console.warn('tipas nerastas');
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(counterReducer, {
    countNum: 0,
    countTitle: 'Push Ups',
  });
  // const [state, setState] = useState({ countNum: 0 });
  const [cred, setCred] = useState({
    email: '',
    pass: 'secret',
    town: 'Kaunas',
  });
  // console.log('state ===', state);
  function goUp() {
    dispatch({ type: 'UP' });
    // setState({ countNum: state.countNum + 1 });
    // setCred({ ...cred, email: 'james@bond.com' });
  }
  function goDown() {
    dispatch({ type: 'DOWN' });
    // setState({ countNum: state.countNum - 1 });
  }
  function reset() {
    // make it work
    dispatch({ type: 'RESET' });
  }

  function upBy(howMuch) {
    console.log('howMuch ===', howMuch);
    dispatch({ type: 'UPBY', payload: howMuch });
  }

  // console.log('cred ===', cred);
  return (
    <div className='card'>
      <h2>{state.countTitle}</h2>
      <p className='counter'>{state.countNum}</p>
      <div>
        <button onClick={goUp}>UP</button>
        <button onClick={goDown}>DOWN</button>
        <button onClick={reset}>Reset</button>
        <button onClick={() => upBy(10)}>up by 10</button>
      </div>
    </div>
  );
}
