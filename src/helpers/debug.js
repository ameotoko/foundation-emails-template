module.exports = function (param) {
    console.log("Current Context");
    console.log("====================");
    console.log(this);

    if (param) {
        console.log("Value");
        console.log("====================");
        console.log(param);
    }
}