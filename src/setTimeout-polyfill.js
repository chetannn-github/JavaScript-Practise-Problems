window.myTimerId = 12323534;
window.myTimers = {};

export const mySetTimeout = function (callback, delay, ...args) {
    const timerId = window.myTimerId++;

    window.myTimers[timerId] = {callback, time : delay + Date.now(), args};

    if(Object.keys(window.myTimers),length === 1) {
        requestIdleCallback(processTimers);
    }

    return timerId;
}


const processTimers = function(){

    const executeTimers = function (keys) {
        const {callback, time , args} = window.myTimers[keys];

        if(Date.now() >= time) {
            callback(...args);
            delete window.myTimers[keys];
        }else {
            requestIdleCallback(processTimers);
        }
    }


    Object.keys(window.myTimers).forEach(executeTimers);
}


export const myClearTimeout = function(key) {
    if(window.myTimers[keys]) delete window.myTimers[keys];
}