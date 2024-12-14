import { Button, Input } from "@mui/material";

interface InputFieldProps {
    text:string,
    handleChangeText: (str: string) => void,
    handleAddTodo: () => void
}

const InputField: React.FC<InputFieldProps> = ({text, handleChangeText, handleAddTodo}) =>{
    return(
        <label>
            <Input placeholder="New Todo" value={text} onChange={(e) => handleChangeText(e.target.value)}/>
            <Button onClick={handleAddTodo}>Add Todo</Button>
        </label>
    )
}

export default InputField