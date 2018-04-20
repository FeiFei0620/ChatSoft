import appleBusketReducers from '../reducers/appleBasketReducer'
/**
 * map&forEach是同步触发async
 * for是异步触发async
 */
export const pickAppleLogic = async ()=>{
    // dispatch(appleBusketReducers.beginPickApple());
    console.log("start");
    let result, waitUpResult;
    try{
        // result = await sleep(10000);                 //1.
        // console.log(result);
        // waitUpResult = await waitUp();                   //2.                只有1执行完成了，2才会执行
        // console.log(waitUpResult);
        let [result, waitUpResult] = await Promise.all([sleep(10000), waitUp()])          //3.同时触发
        console.log(result, waitUpResult);                           //4. 只有3执行完了，4才会执行
    }catch(err){
        console.error(err)
    }
    console.log('end');
}

const sleep = async (time)=>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.warn("sleep");
            resolve(`sleep ${time} ms`);
            // reject(`error result`)
        }, time);
    })
}

const waitUp = async ()=>{
    console.warn("waitUp");
    return await Promise.resolve("waitUp Result");
}