import { useState } from 'react';
import TodoList from './components/TodoList';
import InputField from './components/InputField';
import { useAppDispatch } from './hook';
import { addTodo } from './store/todoSlice';

import './App.css';

function App() {
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();

  const addTask = () =>{
    if(text.trim().length){
      dispatch(addTodo(text));
      setText('');
    }
    
  } 

  return (
    <div className="App">
      <InputField text={text} handleChangeText={setText} handleAddTodo={addTask} />

      <TodoList />
    </div>
  );
}

export default App;
