import appleBusketReducers, {eatApple as test} from '../reducers/appleBasketReducer';

export const eatApple = (id) =>{
    dispatch(test(id));
}