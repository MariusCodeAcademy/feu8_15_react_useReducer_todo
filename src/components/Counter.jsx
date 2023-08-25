import { useReducer, useState } from 'react';

const initCounterValue = { countNum: 0 };

function counterReducer(state, action) {
  console.log('state ===', state);
  console.log('action ===', action);

  if (action === 'UP') {
    return { countNum: state.countNum + 1 };
  } else if (action === 'DOWN') {
    return { countNum: state.countNum - 1 };
  }

  return state;
}

export default function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initCounterValue);
  // const [state, setState] = useState({ countNum: 0 });
  const [cred, setCred] = useState({
    email: '',
    pass: 'secret',
    town: 'Kaunas',
  });
  // console.log('state ===', state);
  function goUp() {
    dispatch('UP');
    // setState({ countNum: state.countNum + 1 });
    // setCred({ ...cred, email: 'james@bond.com' });
  }
  function goDown() {
    dispatch('DOWN');
    // setState({ countNum: state.countNum - 1 });
  }
  function reset() {
    // make it work
  }
  // console.log('cred ===', cred);
  return (
    <div className='card'>
      <h2>Counter</h2>
      <p className='counter'>{state.countNum}</p>
      <div>
        <button onClick={goUp}>UP</button>
        <button onClick={goDown}>DOWN</button>
        <button>Reset</button>
      </div>
    </div>
  );
}
