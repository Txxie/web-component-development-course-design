export function getRandomNumber(num) {
    // Math.random取的是0-1的随机数字，所以乘以个数字，比如乘以5，就可以取到0-5的随机数，
    // 又由于取到的随机数是小数，所以最好是向下取整，即再用Math.floor包裹起来
    return Math.floor(Math.random() * num);
}