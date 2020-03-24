import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../Actions'
// import {addTodo} from ''

const UselessButton = ({add, todos = []})=>{
    const addHandler = ()=>{
        add("[HACKED]");
    }
    
    console.log("TODOS:", todos);

    return (
        <div>
            <ul>
                {todos.length ? todos.map(todo=>(<li key={todo.id}>{todo.text}</li>)) : <p>No messsages.</p>}
            </ul>
            <button onClick={addHandler}>
                LeButton
            </button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todos : state.todos
    }
};

const mapDispatchToProps = (dispatch) => ({
    add: text => dispatch(addTodo(text))
});

export default connect(mapStateToProps,mapDispatchToProps)(UselessButton);