function myOwnSetTimeout(fn, duration) {
    setTimeout(fn, duration);
}
myOwnSetTimeout(function () {
    console.log("Hi There");
}, 5000)
