
export function TodoItem(todo, onChange) {
    return(
        <div>
            <label>
                <input type={"checkbox"} checked={todo.isCompleted} onChange={(e) => {
                    onChange({
                        ...todo,
                        isCompleted: e.target.checked
                    })
                }}/>

                {todo.text}
            </label>
        </div>
    )
}


