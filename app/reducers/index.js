import { combineReducers } from 'redux';
import appleBasketReducer from './appleBasketReducer';
import userInfo from './userInfo';
import mainPage from './mainPage';
import mainContent from './mainContent';

const rootReducer = combineReducers({
    appleBasket: appleBasketReducer,
    userInfo: userInfo,
    mainPage: mainPage,
    mainContent: mainContent
})

export default rootReducer;