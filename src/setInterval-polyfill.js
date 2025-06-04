globalThis.myIntervals = {};
globalThis.myIntervalId = 12212312;


const isBrowser = typeof  requestIdleCallback === 'function';

function scheduleProcessIntervals() {
    if (isBrowser) {
        requestIdleCallback(processIntervals);
    } else {
        setImmediate(processIntervals);
    }
}


export const mySetInterval = function (callback, delay, ...args) {
    const intervalId = globalThis.myIntervalId++;

    globalThis.myIntervals[intervalId] = {callback, time : delay + Date.now(), args, delay};

    if(Object.keys(globalThis.myIntervals).length === 1) {
        scheduleProcessIntervals();
    }

    return intervalId;
}

const processIntervals = function() {
    function executeTimers(key) {
        const {callback, time , args, delay} = globalThis.myIntervals[key];

        if(time <= Date.now()) {
            callback(...args);
            globalThis.myIntervals[key].time = delay + Date.now();
        }
    }

    Object.keys(globalThis.myIntervals).forEach(executeTimers);
    if (Object.keys(globalThis.myIntervals).length > 0) {
        scheduleProcessIntervals();
    }
}


export const myClearInterval = function(key) {
    if(globalThis.myIntervals[key]) delete globalThis.myIntervals[key];
}