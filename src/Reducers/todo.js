const ADD_TODO = "ADD_TODO";

const todos = (state = [], action)=>{
    switch(action.type){
        case ADD_TODO:
            console.log("action:", action);
            let newState = [...state, {
                id: Math.random(), text: action.text
            }];
            console.log("ADD_TODO:", newState);

            return newState;
        default:
            return state;
    }
}

export default todos;