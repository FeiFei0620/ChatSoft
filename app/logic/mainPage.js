import {updateSelectedKey} from '../reducers/mainPage';

export const updateSelectedKeyLogic = (key) =>{
    dispatch(updateSelectedKey(key));
}