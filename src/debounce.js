// debouncing delays execution of fn until after certain time has passed since it was called (latest)


export const debounce = function (callBackFn, delay) {
    try {
        let timer = '';

        return function (...args) {
            clearTimeout(timer);
            let self = this;
            setTimeout(() => {
                callBackFn.apply(self, args);
            }, delay);
        }
    } catch (error) {
        console.error(error.message);
        
    }
    
}
