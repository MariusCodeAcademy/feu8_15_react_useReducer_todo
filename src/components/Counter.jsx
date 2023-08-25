export default function Counter() {
  function goUp() {}
  function goDown() {}
  return (
    <div>
      <h2>Counter</h2>
      <p className='couner'>0</p>
      <div>
        <button>UP</button>
        <button>DOWN</button>
      </div>
    </div>
  );
}
