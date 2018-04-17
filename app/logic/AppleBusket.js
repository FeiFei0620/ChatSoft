import appleBusketReducers from '../reducers/appleBasketReducer'

export const pickAppleLogic = ()=>{
    dispatch(appleBusketReducers.beginPickApple());
}