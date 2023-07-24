

import { useState } from "react";
import { TodoFooter } from "./footer";
import { TodoItem } from "./todoitem";

export function Todo({ todo, onChange }) {
  const [newValue, setNewValue] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");

  const [list, setList] = useState([
    { title: "Learn Html", id: "1", isChecked: false },
    { title: "Learn Css", id: "2", isChecked: false },
    { title: "Learn Js", id: "3", isChecked: false },
    { title: "Learn React", id: "4", isChecked: false },
    { title: "Learn PHP", id: "5", isChecked: false },
  ]);

  const handleChange = (e) => {
    setNewValue(e.target.value);
  };

  const handleCreate = () => {
    setList([...list, { title: newValue, id: (list.length + 1).toString() }]);
    setNewValue("");
  };

  const todoDelete = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const todoEdit = (id) => {
    setEditingId(id);
    const todoToEdit = list.find((item) => item.id === id);
    setEditingTitle(todoToEdit.title);
  };

  const handleEditChange = (e) => {
    setEditingTitle(e.target.value);
  };

  const handleSaveEdit = () => {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === editingId ? { ...item, title: editingTitle } : item
      )
    );
    setEditingId(null);
    setEditingTitle("");
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditingTitle("");
  };



  const handleDeleteAll = () => {
    setList([]);
  };

  return (
    <div className="todo">
      <div className="wrapper">
        <div className="container">
          <h1>TODO LIST</h1>
          <div className="input_button">
            <input
              className="input"
              type="text"
              placeholder={"add item..."}
              onChange={handleChange}
              value={newValue}
            />
            <button onClick={handleCreate}>ADD</button>
          </div>
          <div className="delete_button">
            <button onClick={handleDeleteAll}>All</button>
          </div>
          <div className="list">
            {list?.map((elem, i) => (
              <div key={elem.id} className="list_elem">
                <p className="text_list" style={{ display: "flex", justifyContent: "space-between" }}>
                  {editingId === elem.id ? (
                    <input
                      type="text"
                      value={editingTitle}
                      onChange={handleEditChange}
                    />
                  ) : (
                    elem.title
                  )}
                  <div className="input_button">
                    <TodoItem key={todo.id} todo={todo} onChange={onChange} />
                    {editingId === elem.id ? (
                      <>
                        <button onClick={handleSaveEdit}>Save</button>
                        <button onClick={handleCancelEdit}>Cancel</button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => todoDelete(elem.id)}>Delete</button>
                        <button onClick={() => todoEdit(elem.id)}>Edit</button>
                      </>
                    )}
                  </div>
                </p>
              </div>
            ))}
          </div>
        </div>
        <TodoFooter
          list={list}
          onClearCompleted={() => {
            setList(list.filter((todo) => !todo.isChecked));
          }}
        />
      </div>
    </div>
  );
}
