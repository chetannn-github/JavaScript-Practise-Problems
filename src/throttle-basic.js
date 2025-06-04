// throttling ensures atmost once the execution of fn in every delay time


export const  myThrottleBasicUsingDate = function (callback, delay) {
    let lastCall = 0;

    return function (...args) {
        let now = Date.now();

        if(now - lastCall >= delay) {
            callback.apply(this, args);
            lastCall = now;
        }
    }


}


export const myThrottleBasicUsingTimer = function (callback, delay) {
    let isWaiting = false;

    return function (...args) {
        if(!isWaiting) {
            callback.apply(this, args);
            isWaiting = true;

            setTimeout(()=>{ 
                isWaiting = false
            },delay);
        }
    }
}