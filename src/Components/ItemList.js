import React from 'react';
import {connect} from 'react-redux';
import Item from './Item.js'

const ItemList = ({todos=[]})=>{
    console.log(todos);
    return (
        todos.length ?
        <ul>
            {todos.map((todo)=>{
                return <li key={todo.id}><Item item={todo}/></li>
            })}
        </ul>
        :
        <p>No items.</p>
    )
}

const mapStateToProps = state => ({
    todos: state.todos
})

export default connect(mapStateToProps, null)(ItemList);
