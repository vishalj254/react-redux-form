/* eslint-disable no-new-object */
const initialState={
    post:new Object(),
    person:new Object(),
}

function rootReducer(state=initialState,action){
    switch(action.type)
    {
        case 'ADD_POST':
        state.post[action.payload[0]]=action.payload[1]
        return {post:state.post,person:state.person}

        case 'ADD_PERSON':
        state.person[action.payload[0]]=action.payload[1]
        return {post:state.post,person:state.person}
        
        default:
        return state

      
    }
}

export default rootReducer
