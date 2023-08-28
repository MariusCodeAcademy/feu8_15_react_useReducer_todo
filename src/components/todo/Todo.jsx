import { useReducer, useState } from 'react';

const initTodos = [
  { id: 1, title: 'Buy Eggs', done: false, date: '' },
  { id: 2, title: 'Go to Shopping', done: true, date: '' },
  { id: 3, title: 'Do a 100 pushups', done: false, date: '' },
];

function todoReducer(state, action) {
  let newTodoObj;
  switch (action.type) {
    case 'ADD':
      // prideti nauja obj
      newTodoObj = {
        id: +new Date(),
        title: action.payload,
        done: false,
        date: new Date().toLocaleDateString(),
      };
      console.log('newTodoObj ===', newTodoObj);
      return [...state, newTodoObj];
    default:
      console.warn('action type not found');
      return state;
  }
}

function Todo() {
  const [newTodoVal, setNewTodoVal] = useState('');
  const [state, dispatch] = useReducer(todoReducer, initTodos);
  // sukirti useReducer() fn
  // atvaizduoti sarasa is state
  // atvaizdtuoti todo kurie yra baigti perbrauktus ir pilkus (prideti klase)
  // padaryti kad eitu prideti todo
  // sukuriant nauja todo prideti data i date
  // padaryti kad eitu istrinti todo
  // padaryti kad paspaudus ant title todo taptu baigtas (done: false|true)
  // suskaidyti i atskirus komponentus

  function handleSubmit(e) {
    e.preventDefault();
    console.log('submit');

    dispatch({ type: 'ADD', payload: newTodoVal });
  }

  console.log('state ===', state);
  return (
    <div>
      <h2>Welcome to our Todo</h2>
      <p>{state.map(({ title }) => title).join(', ')}</p>
      <p>ivesta: {newTodoVal}</p>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Add todo</legend>
          <input
            onChange={(e) => setNewTodoVal(e.target.value)}
            value={newTodoVal}
            type='text'
            placeholder='Add todo'
          />
          <button type='submit'>Add</button>
        </fieldset>
      </form>

      {/* <TodoList list={todos} */}
      <ul>
        {/* <TodoItem item={item} */}
        {state.map((tObj) => (
          <li key={tObj.id}>
            <span>
              {tObj.title} (id{tObj.id}){' '}
            </span>{' '}
            <button>delete (id)</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
