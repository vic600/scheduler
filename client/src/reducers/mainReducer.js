import { GET_TASKS, ADD_TASKS } from '../actions/type';

const InitialState = {
    tasks:[
        {name:'vic',email:'vic@mail.com',phone:254724589004}
    ]
}
export default function(state = InitialState, action){
    switch (action.type) {
        case GET_TASKS:
            return { ...state }
        
        default:
            return state
    }
}