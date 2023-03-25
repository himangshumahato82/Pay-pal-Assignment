import { useState } from "react";

import { useDispatch } from "react-redux";

import { addNewTodo } from "../redux/actions";


const TodoForm = () => {
    const [text, setText] = useState({
        name:"",
        task:"",
        date:""
    });

    console.log(text)
    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        dispatch(addNewTodo(text));

        setText('');
        
    }
   
    const onInputChange = (e) => {
        const { name, value } = e.target;
        setText((text) => ({
            ...text,
            [name]: value,
          }));
    }

    return (
        <div className="todo">
            <form className="form" onSubmit={onFormSubmit} 
            style={{display:"flex",justifyContent:"space-between"}}
             name="name"
             onChange={onInputChange} 
             
             value={text.name}>
            <input type="text"  placeholder="Enter Your Name"/>
                <input
                    placeholder="Enter Your Work..."
                    className="inputa"
                    name="work"
                    onChange={onInputChange}
                    value={text.task}
                />
                <input type="date"  name="date"  onChange={onInputChange}  value={text.date}/>
                <input  type="submit" className="submitButton" value="Submit" />

            </form>
        </div>
    )
}

export default TodoForm;