export const throttleAdvance = function (callback, delay, options = {}) {
    const {leading = true, trailing = true} = options;
    let lastCall = 0;
    let timeoutId = null;

    return function (...args) {
        const now = Date.now();
        const self = this || globalThis;
        // when leading is false and its first call 
        if(!leading && lastCall == 0) {
            lastCall = now;
        }


        if(now - lastCall >= delay) {
            callback.apply(self, args);
            lastCall = now;
            clearTimeout(timeoutId);

        }else if(trailing) {
            clearTimeout(timeoutId);
            const remaining = delay - (now - lastCall);
            timeoutId = setTimeout(()=> {
                callback.apply(self, args);
                lastCall = leading ? Date.now() : 0; 
                // if leading is false aurr toh zero hona chaiyee tbhii toh lastcall se baad fir se shuru krne ke baad first event nhii aaehaa

            },remaining);
        }
    }
}