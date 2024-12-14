import { useAppDispatch } from "../hook"
import { removeTodo, toggleTodoComplete } from "../store/todoSlice"
import { Checkbox } from "@mui/material";
import Span from "./Span";

interface TodoItemProps {
    id: string, 
    title: string,
    completed: boolean
}

const TodoItem: React.FC<TodoItemProps> = ({id, title,completed}) =>{
    const dispatch = useAppDispatch();
    return(
        <li key = {id}>
            <Checkbox checked={completed} onChange={(e) =>{
                dispatch(toggleTodoComplete(id))
            }}  />
            <Span title={title} bool={completed} clasName="completed" />
            
            
            
            <span className='delete' onClick={() =>dispatch(removeTodo(id))}>&times;</span>
            {/* <input type = "checkbox" checked={completed} onChange={() => usedispatch(toggleTodoComplete({id}))}/> */}
        </li>
    )
}

export default TodoItem