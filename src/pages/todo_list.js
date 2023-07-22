import { useState } from "react"



export function Todo({ todo, onChange }) {

    const [newValue, setnewValue] = useState('')

    const [isChecked, setIsChecked] = useState(todo.isChecked);

        const [isLocalChecked, setIsLocalChecked] = useState(todo.isChecked);
        if (isLocalChecked !== isChecked) {
            setIsLocalChecked(isChecked);
        }


    const [list, setList] = useState([
        {title: 'Learn Html', id: '1', isChecked: false},
        {title: 'Learn Css', id: '2', isChecked: false},
        {title: 'Learn Js', id: '3', isChecked: false},
        {title: 'Learn React', id: '4', isChecked: false},
        {title: 'Learn PHP', id: '5', isChecked: false},

    ])

    const handleChange = (e) => {
        setnewValue(e.target.value)
      }

      const handleCreate = () => {
        setList([...list, { title: newValue, id: list?.length +1 }])
        setnewValue('')
    }


    const todoDelete = (id) => {
        setList(list.filter((item) => item.id !== id));
      };

    const todoEdit = (id) => {
        setList(list.filter((item) => item.id !== id));
    }
    return(

        <div className="todo">
            <div className="wrapper">
                <div className="container">
                    <h1>TODO LIST</h1>
                    <div className="input_button">
                        <input className="input" type="text" placeholder={'add item...'}
                            onChange={(e) => handleChange(e)}
                            value={newValue}/>
                            {/* <p>  {newValue}</p> */}
                        <button onClick={handleCreate}>ADD</button>
                    </div>
                    <div className="list">
                        {
                            list?.map((elem,i) => (
                                <div key={elem.id} className="list_elem">
                                    
                                  <p style={{display:'flex', justifyContent:'space-between'}}>{elem?.title}
                                     <div className="input_button">
                                     <input type='checkbox'
                                            checked={isChecked} 
                                                onChange={(e)=> {
                                                setIsLocalChecked(e.target.checked);
                                                setIsChecked(e.target.checked)
                                                onChange({
                                                    ...todo,
                                                    isChecked: e.target.checked
                                                })
                                                console.log(isChecked)
                                            }}
                                            
                                        />

                                        <button onClick={() => todoDelete(elem.id)}>Delete</button>
                                        <button onClick={() => todoEdit(elem.id)}>Edit</button>
                                     </div>
                                 </p>
                                </div>
                            ))
                        }
                    </div>
                        
                </div>
            </div>
        </div>
    
    
    )
}