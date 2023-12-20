let count = 0;
const getData = () => {
    console.log('getData function called', count++);
}

const debounce = function(fn, delay) {  // 'delay' is basically the delay between two key press events.
    let timer;
    return function() {
        let context = this;
        let args = arguments;

        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);  // if there are any arguments.
        }, delay)
    }
}

// don't call on every key stroke, rather call only when user pauses while typing.
const betterFunction = debounce(getData, 300);
