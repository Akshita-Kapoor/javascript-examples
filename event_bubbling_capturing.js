document.querySelector('#grandparent')
    .addEventListener('click', () => {
        console.log('Grandparent div');
    }, false);   // turn it true to see the magic of event capturing (third argument is actually useCapture boolean value)

document.querySelector('#parent')
    .addEventListener('click', (e) => {
        console.log('Parent div');
        // to stop propagation
        e.stopPropagation();
    }, false)    // turn it true to see the magic of event capturing

document.querySelector('#child')
    .addEventListener('click', () => {
        console.log('Child div');
    }, false)    // turn it true to see the magic of event capturing
