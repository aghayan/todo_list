import { Todo } from "./pages/todo_list";
import { useState } from 'react'

function App() {

  const [list, setList] = useState([
    {title: 'Learn Html', id: '1', isChecked: false},
    {title: 'Learn Css', id: '2', isChecked: false},
    {title: 'Learn Js', id: '3', isChecked: false},
    {title: 'Learn React', id: '4', isChecked: false},
    {title: 'Learn PHP', id: '5', isChecked: false},

])

  return (
    <div className="App">
      <Todo  
      todo={list}
          
          
       onChange={(newTodo) => {
            setList(list.map((elem) => {
              if (elem.id === newTodo.id) {
                return newTodo;
              }
              return elem
            }
            ))
          }}/>

      {/* <TodoFooter /> */}
    
    </div>
  );
}

export default App;
