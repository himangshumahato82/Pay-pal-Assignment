import { useState } from "react";

import { useDispatch } from "react-redux";

import { addNewTodo } from "../redux/actions";


const TodoForm = () => {
    const [text, setText] = useState("")

    console.log(text)
    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        dispatch(addNewTodo(text));

        setText('');
        
    }
   
    const onInputChange = (e) => {
       
        setText(e.target.value)
         
    }

    return (
        <div className="todo">
            <form className="form" onSubmit={onFormSubmit} 
            style={{display:"flex",justifyContent:"space-between"}}
             >
            
                <input
                    placeholder="Enter Your Task..."
                    className="inputa"
                    name="work"
                    onChange={onInputChange}
                    value={text.task}
                />
               
                <input  type="submit" className="submitButton" value="Submit" />

            </form>
        </div>
    )
}

export default TodoForm;