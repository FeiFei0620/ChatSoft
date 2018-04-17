import { fromJS } from "immutable";

const ADD_CHAT = "userInfo/ADD_CHAT";
const CHANGE_STATUS = "userInfo/CHANGE_STATUS";
const CHANGE_USERNAME = "userInfo/CHANGE_USERNAME";

const initialState = {
  chatLog: "abc",
  statusMessage: "0",
  userName: "phil"
};

export default (state = initialState, action) =>{
    let newState;

    switch(action.type){
        case ADD_CHAT:
            return fromJS(state).set('chagLog', "def").toJS();
        case CHANGE_STATUS:
            return fromJS(state).set('statusMessage',"1")
                                .toJS();
        case CHANGE_USERNAME:
            return fromJS(state).set('userName', "phil2").toJS();
        default:
            return state;
    }
}

export const beginPickApple = () => ({
    type: 'apple/BEGIN_PICK_APPLE'
})

export const eatApple = appleId => ({
    type: 'apple/EAT_APPLE',
    payload: appleId
})

