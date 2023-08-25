import { useState } from 'react';

export default function Counter() {
  const [value, setValue] = useState(0);
  const [cred, setCred] = useState({
    email: '',
    pass: 'secret',
    town: 'Kaunas',
  });

  function goUp() {
    setValue(value + 1);
    setCred({ ...cred, email: 'james@bond.com' });
  }
  function goDown() {
    setValue(value - 1);
  }
  console.log('cred ===', cred);
  return (
    <div className='card'>
      <h2>Counter</h2>
      <p className='counter'>{value}</p>
      <div>
        <button onClick={goUp}>UP</button>
        <button onClick={goDown}>DOWN</button>
      </div>
    </div>
  );
}
