import React from 'react';
import {connect} from 'react-redux';
import Item from './Item.js'

//Materials
import {makeStyles} from '@material-ui/core/styles'
import {Button} from '@material-ui/core/Button'

const useStyles = makeStyles({
    roundBox: {
        border: "1px solid black", 
        borderRadius: "10%"
    //     'input[type="text"]' : {
    //         border-radius: 50%;
    //     }
    // }
}
});

const ItemList = ({todos=[]})=>{
    console.log(todos);
    const classes = useStyles();

    return (
        todos.length ?
        <ul className={classes.roundBox}>
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
