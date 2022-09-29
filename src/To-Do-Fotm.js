import { useState } from "react"


const ToDoForm = ({addTask}) => {

    const [userInput,setUserInput] = useState('')

        const handleSubmit = (e) => {
            e.preventDefault();
            addTask(userInput);
            setUserInput('')

        }

        const handleChange = (e) => {
            setUserInput(e.currentTarget.value)

        }
        const handleKeyPress = (e) => {
           if(e.key==='Enter') {
            handleSubmit(e)
           }
        }

    return (

        <form onSubmit={handleSubmit}>
          <input type="text" 
          placeholder="Введите задачу"
          onChange={handleChange}
          value = {userInput}
          onKeyDown = {handleKeyPress}/>
          <button>Сохранить</button>
        </form>
    )

    }

    export default ToDoForm