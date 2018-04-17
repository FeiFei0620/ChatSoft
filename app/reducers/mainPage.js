import { fromJS } from "immutable";

const CHANGE_SELECTED_KEY = "mainPage/CHANGE_SELECTED_KEY";

const initialState = {
    seletedKeys: "1"
};

export default (state = initialState, action) =>{
    let newState;

    switch(action.type){
        case CHANGE_SELECTED_KEY:
            return fromJS(state).set('seletedKeys', action.data).toJS();
        default:
            return state;
    }
}

export const updateSelectedKey = (data) => ({
    type: 'mainPage/CHANGE_SELECTED_KEY',
    data: data
})
