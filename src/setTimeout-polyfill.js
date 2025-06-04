globalThis.myTimerId = 12323534;
globalThis.myTimers = {};


const isBrowser = typeof  requestIdleCallback === 'function';

function scheduleProcessTimers() {
    if (isBrowser) {
        requestIdleCallback(processTimers);
    } else {
        setImmediate(processTimers);
    }
}

export const mySetTimeout = function (callback, delay, ...args) {
    const timerId = globalThis.myTimerId++;

    globalThis.myTimers[timerId] = {callback, time : delay + Date.now(), args};

    if(Object.keys(globalThis.myTimers).length === 1) {
        scheduleProcessTimers();
    }

    return timerId;
}


const processTimers = function(){

    const executeTimers = function (keys) {
        const {callback, time , args} = globalThis.myTimers[keys];

        if(Date.now() >= time) {
            callback(...args);
            delete globalThis.myTimers[keys];
        }else {
            scheduleProcessTimers();
        }
    }


    Object.keys(globalThis.myTimers).forEach(executeTimers);
}


export const myClearTimeout = function(key) {
    if(globalThis.myTimers[keys]) delete globalThis.myTimers[keys];
}