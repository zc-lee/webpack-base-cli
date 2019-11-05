var img1 = require('./assets/test.jpeg');
img_box1.src = img1;

console.log(process.env.NODE_ENV)
let func = async () => {
    if (!Array.prototype.flat) {
        Array.prototype.flat = function () {
            return this.reduce((acc, val) => acc.concat(val), [])
        }
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('=>')
            let arr = [1, [2, [3]]]
            console.log(arr.flat(Infinity))
            resolve()
        }, 2000);
    })
}
func().then(() => {
    console.log('then')
})