// import React from 'react'
// const ToDoLists = (props) => {



//     return (
//         <>
//             <div className="todo_style">
//                 <i className="fa fa-times" aria-hidden="true"
//                     onClick={() => {
//                         props.onSelect(props.id);
//                     }} />
//                 <li>{props.text}</li>
//             </div>
//         </>
//     )
// }
// export default ToDoLists
import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListCom from './ListCom';


const ToDoLists = () => {
    const [item, setItem] = useState()
    const [newitem, setNewItem] = useState([])
    const itemEvent = (event) => {
        setItem(event.target.value)
    }
    const listofItem = () => {
        setNewItem((preValue) => {
            return [...preValue, item]
        })
        setItem("")
    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDoList</h1>
                    <br />
                    <input
                        type="text"
                        placeholder="Add an Item"
                        onChange={itemEvent}
                        value={item}
                    />
                    <Button className="newBtn" onClick={listofItem}>
                        <AddIcon />
                    </Button>
                    <br />
                    <ol>
                        {
                            newitem.map((val, index) => {
                                return < ListCom key={index} text={val} />
                            })}
                    </ol>
                </div>

            </div>
        </>
    )
}
export default ToDoLists;