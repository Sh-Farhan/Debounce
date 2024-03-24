const input = document.querySelector(".input");

// input.addEventListener("click", (event) => {
//     console.log(event);
// })

function inputHandler(event){
    console.log(event.target.value);
}

function debounce(callback,delay){
    let timerId;
    return function(...args) {
        clearInterval(timerId)
        timerId = setTimeout(() => {
            callback(...args);
        },delay)
    }
}

const debouncedInputHandler = debounce(inputHandler,500);

input.addEventListener("keyup", debouncedInputHandler);