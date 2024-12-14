import TodoItem from "./TodoItem"
import { useAppSelector } from "../hook"
//import { useSelector } from "react-redux";


const TodoList:React.FC = () =>{
    // const todos = useAppSelector(state => state.todos.list);
    const todos = useAppSelector(state => state.persistedReducer.todos.list);

    return(
        <>
            {todos&&<ul>
                {
                    todos.map(todo => <TodoItem key={todo.id} {...todo}/>)
                    
                }
            </ul>}
        </>
        
    )
}

export default TodoList